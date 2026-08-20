const products = [
    {
        name: "Laptop",
        price: 850,
        stock: 10,
        category: "Electronics"
    },
    {
        name: "Phone",
        price: 500,
        stock: 15,
        category: "Electronics"
    },
    {
        name: "Headphones",
        price: 80,
        stock: 25,
        category: "Accessories"
    },
    {
        name: "Keyboard",
        price: 45,
        stock: 20,
        category: "Accessories"
    },
    {
        name: "Backpack",
        price: 60,
        stock: 12,
        category: "Bags"
    },
    {
        name: "Watch",
        price: 120,
        stock: 8,
        category: "Accessories"
    }
];

const renderProductCard = (product) => {
    return `
    <div class="col-12 col-md-4 mb-3">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${employee.name}</h5>
          <p class="card-text text-muted mb-0">${employee.role}</p>
          <p class="card-text"><small class="text-muted">${employee.department}</small></p>
        </div>
      </div>
    </div>
  `;
}

document.getElementById("productList").innerHTML = products
  .map(renderProductCard)
  .join("");