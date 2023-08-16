/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
class Article {
    constructor(title, author, year, month) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} (co author Anonymous) on ${this.month}, ${this.year}.`;
    }
}

// Magazine Subclasses
class Magazine extends Article {
    constructor(title, author, year, month) {
        super(title, author, year);
        
        this.month = month;
    }
}

// Instantiate Magazine
const article = new Magazine('Article One', 'Zebrah Stripes', '2014','Dec');

// console.log(article.getSummary())
console.log(article)
