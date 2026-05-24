/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
// const x = 'h&m prdocts';
// const y = '2020';
// const z = [2020];
// console.log(x.toUpperCase());
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// console.log(window);
// alert('This is a Lenovo laptop');
// alert('...click OK to continue');

// Check device 
// console.log(navigator.appVersion);

const denim_dress1 = {
name: 'Lyocell denim dress',
price: '£24.99',
colour: 'denim blue',

getSummary: function() {
    return `The "${this.name}" costs ${this.price} and comes in the colour(s) ${this.colour}. `;
}
}

// console.log(denim_dress1)
// console.log(denim_dress1.price)
// console.log(denim_dress1.getSummary());

const denim_dress2 = {
    name: 'Denim shirt dress',
    price: '£24.99',
    colour: 'denim blue',

    getSummary: function() {
        return `The "${this.name}" comes in the colour ${this.colour} and costs ${this.price}.`

    }
}
// console.log(denim_dress2.getSummary())
// console.log(denim_dress2.price)

const denim_dress3 = {
    name: 'Denim dungaree dress',
    price: '£24.99',
    colour: 'denim blue & black',

    getSummary: function() {
        return `This "${this.name}" comes in the colour(s) ${this.colour} and costs ${this.price}.`;
}
}

// console.log(denim_dress3)
// console.log(denim_dress3.getSummary())
// console.log(denim_dress3.colour)

const blazer1 = {
    name: 'Fitted jacket',
    price: '£34.99',
    colour: 'beige & pink',

    getSummary: function() {
        return `The ${this.name} blazer costs ${this.price}`;
    }
}
// console.log(blazer1)
//  console.log(typeof blazer1)
//  alert(blazer1.getSummary())

const blazer2 = {
    name: 'Shawl collar jacket',
    price: '£34.99',
    colour: 'grey, beige and black',

    getSummary:  function() {
        return `The ${this.name} blazer comes in three different colours ${this.colour}`;
    }
}
// console.log(blazer2.name)
// console.log(blazer2.price)
// console.log(blazer2.colour)

// console.log(blazer2.getSummary())

const scarf1 = {
    name: 'Airy scarf ',
    price: '£6.99',
    colour: 'floral',

    getSummary: function() {
        return `The ${this.name} costs ${this.price} and only comes in the colour ${this.colour}.`;

    }
}
// console.log(scarf1)
console.log(scarf1.getSummary())

const scarf2 = {
    name: 'Patterned scarf',
    price: '£9.99',
    colour: 'yellow, beige and pink',

    getSummary: function() {
        return `The ${this.name} costs ${this.price}.`;

    }
}
// console.log(scarf1)
console.log(scarf2.getSummary())


const scarf3 = {
    name: 'Cashmere scarf',
    price: '£59.99',
    colour: 'beige',

    getSummary: function() {
        return `The ${this.name} only comes in the colour ${this.colour}.`;

    }
}
// console.log(scarf1)
console.log(scarf3.getSummary())
