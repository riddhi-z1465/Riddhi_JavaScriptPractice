const inventory = [
  { name: "Banana", color: "Yellow", calories: 105 },
  { name: "Apple", color: "Red", calories: 95 },
  { name: "Lemon", color: "Yellow", calories: 37 },
  { name: "Strawberry", color: "Red", calories: 33 },
  { name: "Avocado", color: "Green", calories: 160 },
  { name: "Grapes", color: "Purple", calories: 62 },
  { name: "Kiwi", color: "Green", calories: 42 }
];

console.log(inventory[0].name);

// inventory[1].calories = 100; 
// console.log(inventory[1]);

// inventory[0].season = "Summer"; 
// console.log(inventory[0]);

delete inventory[2].calories; 
console.log(inventory[2]); 

// const updatedInventory = inventory.filter(fruit => fruit.name !== "Grapes"); 
// console.log(updatedInventory);