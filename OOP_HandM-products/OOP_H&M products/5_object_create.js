/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
//Object Of Protos

const dressProtos = {
    getSummary: function() {
        return `The ${this.name} is in stock at H&M for the price of ${this.price}.`;
    },

    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return `The ${this.name} has been in stock for ${years} years.`;
    }
};

// Create an Object ##1
// const dress1 = Object.create(dressProtos);
// dress1.name = 'Lyocell denim dress';
// dress1.price = '£24.99';
// dress1.year = '2016';

// console.log(dress1)
// console.log(dress1.getSummary())

// Create an Object ##2
const dress1 = Object.create(dressProtos, {
    name: {value: 'Lyocell denim dress'},
    price: {value: '£24.99'},
    year: {value: '2017'},
});

// console.log(dress1);
console.log(dress1.getAge())


