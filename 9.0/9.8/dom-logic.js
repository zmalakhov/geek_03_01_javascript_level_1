
// document.addEventListener("DOMContentLoaded", function () {
// });

const opennedFilms = {};

document.addEventListener("DOMContentLoaded", function () {
    for (let category of categories) {
        const newEl = document.createElement("div");
        newEl.classList.add("category");
        newEl.innerText = category;
        newEl.addEventListener("click", function () {
            onCategoryChoice(category);
        });
        document.querySelector(".categories").appendChild(newEl);
    }
});

function getFilmComments(filmName) {
    const film = films.filter( f => f.name === filmName )[0];
    return film.comments;
}

function renderCommentForm(film) {
    const content = `<div class="form-title">Добавьте отзыв фильму ${film.name}</div>
    <div class="form-body">
        <input class="form-author" placeholder="Ваше имя">
        <input class="form-comment" placeholder="Ваш отзыв">
    </div>`;
    const form = document.createElement("div");
    form.classList.add("comment-form");
    form.innerHTML = content;
    return form;
}

function openFilmCard(film, newEl) {
    const comments = getFilmComments(film.name);
    let s = "";
    comments.forEach(c => {
        s+= `<div class="film-comment"><span class="comment-author">${c.author}</span>: ${c.text}</div>`;
    });
    newEl.innerHTML +=`<div class="film-comments">${s}</div>`;
    const addCommentButton = document.createElement("button");
    addCommentButton.innerText = "Добавить отзыв";
    addCommentButton.addEventListener("click", function (event) {
        event.stopPropagation();
        const commentForm = renderCommentForm(film);
        newEl.appendChild(commentForm);
    });
    newEl.appendChild(addCommentButton);
}

function onFilmClick(film, newEl) {
    if (opennedFilms.hasOwnProperty( film.name ) && opennedFilms[film.name] ){
        newEl.innerHTML =`<div class="film-name">${film.name}</div>`;
        opennedFilms[film.name] = false;
        // return ;
    } else {
        openFilmCard(film, newEl);
        opennedFilms[film.name] = true;
    }

}

function renderFilm(film) {
    const newEl = document.createElement("div");
    newEl.classList.add("film");
    newEl.innerHTML =`<div class="film-name">${film.name}</div>`;
    newEl.addEventListener("click", function () {
        onFilmClick(film, newEl);
    });
    document.querySelector(".films").appendChild(newEl);
}

function onCategoryChoice(categoryName){
    document.querySelector(".films").innerHTML="";
    const films = getFilmsByCategory(categoryName);
    for (let film of films) {
        renderFilm(film);
    }
}
