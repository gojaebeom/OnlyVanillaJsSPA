const Card = (prop) => {
return`
<!-- card -->
<div class="card" style="margin:10px;">
    <div class="card-image">
        <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
        <div class="media-left">
            <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
            </figure>
        </div>
        <div class="media-content">
            <p class="title is-4">${prop.name}</p>
            <p class="subtitle is-6">@${prop.name}</p>
        </div>
        </div>

        <div class="content">
        ${prop.content}<br/>
        <a href="#">#css</a> <a href="#">#responsive</a>
        <br>
        <time datetime="2016-1-1">${prop.date}</time>
        </div>
    </div>
</div>
`};

export default Card;