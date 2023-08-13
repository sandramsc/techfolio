const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

// Search hair_products.json and filter
const searchProducts = async (searchText) => {
  const res = await fetch("../data/hair_products.json");
  const hair_products = await res.json();

  // Get matches to cureent text input
  let matches = hair_products.filter((hair_product) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return hair_product.brand.match(regex) || hair_product.shampoo.match(regex);
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
        <h4 class="text-white">${match.brand}</h4>
        <h5><small class="text-danger">Shampoo: ${match.shampoo}</small></h5>
        <h5><small class="text-info">Conditioner: ${match.conditioner}</small></h5>
        <h5><small class="text-success">Gel/Mousse: ${match.gel}</small></h5>
        
</div>`
      )
      .join("");

    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchProducts(search.value));
