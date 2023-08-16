/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
class Scarf {
    constructor(name, price, color, year) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.year = year;
    }
    getSummary() {
        return `The ${this.name} is a new design in its range and costs ${this.price}.`;     
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        retrun `The article is ${this.name} has been in stock for ${years} years.`;
    }
    revise(changeYear) {
        this.year = changeYear;
        this.revise = true;
    }
static topClothingStore() {
    //i.e
    return 'H&M';

}
}
const x = 'h&m';
const r = 'H&M';

// Instantiate Object

const scarf1 = new Scarf('Cashmere scarf', '£59.99','beige', '2017');
const scarf2 = new Scarf('Patterned scarf','£9.99','yellow', '2018');

// console.log(scarf2);
// scarf2.revise('2019');
// console.log(scarf2.getSummary())
// console.log(Scarf.topClothingStore())
console.log(x.toUpperCase())
console.log(r.toLowerCase())
