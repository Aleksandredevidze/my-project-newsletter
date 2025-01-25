
const products = [
    { name: "Table", price: "$200" },
    { name: "Chair", price: "$100" },
    { name: "Bed", price: "$500" },
    { name: "Couch", price: "$700" },
    { name: "Lamp", price: "$50" },
    { name: "Desk", price: "$250" },
    { name: "Wardrobe", price: "$400" },
    { name: "Dining Table", price: "$600" },
    { name: "TV Stand", price: "$300" },
    { name: "Bookshelf", price: "$150" },
    { name: "Coffee Table", price: "$200" },
    { name: "Recliner", price: "$400" },
    { name: "Sofa", price: "$800" },
    { name: "Cupboard", price: "$350" },
    { name: "Nightstand", price: "$120" },
    { name: "Ottoman", price: "$100" },
    { name: "Hammock", price: "$250" },
    { name: "Console Table", price: "$450" },
    { name: "Vanity", price: "$550" },
    { name: "Accent Chair", price: "$350" },
  ];
  
  const productsPerPage = 10;
  let currentPage = 1;
  
  const productGrid = document.getElementById("product-grid");
  const currentPageSpan = document.getElementById("current-page");
  
  function renderProducts() {
    productGrid.innerHTML = "";
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
  
    currentProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      `;
      productGrid.appendChild(productCard);
    });
  
    currentPageSpan.textContent = `Page ${currentPage}`;
  }
  
  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts();
    }
  });
  
  document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      currentPage++;
      renderProducts();
    }
  });
  
  // Initial Render
  renderProducts();