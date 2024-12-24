import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
        this.cardsData = [];
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner" id="carousel-inner">
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#main-page" data-bs-slide="prev" style="padding: 1px;">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: rgba(130, 130, 130);"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#main-page" data-bs-slide="next" style="padding: 1px;">
                    <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: rgba(130, 130, 130);"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                <div class="controls">
                    <button id="add-card" class="btn btn-primary">Add Card</button>
                    <button id="remove-card" class="btn btn-danger">Remove Last Card</button>
                </div>
                </div>
            `
        );
    }
    
    async fetchData() {
        try {
            const response = await fetch('http://localhost:8000/stocks');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            this.cardsData = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    async render() {
        this.parent.innerHTML = '';
        const html = this.getHTML();
        this.parent.insertAdjacentHTML('beforeend', html);
    
        const carouselInner = document.getElementById('carousel-inner');
        carouselInner.innerHTML = '';
    
        await this.fetchData();
    
        this.cardsData.forEach((item, index) => {
            const productCard = new ProductCardComponent(this.pageRoot);
            const cardHTML = productCard.getHTML(item, this.clickCard.bind(this));
    
            const carouselItemHTML = `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    ${cardHTML}
                </div>
            `;
    
            carouselInner.insertAdjacentHTML('beforeend', carouselItemHTML);
        });

        document.getElementById('add-card').addEventListener('click', this.addCard.bind(this));
        document.getElementById('remove-card').addEventListener('click', this.removeCard.bind(this));
    }    

    clickCard(e) {
        const cardId = e.target.dataset.id
        const cardTitle = e.target.dataset.title;
        const cardSrc = e.target.dataset.src;
        const productPage = new ProductPage(this.parent, cardId, cardTitle, cardSrc)
        productPage.render()
    }

    async addCard() {
        const newCard = {
            id: this.cardsData.length + 1,
            src: `https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg`,
            title: `Новый предмет ${this.cardsData.length + 1}`,
            text: `Описание для нового предмета ${this.cardsData.length + 1}`
        };
    
        try {
            const response = await fetch('http://localhost:8000/stocks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newCard)
            });
    
            if (!response.ok) {
                throw new Error(`Ошибка добавления карточки: ${response.statusText}`);
            }
    
            const createdCard = await response.json();
    
            this.cardsData.push(createdCard);
            this.render();
    
        } catch (error) {
            console.error('Ошибка при добавлении карточки:', error);
            alert('Не удалось добавить карточку');
        }
    }
    
    async removeCard() {
        if (this.cardsData.length === 0) {
            alert('Нет карточек для удаления');
            return;
        }
    
        const lastCard = this.cardsData[this.cardsData.length - 1];
    
        try {
            const response = await fetch(`http://localhost:8000/stocks/${lastCard.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            if (!response.ok) {
                throw new Error(`Ошибка удаления карточки: ${response.statusText}`);
            }

            this.cardsData.pop();
            this.render();
    
        } catch (error) {
            console.error('Ошибка при удалении карточки:', error);
            alert('Не удалось удалить карточку');
        }
    }    
}