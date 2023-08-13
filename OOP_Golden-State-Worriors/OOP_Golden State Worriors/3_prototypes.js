/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
//Constructor (ES5)

function Profile(name, jersey, year) {
this.name = name;
this.jersey = jersey;
this.year = year;
}

// getSummary
 Profile.prototype.getSummary = function() {
     return `${this.name}, jersey number ${this.jersey} was drafted in ${this.drafted}.`;

 }

// getYears (years in GSW)
Profile.prototype.getYears = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.name} has been with the Golden State Worriors for ${years} year(s).`;
}
 // Revise / Change Year
 Profile.prototype.revise = function(changeYear) {
     this.year = changeYear;
     this.revised = true;
 };

//  console.log(profile9.getYears());


// Instantiate an Object
 const profile8 = new Profile('Kevon Looney', '5', '2015');
 const profile9 = new Profile('Eric Paschall', '7', '2019');

 console.log(profile9)
 profile9.revise('2020');
 
