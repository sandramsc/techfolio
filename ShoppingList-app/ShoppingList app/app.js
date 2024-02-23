/* Designed & coded by Sandra Ashipala <https://github.com/sandramsc> */
// Collection Class: Represents a Collection
class Collection{
    constructor(supermarket, item, price){
        this.supermarket = supermarket;
        this.item = item;
        this.price = price;
    }
}

// UI class: Handle UI Task
class UI {
    static displayCollections() {
        const collection = Store.getCollections();

        collection.forEach((collection) => UI.addCollectionToList(collection));
    }
    static addCollectionToList(collection){
        const list = document.querySelector('#shopping-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${collection.supermarket}</td>
        <td>${collection.item}</td>
        <td>${collection.price}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
        `;
list.appendChild(row);
    }
    static deleteCollection(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
static  showAlert(message, className){
 const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#shopping-form');
    container.insertBefore(div, form);

// Vanish in 5 seconds
setTimeout(()=> document.querySelector('.alert').remove(), 2500);
}

static clearFields() {
    document.querySelector('#supermarket').value = '';
    document.querySelector('#item').value = '';
    document.querySelector('#price').value = '';
   }
}
// Store Class: Handles Storage
class Store{
    static getCollections() {
        let collections;
        if(localStorage.getItem('collections')=== null) {
            collections = [];
    } else {
        collections = JSON.parse(localStorage.getItem('collections'));
    }
    return collections;
}
static addCollection(collection) {
    const collections = Store.getCollections();

    collections.push(collection);
    localStorage.setItem('collections', JSON.stringify(collections));
}
static removeCollection(price) {
    const collections = Store.getCollections();

    collections.forEach((collection, index)=> {
        if(collection.price === price) {
            collections.splice(index, 1);
        }
    });
    localStorage.setItem('collections', JSON.stringify(collections));
         }
}

// Event: Display Collections
document.addEventListener('DOMContentLoaded', UI.displayCollections);

//Event: Add a Collection
document.querySelector('#shopping-form').addEventListener('submit', (e) => {
// Prevent actual submit
   e.preventDefault();

   //Get form values
   const supermarket = document.querySelector('#supermarket').value;
   const item = document.querySelector('#item').value;
   const price = document.querySelector('#price').value;

// Validate
if(supermarket === '' || item === '' || price === '') {
    UI.showAlert('Please fill in all fields', 'danger');
} else {
// Instantiate collection
const collection = new Collection(supermarket, item, price);

// Add collection to UI
UI.addCollectionToList(collection);

// Add collection to store
Store.addCollection(collection);

// Show success message
UI.showAlert('Collection Added', 'sucess');

// Clear fields
UI.clearFields();

}
});

// Event: Remove collection
document.querySelector('#shopping-list').addEventListener('click', (e) => {
      // Remove collection from UI
      UI.deleteCollection(e.target);

// Remove collection from store
Store.removeCollection(e.target.parentElement.previousElementSibling.textContent);

// Show success message
UI.showAlert('Collection Added', 'sucess');
});
