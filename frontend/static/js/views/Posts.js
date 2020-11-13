import Template from './Template.js';
import Card from '../components/Card.js';

const posts = [
    {
        name : '스폰지밥',
        content : 'im ready',
        date : '2020-10-11'
    },
    {
        name : '피콜론',
        content : 'pppppppprrrr...',
        date : '2020-10-05'
    },
    {
        name : '손오공',
        content : 'hello world!',
        date : '2020-10-01'
    },
]

export class Posts extends Template {
    
    constructor(params){
        super(params);
        this.postTotal = 3;
        this.setTitle("Posts");
    }

    async getHtml(){
        return `
        <h1>게시글</h1>
        ${ this.domLoop(Card) }
        `
    }

    domLoop(dom) {
        let string = ''
        for(let i = 0; i < this.postTotal; i++) {
            string += dom(posts[i]);
        }
        return string;
    }
} 