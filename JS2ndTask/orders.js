// ============================================
// 1. LOCAL DATA
// ============================================

const orders = [
  {
    id: 101,
    customer: "Sara Ahmed",
    status: "Shipped",
    date: "2026-08-01",
    items: [
      { product: "Laptop", price: 800, quantity: 1 },
      { product: "Mouse", price: 25, quantity: 2 },
    ],
  },

  {
    id: 102,
    customer: "Ali Hassan",
    status: "Pending",
    date: "2026-08-02",
    items: [
      { product: "Keyboard", price: 60, quantity: 1 },
      { product: "Mouse", price: 25, quantity: 1 },
    ],
  },

  {
    id: 103,
    customer: "Mariam Said",
    status: "Shipped",
    date: "2026-08-03",
    items: [{ product: "Monitor", price: 350, quantity: 1 }],
  },

  {
    id: 104,
    customer: "Khalid Salim",
    status: "Cancelled",
    date: "2026-08-04",
    items: [{ product: "Headphones", price: 90, quantity: 1 }],
  },

  {
    id: 105,
    customer: "Noor Ahmed",
    status: "Shipped",
    date: "2026-08-05",
    items: [
      { product: "Phone", price: 700, quantity: 1 },
      { product: "Phone Case", price: 30, quantity: 1 },
    ],
  },

  {
    id: 106,
    customer: "Omar Ali",
    status: "Pending",
    date: "2026-08-06",
    items: [{ product: "Tablet", price: 300, quantity: 1 }],
  },

  {
    id: 107,
    customer: "Fatma Mohammed",
    status: "Shipped",
    date: "2026-08-07",
    items: [
      { product: "Gaming PC", price: 1200, quantity: 1 },
      { product: "Gaming Mouse", price: 80, quantity: 1 },
    ],
  },

  {
    id: 108,
    customer: "Yousef Khalid",
    status: "Pending",
    date: "2026-08-08",
    items: [{ product: "USB Cable", price: 20, quantity: 3 }],
  },

  {
    id: 109,
    customer: "Sara Ahmed",
    status: "Shipped",
    date: "2026-08-09",
    items: [{ product: "Smart Watch", price: 250, quantity: 1 }],
  },

  {
    id: 110,
    customer: "Ali Hassan",
    status: "Cancelled",
    date: "2026-08-10",
    items: [{ product: "Camera", price: 500, quantity: 1 }],
  },

  {
    id: 111,
    customer: "Mariam Said",
    status: "Pending",
    date: "2026-08-11",
    items: [
      { product: "Printer", price: 220, quantity: 1 },
      { product: "Ink", price: 40, quantity: 2 },
    ],
  },

  {
    id: 112,
    customer: "Khalid Salim",
    status: "Shipped",
    date: "2026-08-12",
    items: [{ product: "Desk", price: 180, quantity: 1 }],
  },

  {
    id: 113,
    customer: "Noor Ahmed",
    status: "Pending",
    date: "2026-08-13",
    items: [
      { product: "Chair", price: 150, quantity: 1 },
      { product: "Desk Lamp", price: 45, quantity: 1 },
    ],
  },

  {
    id: 114,
    customer: "Omar Ali",
    status: "Shipped",
    date: "2026-08-14",
    items: [{ product: "TV", price: 900, quantity: 1 }],
  },

  {
    id: 115,
    customer: "Fatma Mohammed",
    status: "Cancelled",
    date: "2026-08-15",
    items: [{ product: "AirPods", price: 200, quantity: 1 }],
  },
];

// ============================================
// 2. STATE
// ============================================

let selectedStatus = "All";
let searchText = "";
let discountEnabled = false;

// ============================================
// 3. PER-ORDER TOTAL
// ============================================

// Destructuring directly in the parameter
function getOrderTotal({ items }) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

// ============================================
// 4. CREATE DISCOUNTED ORDERS
// ============================================

function createDiscountedOrders() {
  return orders.map((order) => ({
    // Copy the order
    ...order,

    // Create a NEW items array
    items: order.items.map((item) => ({
      // Copy each item
      ...item,

      // Apply 15% discount
      price: item.price * 0.85,
    })),
  }));
}

// ============================================
// 5. GET ACTIVE ORDERS
// ============================================

function getActiveOrders() {
  if (discountEnabled) {
    return createDiscountedOrders();
  }

  return orders;
}

// ============================================
// 6. DASHBOARD SUMMARY
// ============================================

