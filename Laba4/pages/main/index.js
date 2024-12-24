import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {groupId} from "../../modules/consts.js";
import {ProductCardComponent} from "../../components/product-card/index.js";
import {ProductPage} from "../product/index.js";

import {arr} from "../../components/product-card/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
    
    getData() {
        ajax.post(urls.getConversations(groupId), (data) => {
            this.renderData(data.response.items)
        })
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        this.getData()
    }

    renderData(items) {
        items.forEach((item, index) => {
            const productCard = new ProductCardComponent(this.pageRoot);
            productCard.render({ ...item, id: index }, this.clickCard.bind(this));
        });
    }    

    clickCard(e) {
        console.log(e.target.dataset.id);
        const cardId = e.target.dataset.id;
        const cardTitle = e.target.dataset.title;
        const cardSrc = e.target.dataset.src;
        const productPage = new ProductPage(this.parent, cardId, arr[cardId], groupId, cardTitle, cardSrc)
        productPage.render()
    }
}