/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
// Constructor

// function Denim() {
// console.log('Denim dresses Initialized..');
// }
// console.log(Denim());

function Denim(name, price) {
    this.name = name;
    this.price = price;


    this.getSummary = function(){
return `This ${this.name} dress costs ${this.price}.`;
    }
}

//Instantiate an Object
const denim1 = new Denim('Lyocell denim dress', '£24.99');
const denim2 = new Denim('Denim shirt dress', '£24.99');

// console.log(denim1)

function Scarf(name, colour) {
    this.name = name;
    this.colour = colour;


    this.getSummary = function(){
return `This ${this.name} is only found in ${this.colour}.`;
    }
}

//Instantiate an Object
const scarf1 = new Scarf('Patterned scarf', 'yellow, beige and pink');
const scarf2 = new Scarf('Cashmere scarf', 'beige');

// console.log(scarf1)
console.log(scarf2.getSummary())
