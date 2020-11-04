import Template from './Template.js';

export class Settings extends Template {
    constructor(params){
        super(params);
        this.setTitle("Settings");
    }

    async getHtml(){
        return `
        <h1>설정</h1>
        <p>
            설정
        </p>
        `
    }
} 