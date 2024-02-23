//The items clicked on. Grabing tab-items & tab-content-items from the DOM
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

/// Select tab content item. Which takes in an event parameter
function selectItem(e) {
    //Calling a function called removeBorder that will remove theborder from all of the items before classList.add method happens.
    removeBorder();
    //Calling the function removeShow
    removeShow();
    // Add border to current tab. Any particular item that is clicked can be accessed using "this."
    // classList.add is a method that adds a class
    this.classList.add('tab-border');
    // Grab content from DOM. Dynamically selecting tab-1/2/3-content
    // ${this.id} --> template literal syntax
    // #${this.id} --> this turns the tab id's to tab-#1-content, tab-#2-content ect.
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    /// Add show class
    tabContentItem.classList.add('show');
}
// Creating the function to actually remove the border
function removeBorder() {
    //removesborder from all other tabs and places it on the one that is clicked
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
// The idea is to get the .show class onto the correct content...
// remove .show class FIRST otherwise its just going to add the show class to all of them and their just going to on each click.
function removeShow() {
    //removesborder from all other tabs and places it on the one that is clicked
    tabContentItems.forEach(item => item.classList.remove('show'));
}


/// Listen for tab click
// looping through each item, (loops through each item) take that item and add an event listener.
// Listen for a 'click', when its clicked a function called selectItem will be called.
// --selectItem is a function
tabItems.forEach(item => item.addEventListener('click', selectItem));


