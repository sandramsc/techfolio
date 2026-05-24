/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
// Constructor
function Blazer(name, price) {
    this.name = name;
    this.price = price;
    }

    //getSummary
    Blazer.prototype.getSummary = function() {
        return `This "${this.name}" costs ${this.price}`;
    }

    // Instantiate an Object
    const blazer1 = new Blazer('Fitted jacket','£34.99');
    const blazer2 = new Blazer('Shawl collar jacket','£34.99');

    // console.log(blazer1)

    // Revise / Change price
    Blazer.prototype.revise = function(newPrice) {
        this.price = newPrice;
        this.revise = true;
    };

    console.log(blazer2)
    blazer2.revise('£14.99')
