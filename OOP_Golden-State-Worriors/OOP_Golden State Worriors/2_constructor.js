/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
// Constructor

// function Profile(){
//     console.log('Profile Initialized');
// }

function Profile(name, jersey, drafted) {
    this.name = name;
    this.jersey = jersey;
    this.drafted = drafted;
    
    this.getSummary = function() {
        return `${this.name}, jersey number ${this.jersey} was drafted in ${this.drafted}.`;

    }
}

// Instantiate an Object (Profile)

const profile6 = new Profile ('Ky Bowman', '12', '2019');
const profile7 = new Profile ('Marquese Chriss', '32', '2016');

// console.log(profile7);
// console.log(profile7.getSummary());
// console.log(profile6.getSummary());
// console.log(profile6)
console.log(profile6.getSummary())
