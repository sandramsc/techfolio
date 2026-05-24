/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
/// Object Of Protos (ES5)
const profileProtos = {
    getSummary: function () {
        return `${this.name} was drafted in ${this.drafted}.`;
    },
    getYearsInGSW: function() {
        const years = new Date().getFullYear() - this.year;
        return `${this.name} has been with GSW for ${this.drafted} years.`;
    }
}

// Create Object (method 1)
const profile10 = Object.create(profileProtos)
    profile10.name = 'Jordan Poole';
    profile10.jersey = '3';
    profile10.drafted = '2019';

    console.log(profile10);

// Create Object (method 2)
// const profile10 = Object.create(profileProtos, {
//     name: {value: 'Jordan Poole'},
//      jersey: {value: '3'},
//      drafted: {value: '2019'},
// });
// console.log(profile10);

