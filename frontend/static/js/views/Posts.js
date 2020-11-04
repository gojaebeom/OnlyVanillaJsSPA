import Template from './Template.js';

export class Posts extends Template {
    constructor(params){
        super(params);
        this.setTitle("Posts");
    }

    async getHtml(){
        return `
        <h1>게시글</h1>
        <p>
            <a href="/posts/1" data-link>1번 게시물</a><br>
            <a href="/posts/2" data-link>2번 게시물</a><br>
            <a href="/posts/3" data-link>3번 게시물</a><br>
        </p>
        `
    }
} 