import Template from './Template.js';

export class Home extends Template {
    constructor(params){
        super(params);
        this.setTitle("Home");
    }

    async getHtml(){
        return `
        <section class="section">
            <article class="left-article">
                <!-- profile card 🎨 -->
                <div class="profile-card">
                    <div class="profile-card-image-wrap">
                        <img src="https://gojaebeom.github.io/images/avartar/avartar.jpg" alt="profile-image">
                    </div>
                    <div class="profile-card-info-wrap">
                        <h2>gojaebeom</h2>
                        <h3>재범 일상블로그😍</h3>
                    </div>
                    <div class="profile-card-content-wrap">
                        <div class="post-cnt">
                            <div class="key">포스트</div>
                            <div class="value">60</div>
                        </div>
                        <div class="category-cnt">
                            <div class="key">카테고리</div>
                            <div class="value">12</div>
                        </div>
                        <div class="tag-cnt">
                            <div class="key">태그</div>
                            <div class="value">80</div>
                        </div>
                    </div>
                    <button class="profile-card-fallow-btn">팔로우</button>
                    
                </div>
            <!--x profile card x-->
            </article>
            <article class="center-article">
                <div class="post-card">
                    <div class="post-card-header">
                        <div class="post-card-thumbnail-wrap">
                            <img src="https://github.com/gojaebeom/hexo-blog-server/blob/master/themes/icarus/source/images/%EC%9E%90%EB%B0%94/thumbnail.png?raw=true" alt="cover">
                        </div>
                        <div class="post-card-title-wrap">
                            <h1>자바스크립트 시작하기</h1>
                        </div>
                        
                    </div>
                </div>
                <div class="card post-card">
                    게시글
                </div>
                <div class="card post-card">
                    게시글
                </div>
            </article>
            <article class="right-article">
                <div class="card">
                    카테고리
                </div>
            </article>
        </section>
        `
    }
} 