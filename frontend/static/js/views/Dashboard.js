import Template from './Template.js';

export class Dashboard extends Template {
    constructor(){
        super();
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
        <h1>대시보드</h1>
        <p>
            프레임워크 없이 만들어보는 자바스크립트 SPA
        </p>
        <p>
            <a href="/posts" data-link>포스트 보기</a>
        </p>
        `
    }
} 