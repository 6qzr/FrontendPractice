import { Product } from "./product.js";

// ============================================
// PRODUCTS
// ============================================

const products = [
  new Product("Laptop", 850, 10, "Electronics"),

  new Product("Phone", 500, 15, "Electronics"),

  new Product("Headphones", 80, 25, "Accessories"),

  new Product("Keyboard", 45, 20, "Accessories"),

  new Product("Backpack", 60, 12, null),

  new Product("Watch", 120, 8, "Accessories"),
];

// ============================================
// STATE
// ============================================

let showLowStockOnly = false;
let discountEnabled = false;

// ============================================
// TOTAL INVENTORY VALUE
// ============================================

const getTotalInventoryValue = (productList) => {
  return productList.reduce(
    (total, product) => total + product.price * product.stock,
    0,
  );
};

// ============================================
// RENDER TOTAL INVENTORY VALUE
// ============================================

const renderTotalInventoryValue = (value) => {
  return `
    <div class="col-12 mb-3">
      <div class="card h-100">
        <div class="card-body">

          <h5 class="card-title">
            Total Inventory Value
          </h5>

          <p class="card-text">
            $${value.toFixed(2)}
          </p>

        </div>
      </div>
    </div>
  `;
};

// ============================================
// LOW STOCK COUNT
// ============================================

const getStockBelowTen = (productList) => {
  return productList.filter((product) => product.isLowStock).length;
};

// ============================================
// RENDER LOW STOCK COUNT
// ============================================

const renderStockBelowTen = (count) => {
  return `
    <div class="col-12 mb-3">
      <div class="card h-100">
        <div class="card-body">

          <h5 class="card-title">
            Products with Stock Below 10
          </h5>

          <p class="card-text">
            ${count}
          </p>

        </div>
      </div>
    </div>
  `;
};

const createDiscountedProducts = () => {
  return products.map(
    (product) =>
      new Product(
        product.name,
        product.price * 0.9,
        product.stock,
        product.category,
      ),
  );
};

// ============================================
// GET PRODUCTS TO USE
// ============================================

const getActiveProducts = () => {
  if (discountEnabled) {
    return createDiscountedProducts();
  }
  return products;
};

// ============================================
// PRODUCT CARD
// ============================================

const renderProductCard = (product) => {
  const { name, price, stock, category } = product;

  const safeCategory = category ?? "Uncategorized";

  return `
    <div class="col-12 col-md-4 mb-3">

      <div class="card h-100">

        <div class="card-body">

          <h5 class="card-title">
            ${name}
          </h5>

          <p class="card-text">
            $${price.toFixed(2)}
          </p>

          <p class="card-text">
            <small class="text-muted">
              ${stock} in stock
            </small>
          </p>

          <p class="card-text">
            <small class="text-muted">
              ${safeCategory}
            </small>
          </p>

          ${
            product.isLowStock
              ? `
                <span class="badge bg-danger">
                  Low Stock
                </span>
              `
              : ""
          }

        </div>

      </div>

    </div>
  `;
};

// ============================================
// RENDER PRODUCTS
// ============================================

const renderProducts = () => {
  let productsToRender = getActiveProducts();

  if (showLowStockOnly) {
    productsToRender = productsToRender.filter((product) => product.isLowStock);
  }

  document.getElementById("productList").innerHTML = productsToRender
    .map(renderProductCard)
    .join("");
};

// ============================================
// RENDER DASHBOARD
// ============================================

const renderDashboard = () => {
  const activeProducts = getActiveProducts();

  const totalInventoryValue = getTotalInventoryValue(activeProducts);

  const stockBelowTen = getStockBelowTen(activeProducts);

  document.getElementById("totalInventoryValue").innerHTML =
    renderTotalInventoryValue(totalInventoryValue);

  document.getElementById("stockBelowTen").innerHTML =
    renderStockBelowTen(stockBelowTen);

  renderProducts();
};

// ============================================
// LOW STOCK TOGGLE
// ============================================

const lowStockToggle = document.getElementById("lowStockToggle");

lowStockToggle.addEventListener("click", () => {
  showLowStockOnly = !showLowStockOnly;

  lowStockToggle.textContent = showLowStockOnly
    ? "Show All Products"
    : "Show Low Stock Only";

  renderProducts();
});

// ============================================
// DISCOUNT TOGGLE
// ============================================

const discountToggle = document.getElementById("discountToggle");

discountToggle.addEventListener("click", () => {
  discountEnabled = !discountEnabled;

  discountToggle.textContent = discountEnabled
    ? "Restore Original Prices"
    : "Apply 10% Discount";

  renderDashboard();
});

// ============================================
// INITIAL RENDER
// ============================================

renderDashboard();
