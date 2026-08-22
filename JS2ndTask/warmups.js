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