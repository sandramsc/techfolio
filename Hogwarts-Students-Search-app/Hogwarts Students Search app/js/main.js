const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search hogwarts_students.json and filter
const searchStudents = async (searchText) => {
  const res = await fetch("../data/students.json");
  const students = await res.json();

  // Get matches to cureent text input
  let matches = students.filter((student) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return student.name.match(regex) || student.house.match(regex);
  });
  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }
  outputHtml(matches);
};
// Show results in HTML
const outputHtml = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `
        <div class="card card-body mb-3">
        <h4 class="text-white">${match.name}</h4>
        <h5><span class="text-white">(${match.gender})</span></h5>
        <small class="text-warning">House: ${match.house}</small>
        <small class="text-warning">Colors: ${match.colors}</small>
        <small class="text-success">Location: ${match.location}</small>
        
</div>`
      )
      .join("");

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchStudents(search.value));
