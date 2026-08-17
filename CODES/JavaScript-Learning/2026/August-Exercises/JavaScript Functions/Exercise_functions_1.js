// =========================================
// QUESTION 1: ADDITION OF TWO NUMBERS
// =========================================
//Create a function called:
//addNumbers(a, b)
function addNumbers(a, b) {
    return a + b;
}

let firstNumber = 5;
let secondNumber = 6;

let total = addNumbers(firstNumber, secondNumber);

console.log("The total is: ", total);

// =========================================
// QUESTION 2: SUBTRACTION OF TWO NUMBERS
// =========================================
//Create a function called:
//subtractNumbers(a, b)
function subtractNumbers(a,b) {
    return a - b;
}
let result = subtractNumbers(10,6);
console.log("The result is: ",result);

// =========================================
// QUESTION 3: MULTIPLICATION OF TWO NUMBERS
// =========================================
//Create a function called:
//multiplyNumbers(a, b)
function multiplyNumbers(a,b){
    return a * b;
}
let product = multiplyNumbers(6, 9);
console.log("The product is: ",product);


// =========================================
// QUESTION 4: FUNCTION
// =========================================
//Create a function called:
//calculateTotal(price, quantity)
//Requirements:
//A customer buys products.
//The function should:
//Multiply price by quantity
//Return the total amount
function calculateTotal(price,quantity) {
    return price * quantity;
}
let totalNumber = calculateTotal(5,10)
console.log("Let the total amount be:", totalNumber);

// =========================================
// QUESTION 5: DISCOUNT CALCULATOR FUNCTION
// =========================================
//Create a function called:
//calculateDiscount(price, discount)
//Requirements:
//The function should:
//Calculate discount amount
//Subtract discount from original price
//Return final price
function calculateDiscount(price, discount) {
    let discountAmount = price * discount / 100;
    let finalPrice = price - discountAmount;

    return finalPrice;
}

let finalPrice = calculateDiscount(159, 10);

console.log(finalPrice);


//============================================
// QUESTION 6: BANK BALANCE FUNCTION
// ============================================
//Create a function called:
//bankTransaction(balance, amount, type)
//Requirements:
//If type is:
//"deposit"
//Add money to balance
//"withdraw"
//Subtract money from balance
//Return the new balance.
//============================================
// QUESTION 7: STUDENT SCORE CALCULATOR
// ============================================
//Create a function called:
//calculateAverage(score1, score2, score3)
//Requirements:
//The function should:
//- Add all scores
//- Divide by number of subjects
//- Return average score
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

let averageScore = calculateAverage(10, 15, 33);
console.log("The average score is:", averageScore);


//============================================
// QUESTION 7: STUDENT SCORE CALCULATOR
// ============================================
//BUSINESS PROFIT CALCULATOR
//Create a function called:
//calculateProfit(sales, expenses)
//Requirements:
//The function should:
//- Subtract expenses from sales
//- Return profit or loss
function calculateProfit(sales, expenses) {
    let profitOrLoss = sales - expenses;
    return profitOrLoss;
}

let totalCalculateProfit = calculateProfit(4080, 3233);

console.log(totalCalculateProfit);


//============================================
//QUESTION 8: ELECTRICITY BILL CALCULATOR
// ============================================
//Create a function called:
//calculateBill(units, pricePerUnit)
//Requirements:
//The function should:
//Multiply units by price per unit
//Return total electricity bill
function calculateBill (units, pricePerUnit) {
    let ElectricityBill = units * pricePerUnit;
    return ElectricityBill;
}
let totalElectricityBill =  calculateBill (20, 50);
console.log("The Total Electricity Bill is :" , totalElectricityBill);

//============================================
//QUESTION 9: ADDDITION OF TWO NUMBERS
// ============================================
// addNumbers(a, b)
//The function should return the addition
//of two numbers.
function addNumbers(a,b) {
    let sum = a + b;
    return sum;
}
let TotaladdNumbers = addNumbers(6,89);
console.log("Let The total sum be: " ,TotaladdNumbers);

//============================================
//QUESTION 10: INVOICE GENERATOR
// ============================================
/*Create a function:

invoiceGenerator(customer, service, price, tax)

Requirements:

The function should:

1. Calculate tax amount
2. Add tax to price
3. Return a complete invoice:

Customer Name:
Service:
Original Price:
Tax:
Final Amount:
*/
function invoiceGenerator(customer, service, price, tax) {

    let taxAmount = price * (tax / 100);

    let finalAmount = price + taxAmount;

    return `
Customer Name: ${customer}
Service: ${service}
Original Price: ₦${price}
Tax: ₦${taxAmount}
Final Amount: ₦${finalAmount}
`;
}

console.log(invoiceGenerator("Lex", "Website Development", 100000, 7.5));
   
