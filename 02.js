// # Завдання 2

// Виправ помилки, які будуть в консолі, щоб скрипт запрацював.

const inventory = {
  items: ["Knife", "Gas mask"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter((item) => item !== itemName);
  },
};

const invokeInventoryAction = function (context,itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.call(context,itemName);
};

invokeInventoryAction(inventory, "Medkit", inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction(inventory,"Gas mask", inventory.remove);
//   // Invoking action on Gas mask
//   // Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']
