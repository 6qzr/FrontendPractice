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

let totalInventoryValue = 0;
for (const product of products) {
    totalInventoryValue += product.price * product.stock;
}

const rendertTotalInventoryValue = (value) => {
    return `
    <div class="col-12 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Total Inventory Value</h5>
                <p class="card-text">${totalInventoryValue.toFixed(2)}</p>
            </div>
        </div>
    </div>
  `;
}

document.getElementById("totalInventoryValue").innerHTML = rendertTotalInventoryValue(totalInventoryValue);


let stockBelowTen = 0;

for (const product of products) {
    if (product.stock < 10) {
        stockBelowTen++;
    }
}

const renderStockBelowTen = (count) => {
    return `
    <div class="col-12 mb-3">
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">Products with Stock Below 10</h5>
                <p class="card-text">${count}</p>
            </div>
        </div>
    </div>
  `;
}

document.getElementById("stockBelowTen").innerHTML = renderStockBelowTen(stockBelowTen);


const renderProductCard = (product) => {
    return `
    <div class="col-12 col-md-4 mb-3">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text text-muted mb-0">${product.price.toFixed(2)}</p>
          <p class="card-text"><small class="text-muted">${product.stock} in stock</small></p>
          <p class="card-text"><small class="text-muted">${product.category}</small></p>
        </div>
      </div>
    </div>
  `;
}

document.getElementById("productList").innerHTML = products
  .map(renderProductCard)
  .join("");