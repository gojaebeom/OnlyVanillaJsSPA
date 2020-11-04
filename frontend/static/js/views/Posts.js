import Template from './Template.js';

export class Posts extends Template {
    constructor(){
        super();
        this.setTitle("Posts");
    }

    async getHtml(){
        return `
        <h1>게시글</h1>
        <p>
            테스트 게시글
        </p>
        `
    }
} 