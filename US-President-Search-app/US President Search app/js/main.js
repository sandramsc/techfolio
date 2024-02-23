const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search presidents.json and filter
const searchPresidents = async (searchText) => {
  const res = await fetch("../data/presidents.json");
  const presidents = await res.json();

  // Get matches to cureent text input
  let matches = presidents.filter((president) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return president.name.match(regex) || president.number.match(regex);
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
        <h4 class="text-white">${match.name}<span class="text-white"> (${match.number})</span></h4>
        <small class="text-warning">Start: ${match.start} - End: ${match.end}</small>
        <small class="text-success">Favourite food: ${match.favourite_food}</small>
        <small class="text-info">Interesting fact: "${match.interesting_fact}"</small>
        
</div>`
      )
      .join("");

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchPresidents(search.value));
