import { Dashboard } from './views/Dashboard.js';
import { Detail } from './views/Detail.js';
import { Posts } from './views/Posts.js';

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g,"(.+)")+"$");


const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i)=>{
        return [key, values[i]];
    }));
};


const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path:'/', view: Dashboard },
        { path:'/posts', view: Posts },
        { path:'/posts/:id', view: Detail },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    let match = potentialMatches.find(potentialMatch => {
        return potentialMatch.result !== null
    });

    if(!match){
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));
    document.querySelector('#app').innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(typeof e.target.dataset.link === 'string'){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});


