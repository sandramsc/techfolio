/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
function Book(title, author, season, year) {
    this.title = title;
    this.author = author;
    this.season = season;
    this.year = year;
    }

 //getSummary
    Book.prototype.getSummary = function() {
        return `The ${this.title} magazine was written by ${this.author} This ${this.edition} edition contains articles on sale, upto ${this.sale}.`;
    };

    // Magazine Constructor
    function Magazine(title, author, season, year, sale, edition) {
    Book.call(this, title, author, season, year);

    this.sale = sale;
    this.edition = edition;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazne Object
const mag = new Magazine('H&M Summer 2020', 'Sandra A.', 'Summer', '2020', '12%', '3rd');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

//  console.log(mag);
// console.log(mag.getSummary())
console.log(mag)
