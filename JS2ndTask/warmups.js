// Arrays: The Basics
let cities = ["Ibri", "Nizwa", "Muscat", "Salalah", "Sohar"];
console.log(cities);
cities.push("Sur");
console.log(cities);
cities.unshift("Bahla");
console.log(cities);
cities.shift();
console.log(cities);
cities.pop();
console.log(cities);

console.log(`Cities length before duplicate: ${cities.length}`);
cities.push("Ibri");
console.log(`Cities Length after duplicate: ${cities.length}`);
cities.pop();

for (let i = 0; i < cities.length; i++) {
  console.log(`City: ${cities[i]}`);
}

for (const city of cities) {
  console.log(`City: ${city}`);
}

// Destructing
const order = {
  id: 101,
  customer: "Sara Ahmed",
  total: 249.99,
  status: "Shipped",
};

const { customer, total } = order;

const numsArray = [1, 2, 3, 4];

const { num1, num2, ...restNums } = numsArray;

function destructureOrder({ id, customer, total, status }) {
  return `Order ${id}: ${customer} - $${total} - ${status}`;
}

// Spread & Rest
const onlineOrders = [101, 102, 103, 104];

const inStoreOrders = [105, 106, 107, 108];

const allOrders = [...onlineOrders, ...inStoreOrders];

const cancelledOrder = { ...order, status: "Cancelled" };
console.log(order);
console.log(cancelledOrder);

function getOrderTotals(...totals) {
  return totals;
}

const orders = [
  {
    id: 101,
    customer: "Sara Ahmed",
    total: 249.99,
    status: "Shipped",
  },
  {
    id: 102,
    customer: "Ali Hassan",
    total: 150.0,
    status: "Pending",
  },
  {
    id: 103,
    customer: "Mariam Said",
    total: 325.5,
    status: "Shipped",
  },
  {
    id: 104,
    customer: "Khalid Salim",
    total: 89.99,
    status: "Cancelled",
  },
  {
    id: 105,
    customer: "Noor Ahmed",
    total: 475.0,
    status: "Shipped",
  },
  {
    id: 106,
    customer: "Omar Ali",
    total: 199.5,
    status: "Pending",
  },
  {
    id: 107,
    customer: "Fatma Mohammed",
    total: 550.75,
    status: "Shipped",
  },
  {
    id: 108,
    customer: "Yousef Khalid",
    total: 75.25,
    status: "Pending",
  },
];

// reduce
const combinedTotal = orders.reduce((sum, order) => sum + order.total, 0);

// filter
const shippedOrders = orders.filter((order) => order.status === "Shipped");

// map
const customerNames = orders.map((order) => order.customer);

// find
const firstOver200 = orders.find((order) => order.total >= 200);

// some
const hasCancelled = orders.some((order) => order.status === "Cancelled");

// all
const allPositive = orders.all((order) => order.total > 0);

// sort
const highestFirst = [...orders].sort((a, b) => b.total - a.total);

// filter + map
const shippedCustomers = orders
  .filter((order) => order.status === "Shipped")
  .map((order) => order.customer);
