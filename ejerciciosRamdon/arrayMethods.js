/**Exercise 1 (warm-up: map, filter, some) s === solution

Create an array with just the names of the products that are in stock (stock > 0). 1.1
Create an array of strings like "Laptop - $1200" for every product. 1.2
Write a one-liner that tells whether any product costs more than 1000. 1.3

Exercise 2 (reduce + sort + chaining)

Calculate the total value of the inventory (price * stock for each product, summed). 2.1
Return the names of the tech products sorted from most expensive to cheapest, without modifying products. 2.2

Bonus (harder): use reduce to build an object that groups the product names by category:2.3

{ tech: ["Laptop", "Phone", "Headset"], home: ["Desk", "Chair"] }
*/

const products = [
  { name: "Laptop",  price: 1200, category: "tech",  stock: 5 },
  { name: "Phone",   price: 800,  category: "tech",  stock: 0 },
  { name: "Desk",    price: 300,  category: "home",  stock: 2 },
  { name: "Chair",   price: 150,  category: "home",  stock: 10 },
  { name: "Headset", price: 90,   category: "tech",  stock: 7 },
]

// const inStockNames = products.filter(p => p.stock > 0).map(p => p.name); 1.1 s
// const labels = products.map(p => `${p.name} - $${p.price}`) 1.2 s
// const hasExpensive = products.some(p => p.price > 1000) 1.3 
// console.log(upto1000)

// const totalInventryValue = products.reduce((acc, p) => acc + p.price * p.stock, 0) 2.1 s
// const expensiveToCheaper = products.filter(p => p.category === 'tech').sort((a,b) => b.price - a.price).map(p => p.name) 2.2 s


// const categoryTech = products.reduce((acc, p)=>{ 2.3 s

//     if (!acc[p.category]) acc[p.category] = [];acc[p.category].push(p.name);


//      acc[p.category] = (acc[p.category] || []).concat(p.name)
    
//     return acc 
// }, {})

// console.log(categoryTech)