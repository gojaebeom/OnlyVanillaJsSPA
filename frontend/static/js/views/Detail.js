import Template from './Template.js';

export class Detail extends Template {
    constructor(params){
        super(params);
        this.setTitle("Detail");
    }

    async getHtml(){
        return `
        <h1>${this.params.id}번 게시글</h1>
        <p>
            this is content!
        </p>
        `
    }
} 