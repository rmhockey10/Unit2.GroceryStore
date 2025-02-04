/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

/** @type {Item[]} */
const inventory = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

// === Complete the functions below! ===

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  // TODO: use `forEach`*******
  //this reads "for each object in the array 'items' (which is the array 'inventory' passed to the function 'logNames' as an argument and is used inside 'logName's as the variable 'items'), I want you to print the value of the key 'name' in that object"
  items.forEach((object) => console.log(object.name));
}

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  // TODO: use `map`*********
  // this reads "for each element (which is an object) in 'items' (which is the array 'inventory' passed to the function 'getUppercaseNames' and is represented by the parameter 'items') look at the key 'name' in each 'element' (where 'element' is the object that .map is iterating over) and storing its value in 'itemName'.  Then 'itemName' has the '.toUpperCase() method applied to it to capitalize all its letters which is then saved in 'upperCaseName'.  'upperCaseName' is returned to be saved in 'names', which is then return through function 'getUppercaseNames'."
  const names = items.map((element) => {
    const itemName = element.name;
    const upperCaseName = itemName.toUpperCase();
    return upperCaseName;
  });
  return names;
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  // TODO: use `find`
  const itemById = items.find((element) => element.id === id);
  const item = itemById.name;
  return item;
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name` if found
 */
function getItemPriceByName(items, name) {
  // TODO: use a loop!
  for (let item of items) {
    if (item.name === name) {
      const itemPrice = item.price;
      return itemPrice;
    }
  }
}

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  // TODO: use `filter`************
  // this reads "for each  object in the array 'items' (which is the array 'inventory' passed to the function 'getItemsByCategory' as an argument and is used inside 'getItemsByCategory' as the variable 'items'), it will be passed to the callback function and be named 'item'.  After that it will return the category(ies) in 'item' that matches the string inputted from 'category' into the variable 'filteredItems', which will then be printed out."
  const filteredItems = items.filter((item) => {
    return item.category === category;
  });
  console.log(filteredItems);
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  // TODO: use `reduce`************
  const total = items.reduce((currentTotal, item) => {
    return item.quantity + currentTotal;
  }, 0);
  return total;
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function getTotalPrice(items) {
  // TODO: use `reduce`
  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return totalPrice;
}

// === READ BUT DO NOT CHANGE THE CODE BELOW ===

console.log("Welcome! We carry the following items:");
logNames(inventory);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(inventory));

console.log(`In total, we have ${countItems(inventory)} items in stock.`);

const totalCost = getTotalPrice(inventory);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(inventory, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(inventory, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(inventory, category));
