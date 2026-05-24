/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
// (ES6)

class Profile {
    constructor(title, author, year, month) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} on ${this.month} ${this.year}.`;
    }
}

// GSW Magazine Subclass
class Magazine extends Profile{
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

// Instantiate Magazine
const GSWmag = new Magazine('Golden State Worriors Magazine Edition #2', 'Sandra A.','2020', 'Apr');

console.log(GSWmag.getSummary())
