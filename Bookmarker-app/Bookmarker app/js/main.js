document.getElementById("myForm").addEventListener("submit", saveBookmark);

// Save Bookmark
function saveBookmark(e) {
  // Get form values
  var siteName = document.getElementById("siteName").value;
  var siteURL = document.getElementById("siteURL").value;

  if (!validateForm(siteName, siteURL)) {
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteURL,
  };

  /*
    // Local Storage Test#
localStorage.setItem('test', 'Hello World');
console.log(localStorage.getItem('test'));
localStorage.removeItem('test');
console.log(localStorage.getItem('test'));
*/

  // Test if bookmarks is null
  if (localStorage.getItem("bookmarks") === null) {
    //Init array
    var bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);
    // Set to localStorage
    localStorage.setItem("bookmarks", JASON.stringify(bookmarks));
  } else {
    //Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    //Add bookmark to array
    bookmarks.push(bookmark);
    //Re-set back to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  // Clear form
  document.getElementById("myForm").reset();

  //Re-fetch bookmarks
  fetchBookmarks();

  // Prevent form from submitting
  e.preventDefault();
}

// Delete bookmark
function deleteBookmark(url) {
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  //Loop through bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      //Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re-set back to localStorage
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  //Re-fetch bookmarks
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks() {
  //Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  // Get output id
  var bookmarksResults = document.getElementById("bookmarksResults");

  //Build output
  bookmarksResults.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML +=
      '<div class="card card-body mb-3 bg-warning" style="color: #000 ">' +
      "<h3>" +
      name +
      ' <a class="btn btn-info" target="_blank" href="' +
      url +
      '">Visit</a> ' +
      " <a onclick=\"deleteBookmark('" +
      url +
      '\')" class="btn btn-danger"  href="#">Delete</a> ';
    "</h3>" + "</div>";
  }
}

//Validate Form
function validateForm(siteName, siteURL) {
  if (!siteName || !siteURL) {
    alert("Please fill in the form");
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteURL.match(regex)) {
    alert("Please use a valid URL");
    return false;
  }
  return true;
}
