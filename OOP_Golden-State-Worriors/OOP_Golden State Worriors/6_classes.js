/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
//(ES6)

class Profile {
    constructor(name, jersey, drafted, month) {
        this.name = name;
        this.jersey = jersey;
        this.drafted = drafted;
    }
    getSummary() {
        return `${this.name} wears jersey number ${this.jersey}.`;
    }
    getYearsInGSW() {
        const years = new Date().getFullYears -this.drafted;
    return `${this.name} has been in the team for ${this.drafted} years.`;
}
revise(changeYear) {
    this.drafted = changeYear;
    this.revised = true;
}

// a method used without instantiating an object--no need to instantiate
static teamLeague() {
    return 'Pacific Division';
}
}

// Instantiate Object
const profile11 = new Profile('Alen Smailagic', '6', '2019');
 
// console.log(profile11)
// console.log(profile11.getSummary())
// profile11.revise('2020')
console.log(Profile.teamLeague())
