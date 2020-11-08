import Template from './Template.js';

export class Home extends Template {
    constructor(params){
        super(params);
        this.setTitle("Home");
    }

    async getHtml(){
        return `
        <article class="left">
        </article>
        <article class="center">
        </article>
        <article class="right">
        </article>
        `
    }
} 