import {ajax} from "../../modules/ajax.js";
import {urls} from "../../modules/urls.js";
import {ProductComponent} from "../../components/product/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
import {MainPage} from "../main/index.js";

export class ProductPage {
    constructor(parent, id, pId, gId, title, src) {
        this.parent = parent
        this.id = id
        this.gId = gId
        this.pId = pId
        this.title = title
        this.src = src
    }

    getData() {
        console.log(this.pId);
        console.log(this.gId);
        ajax.post(urls.getConversationsById(this.pId, this.gId), (data) => {
            this.renderData(data.response.items)
        })
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    
    renderData(item) {
        const product = new ProductComponent(this.pageRoot)
        console.log(this.id);
        product.render(item[0])
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
        
        this.getData()
    }
}