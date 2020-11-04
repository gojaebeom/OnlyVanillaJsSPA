import { Dashboard } from './views/Dashboard.js';
import { Detail } from './views/Detail.js';
import { Posts } from './views/Posts.js';
import { Settings } from './views/Settings.js';




// pathToRegex 함수는 파라미터 path를 받아 정규표현식으로 반환하는 함수입니다.
// path의 param 값을 사용하기 위한 목적을 가지고 있습니다.
// ^는 문자의 시작을 나타냅니다. 넘어온 path 값이 /posts/:id 라고 한다면 
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g,"(.+)")+"$");

// getParams 함수는 파라미터 match를 받아 
const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    //Object.fromEntries() 메서드는 키값 쌍의 목록을 객체로 바꿉니다. 
    //파라미터 match에서 key와 value를 각각 추출한 것을 객체로 만들어 반환시키기위해 사용하였습니다.
    return Object.fromEntries(keys.map((key, i)=>{
        return [key, values[i]];
    }));
};

// a 태그를 클릭하였을 시 url을 바꾸기 위한 함수입니다.
// 파라미터로 넘어온 url을 update 시키고 router 함수를 실행시킵니다.
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

//router 함수는 dom을 그릴때 server에서 데이터를 받아오는 작업이 있을 수 있기 때문에 비동기 함수로 만듭니다.
//실제로 화면을 새로 갱신하는 역할을 가지고 있습니다.
const router = async () => {
    //페이지를 나누는 부분입니다. path 프로퍼티에 이동할 경로명을 작성하고, 경로에 따라 보여줄 화면클래스를 view 프로퍼티에 담았습니다.
    const routes = [
        { path:'/', view: Dashboard },
        { path:'/posts', view: Posts },
        { path:'/posts/:id', view: Detail },
        { path:'/settings', view: Settings },
    ];

    //routes 배열의 값을 순회하면서 새로운 객체를 반환합니다. 이로써 객체의 불변성을 유지합니다.
    //routes 의 각 객체의 값을 그대로 가져오면서, result 프로퍼티에 현재페이지 url 이름과 값이 같은 것을 할당합니다.
    const potentialMatches = routes.map(route => {
        console.log('%c 정규식으로 바뀐 url','color:red');
        console.log(pathToRegex(route.path));
        console.log('%c match 함수로 정규표현식에 해당하는 문자를 포함하는지 확인, 없으면 null 있으면 조건에 맞는 데이터를 배열로 반환', 'color:blue');
        console.log(location.pathname.match(pathToRegex(route.path)));
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    //잠재적인 매칭값 중 result 프로퍼티가 null이 아닌 것만 반환합니다.
    let match = potentialMatches.find(potentialMatch => {
        //console.log(potentialMatch);
        return potentialMatch.result !== null
    });

    //만약 반환된 값이 없다면 새로운 객체를 생성하고 기본 페이지 정보를 담습니다.
    if(!match){
        console.log('%c 잘못된 매칭, 값이 없지만','color:red');
        console.log(match);
        match = {
            route: routes[0],
            result: [location.pathname]
        };
        console.log('%c 기본정보를 담아준다.','color:red');
        console.log(match);
    }

    console.log('%c 새로운 화면을 만들면서 클래스에게 getParams 함수의 반환 값을 보내준다.','color:red');
    console.log(getParams(match));
    //새로운 화면을 만들고
    const view = new match.route.view(getParams(match));
    //app id를 가진 dom에 innerHTML을 통해 화면을 새로 그려준다.
    document.querySelector('#app').innerHTML = await view.getHtml();
};

//뒤로가기, 앞으로가기 이벤트가 일어날때 router 함수를 실행시킵니다.
window.addEventListener("popstate", router);

//dom이 다 로드 되었을 때 dom중에 클릭 이벤트가 일어나면 
//그 태그중 data-link 속성을 가지고 있는 태그인지 조건검사를 한다.
//조건이 참이라면 새로고침 이벤트를 방지하고 navigateTo 함수를 실행한다.
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});


