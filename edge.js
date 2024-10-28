/*Task: 1
1. Create a variable called number and assign it any integer.
Use an if-else block to print whether the number is positive, negative, or
zero using console.log().*/

let number = '-2';
    if (number > 0){
        console.log('The number is positve');   
    } else if (number < 0){
        console.log('The number is negative');  
    } else{
        console.log('The number is 0');
        
    }




/*Task: 2
Create a variable called day and assign it the name of any day (e.g.,
'Monday').
Use a switch statement to print whether the day is a weekday or
weekend.*/

let day = 'sunday'
switch (day.toLowerCase())
 {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(day + " is a weekday.");
        break;
    case 'saturday':
    case 'sunday':
        console.log(day + " is a weekend.");
        break;
    default:
        console.log("Invalid day.");
}

/*
Task: 3
1. Write a for loop that prints numbers from 1 to 10.
2. Use console.log() to print each number in the loop.
*/
for (let x = 1; x <= 10; x++) {
    console.log(x);
    
}

/*
Task: 4
1.Create a variable called count and initialize it to 1.
2.Use a while loop to print the multiplication table of 5 (e.g., 5 × 1 = 5, 5 × 2 =
10) until 5 × 10.
3.Use console.log() to display each step.
*/
let count = 1;

while (count <= 10) {
    console.log(`5 x ${count} = ${5 * count}`);
    count++;
}

/*
Task: 5
1.Declare and initialize a number with value of 0
2.Write a do-while loop that Checks if that number is greater than 10.
3.Keep Incrementing the number by 1.
4.Use console.log() to print "The number is: [number]".
*/
let numbers = 0
do {
  console.log(' numbers is:' + numbers );
  numbers++;
    
} while (numbers <= 10);
/*
Task: 6
1.Write a for loop that prints numbers from 1 to 10.
2.Use a break statement to exit the loop when the number 5 is reached.
3.Use console.log() to print each number.*/

for (let j = 1; j <= 10; j++) {
    if ( j === 5){
        break
    }
    console.log(j);
}

/*Task: 7
1.Write a for loop that prints only even numbers between 1 and 20.
2.Use a continue statement to skip odd numbers.
3.Print each even number using console.log().*/

for (let j = 1; j <= 20; j++){
    if (j % 2 !== 0) {
        continue;
    }
    console.log(j);
    
}

/*Task: 8
1.Write a function that takes two numbers as parameters and divides the
first by the second.
2.Use try-catch-finally to handle division by zero.
Print the result if the division is successful, otherwise print an error
message.*/

function divideNumbers(j, k) {
    try {
        if (k === 0) {
            throw Error("Can`t divide by 0."); 
        }
        let result = j / k;
        console.log(`Result is: ${result}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    } finally {
        console.log("Division acquired."); 
    }
}

divideNumbers(20, 5);
divideNumbers(20, 0);


/*Task: 9
Write a function called multiply that takes two numbers as parameters
and returns their product.
Call the function with any two numbers and print the result using
console.log().*/

function multiply(x, y) {
    return (x * y);   
}
    console.log(multiply(4, 6));

/*Task: 10
1.Write a program that prints numbers from 1 to 30.
2.Print 'Fizz' if the number is divisible by 3.
3.Print 'Buzz' if the number is divisible by 5.
4.Print 'FizzBuzz' if the number is divisible by both 3 and 5.
5.Use console.log() to print each result.
*/

for (let k = 1; k <= 30; k++) {
    if (k % 3 === 0 && k % 5 === 0) {
        console.log('FizzBuzz'); // Divisible by both 3 and 5
    } else if (k % 3 === 0) {
        console.log('Fizz'); // Divisible by 3
    } else if (k % 5 === 0) {
        console.log('Buzz'); // Divisible by 5
    } else {
        console.log(k); // Print the number if not divisible by 3 or 5
    }
}


