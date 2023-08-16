/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
// const s = 'Golden State Worriors';
// // console.log(s.toUpperCase());
// // console.log(typeof s);

// console.log(window);
// // window.alert();
// // alert(2020);
// console.log(navigator.appVersion);

/// Object literal GSW-2020 Lineup
const profile1 = {
    name: 'Andrew Wiggins',
    jersey: '22',
    drafted: '2014',
    getSummary: function() {
    return `${this.name}, jersey number ${this.jersey} was drafted in ${this.drafted}.`;
    }
};
// console.log(profile1);
// console.log(profile1.name);
// console.log(profile1.getSummary());

const profile2 = {
    name: 'Mychal Mulder',
    jersey: '12',
    drafted: '2017',
    getSummary: function() {
return `${this.name}, jersey number ${this.jersey} was drafted in ${this.drafted}.`
    }
};
// console.log(profile2.drafted);
// console.log(profile2.getSummary());
// console.log(profile1.name);
// console.log(Object.values(profile1));
// console.log(Object.keys(profile2));

const profile3 = {
    name: 'Damion Lee',
    jersey: '1',
    drafted: '2016',
    getSummary: function() {
    return `${this.name}, jersey number ${this.jersey} was drafted in ${this.drafted}.`
}
};
// console.log(profile3);
// console.log(profile3.name);
// console.log(profile3.getSummary());
// console.log(Object.keys(profile3));
// console.log(Object.values(profile3));

const profile4 = {
    name: 'Draymond Green',
    jersey: '23',
    drafted: '2012',
getSummary: function() {
 return `${this.name}, jersey number ${this.jersey} was drafted in ${this.drafted}.`;
}
};
// console.log(profile4);
//  console.log(profile4.getSummary());
// console.log(Object.keys(profile4));
// console.log(profile1.getSummary());
// console.log(profile2.getSummary());
// console.log(profile3.getSummary());
// console.log(profile4.getSummary());

const profile5 = {
    name: 'Stephen Curry',
    jersey: '30',
    drafted: '2009',
    getSummary: function () {
        return `${this.name}, jersey number ${this.jersey} was drafted in ${this.drafted} & `;
    }
};

// console.log(profile5)
console.log(profile5.getSummary())
 console.log(profile1.getSummary())
// console.log(Object.values(profile1))
