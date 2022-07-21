/*
        Brendan Ready
        Assignment 03
*/

// Odd or Even?

/*
Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and
display a message in the console window.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
*/

let num = 0;

while (num < 16) {
	if (num % 2 === 0) {
		console.log(num + " is even");
	} else {
		console.log(num + " is odd");

	}
	num++;
}