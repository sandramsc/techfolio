/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
// Constructor (ES5)

function Profile(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
}

// getSummary
Profile.prototype.getSummary = function() {
    return `${this.name} was written by ${this.author} in ${this.year}.`;
}


// Golden State Worriors Magazine Edition
 function Magazine (name, author, year, month) {
     Profile.call(this, name, author, year);

     this.month = month;
 }

 //Inherit Prototype
 Magazine.prototype = Object.create(Profile.prototype);

 // Instantiate Magazine Object
 const GSWmag = new Magazine('Golden State Worriors Magazine', 'Sandra A.', '2020', 'Jul');
 
//  console.log(GSWmag.getSummary());

 // Use Magazine Constructor
 Magazine.prototype.constructor = Magazine;
 console.log(GSWmag);

