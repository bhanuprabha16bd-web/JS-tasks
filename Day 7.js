//Task 1//
let count = 0;

const clock = setInterval(() => {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // convert to 12-hour format

  const time = 
    `${String(hours).padStart(2, "0")} : ` +
    `${String(minutes).padStart(2, "0")} : ` +
    `${String(seconds).padStart(2, "0")} ${ampm}`;

  console.log(time);

  count++;

  if (count === 10) {
    clearInterval(clock);
    console.log("⏹ Clock stopped after 10 seconds");
  }
}, 1000);


//Task 2//
const birthYear = Number(prompt("Enter Birth Year (YYYY):"));
const birthMonth = Number(prompt("Enter Birth Month (1-12):")) - 1; // JS months start from 0
const birthDate = Number(prompt("Enter Birth Date (1-31):"));

const birth = new Date(birthYear, birthMonth, birthDate);
const today = new Date();

let years = today.getFullYear() - birth.getFullYear();
let months = today.getMonth() - birth.getMonth();
let days = today.getDate() - birth.getDate();

if (days < 0) {
  months;
  const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  days += previousMonth.getDate();
}

if (months < 0) {
  years;
  months += 12;
}


console.log(
  `You are ${years} years, ${months} months and ${days} days old.`
);


//task 3//
console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 0);

console.log("End");


//task 4//
let count1 = 10;

const timer = setInterval(() => {
  console.log(count1);
  count1;

  if (count1 < 0) {
    clearInterval(timer);
    console.log("Time Up!");
  }
}, 1000);


//task 5//
function checkResult(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 35) {
      resolve("Pass");
    } else {
      reject("Fail");
    }
  });
}

checkResult(42)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Result Checked");
  });


  //Task 6//
  function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 1 Completed");
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 2 Completed");
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Step 3 Completed");
    }, 1000);
  });
}

step1()
  .then(result1 => {
    console.log(result1);
    return step2();
  })
  .then(result2 => {
    console.log(result2);
    return step3();
  })
  .then(result3 => {
    console.log(result3);
    console.log("All Steps Done");
  })
  .catch(error => {
    console.log("Error:", error);
  });


  //Task 7//
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    console.log("Product Titles:");
    products.forEach(product => {
      console.log(product.title);
    });

    console.log("Total Products:", products.length);

    console.log("First Product Price:", products[0].price);

  })
  .catch(error => {
    console.log("Error fetching products:", error);
  });

  //Task 8//
  fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    const expensiveProducts = products
      .filter(product => product.price > 500)   // price above 500
      .map(product => ({
        title: product.title,
        price: product.price
      }));

    console.log("Products above 500:");
    expensiveProducts.forEach(item => {
      console.log(`${item.title} - ₹${item.price}`);
    });

  })
  .catch(error => {
    console.log("Error:", error);
  });


  //Task 9//
  fetch("https://fakestoreapi.com/productss") // wrong URL
  .then(response => {
    if (!response.ok) {
      throw new Error("API Error");
    }
    return response.json();
  })
  .then(products => {
    console.log(products);
  })
  .catch(error => {
    console.log("Failed to load products. Please try again");
  });


  //MINI PROJECT//
  const API_URL = "https://fakestoreapi.com/products";

console.log("Loading products...");

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("API Error");
    }
    return response.json();
  })
  .then(products => {
    console.log(`\nTotal Products: ${products.length}\n`);

    products.forEach(product => {
      console.log("Title:", product.title);
      console.log("Price:", product.price);
      console.log("Image:", product.image);
      console.log("---------------------------");
    });
    const sorted = [...products].sort(
      (a, b) => a.price - b.price
    );

    console.log("\nAfter Sorting (Low → High):\n");

    sorted.forEach(p => {
      console.log(`${p.title} - ${p.price}`);
    });
  })
  .catch(() => {
    console.log("Failed to load products. Please try again");
  });