function updateDashboard() {
  const activeOrders = getActiveOrders();

  // Total revenue
  const totalRevenue = activeOrders.reduce(
    (sum, order) => sum + getOrderTotal(order),
    0,
  );

  // Orders per status
  const pendingCount = activeOrders.filter(
    (order) => order.status === "Pending",
  ).length;

  const shippedCount = activeOrders.filter(
    (order) => order.status === "Shipped",
  ).length;

  const cancelledCount = activeOrders.filter(
    (order) => order.status === "Cancelled",
  ).length;

  // Highest-value order
  const highestOrder = activeOrders.reduce((highest, order) =>
    getOrderTotal(order) > getOrderTotal(highest) ? order : highest,
  );

  // Update HTML
  document.getElementById("totalRevenue").textContent =
    `$${totalRevenue.toFixed(2)}`;

  document.getElementById("pendingCount").textContent = pendingCount;

  document.getElementById("shippedCount").textContent = shippedCount;

  document.getElementById("cancelledCount").textContent = cancelledCount;

  document.getElementById("highestCustomer").textContent =
    highestOrder.customer;

  document.getElementById("highestAmount").textContent =
    `$${getOrderTotal(highestOrder).toFixed(2)}`;
}

// ============================================
// 7. TOP 3 ORDERS
// ============================================

function renderTopOrders() {
  const activeOrders = getActiveOrders();

  const topThree = [...activeOrders]
    .sort((a, b) => getOrderTotal(b) - getOrderTotal(a))
    .slice(0, 3);

  document.getElementById("topOrders").innerHTML = topThree
    .map(
      ({ customer, id, items }) => `
                    <div class="border-bottom py-2">
                        <strong>${customer}</strong>
                        <br>
                        <small class="text-muted">
                            Order #${id}
                        </small>
                        <span class="float-end fw-bold">
                            $${getOrderTotal({ items }).toFixed(2)}
                        </span>
                    </div>
                `,
    )
    .join("");
}

// ============================================
// 8. UNIQUE CUSTOMERS
// ============================================

function renderUniqueCustomers() {
  const activeOrders = getActiveOrders();

  const uniqueCustomers = [
    ...new Set(
      activeOrders
        .filter((order) => getOrderTotal(order) > 150)
        .map((order) => order.customer),
    ),
  ];

  document.getElementById("uniqueCustomers").innerHTML = uniqueCustomers
    .map((customer) => `<li>${customer}</li>`)
    .join("");
}

// ============================================
// 9. FILTER ORDERS
// ============================================

function getFilteredOrders() {
  const activeOrders = getActiveOrders();

  return activeOrders
    .filter(
      (order) => selectedStatus === "All" || order.status === selectedStatus,
    )
    .filter((order) =>
      order.customer.toLowerCase().includes(searchText.toLowerCase()),
    );
}

// ============================================
// 10. RENDER ORDER CARD
// ============================================

// Destructuring in function parameter
function renderOrderCard({ id, customer, status, items }) {
  const total = getOrderTotal({ items });

  return `
        <div class="col-md-4">

            <div class="card shadow-sm border-0 h-100">

                <div class="card-body">

                    <div class="d-flex justify-content-between align-items-start">

                        <h5 class="card-title mb-1">
                            ${customer}
                        </h5>

                        <span class="badge ${
                          status === "Shipped"
                            ? "bg-success"
                            : status === "Pending"
                              ? "bg-warning text-dark"
                              : "bg-danger"
                        }">
                            ${status}
                        </span>

                    </div>

                    <p class="text-muted small">
                        Order #${id}
                    </p>

                    <hr>

                    <div class="d-flex justify-content-between">
                        <span>Items</span>
                        <strong>${items.length}</strong>
                    </div>

                    <div class="d-flex justify-content-between mt-2">
                        <span>Total</span>
                        <strong>
                            $${total.toFixed(2)}
                        </strong>
                    </div>

                </div>

            </div>

        </div>
    `;
}

// ============================================
// 11. RENDER ORDERS
// ============================================

function renderOrders() {
  const filteredOrders = getFilteredOrders();

  document.getElementById("orderList").innerHTML = filteredOrders
    .map(renderOrderCard)
    .join("");
}

// ============================================
// 12. RENDER EVERYTHING
// ============================================

function renderDashboard() {
  updateDashboard();
  renderTopOrders();
  renderUniqueCustomers();
  renderOrders();
}

// ============================================
// 13. STATUS FILTER
// ============================================

document.getElementById("statusFilter").addEventListener("change", function () {
  selectedStatus = this.value;

  renderOrders();
});

// ============================================
// 14. CUSTOMER SEARCH
// ============================================

document
  .getElementById("customerSearch")
  .addEventListener("input", function () {
    searchText = this.value;

    renderOrders();
  });

// ============================================
// 15. DISCOUNT TOGGLE
// ============================================

document
  .getElementById("discountToggle")
  .addEventListener("change", function () {
    discountEnabled = this.checked;

    renderDashboard();
  });

// ============================================
// 16. INITIAL RENDER
// ============================================

renderDashboard();
