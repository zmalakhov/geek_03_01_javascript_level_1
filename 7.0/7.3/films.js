const categories = ["Юмор", "Ужастики"];
const films = [];

class Comment {
    constructor(text, author, stars) {
        this.text = text;
        this.author = author;
        this.stars = stars;
    }
}

class Film {
    constructor(name, cat) {
        this.name = name;
        this.category = categories[cat];
        this.comments = [];
    }

    addComment(text, author, stars) {
        this.comments.push(new Comment(text, author, stars));
    }

    getAverageStars() {
        let sumStars = 0;
        this.comments.forEach(comment => sumStars += comment.stars);

        return sumStars / this.comments.length;
    }
}

films.push(new Film("Титаник", 0));
films[0].addComment("хороший фильм", "user", 4);
films[0].addComment("относительно милый фильм", "user", 3);

films.push(new Film("Один дома", 0));
films[1].addComment("смешной фильм", "user", 5);

console.log(films);
console.log(films[0].comments[0]);
console.log(films[0].getAverageStars());