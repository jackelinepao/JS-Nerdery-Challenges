/* *****
Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.

Example:

Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */

export const readableTime = (seconds: number) => {
  let formatHMS: string | null = null;

  function padLeadingZeros(num: number) {
    let formatNum: string = num.toString();

    if (num < 10) {
      formatNum = `0${num}`;
    }

    return formatNum;
  };

  if (seconds >= 0) {
    const conversionFactor: number = 60;
    const numSeconds: number = Math.floor(seconds % conversionFactor);
    let minutes: number = seconds / conversionFactor;
    const hours: number = Math.floor(minutes / conversionFactor);

    minutes = Math.floor(minutes % conversionFactor);
    formatHMS = `${padLeadingZeros(hours)}:${padLeadingZeros(minutes)}:${padLeadingZeros(numSeconds)}`
  }

  return formatHMS;
};

readableTime(458);
readableTime(3690);
readableTime(7293);
readableTime(32420);

/* *****
Challenge 2

"Circular Array"

Given the following array "COUNTRY_NAMES", modify the function "circularArray"
to return an array that meets the following criteria:

- The index number passed to the function should be the first element in the resulting array
- The resulting array must have the same length as the initial array
- The value of the argument "index" will always be a positive number

Example:

Invoking "circularArray(2)" should return "["Island", "Japan", "Israel", "Germany", "Norway"]"
***** */

const COUNTRY_NAMES = ["Germany", "Norway", "Island", "Japan", "Israel"];

export const circularArray = (index: number): string[] => {
  let firstPartArray: string[];
  let circleArray: string[];
  const sizeArray: number = COUNTRY_NAMES.length;
  const nIndexCircularArray: number = (index % sizeArray + sizeArray) % sizeArray;

  firstPartArray = COUNTRY_NAMES.slice(0, nIndexCircularArray);
  circleArray = COUNTRY_NAMES.slice(nIndexCircularArray, sizeArray);
  Array.prototype.push.apply(circleArray, firstPartArray);

  return circleArray;
};

circularArray(2);
circularArray(3);
circularArray(5);
circularArray(9);

/* *****
Challenge 3

"Own Powers"

The function "ownPower" accepts two arguments. "number" and "lastDigits".

The "number" indicates how long is the series of numbers you are going to work with, your
job is to multiply each of those numbers by their own powers and after that sum all the results.

"lastDigits" is the length of the number that your function should return, as a string!.
See example below.

Example:

Invoking "ownPower(10, 3)" should return "317"
because 1^1 + 2^2 + 3^3 + 4^4 + 5^5 + 6^6 + 7^7 + 8^8 + 9^9 + 10^10 = 10405071317
The last 3 digits for the sum of powers from 1 to 10 is "317"
***** */
export const ownPower = (number: number, lastDigits: number): string => {
  let sumResult: number = 0;
  let stringsumResult: string;
  let sizeArray: number;
  let lastDigitsOfTheSumResult: string;

  for (let i = 1; i <= number; i++) {
    sumResult += (i ** i)
  }

  stringsumResult = BigInt(sumResult).toString();
  sizeArray = stringsumResult.length;
  lastDigitsOfTheSumResult = stringsumResult.slice(sizeArray - lastDigits, sizeArray);

  return lastDigitsOfTheSumResult
};

ownPower(10, 3);
ownPower(12, 7);
ownPower(21, 12);


/* *****
Challenge 4

"Sum of factorial digits"

A factorial (x!) means x! * (x - 1)... * 3 * 2 * 1.
For example: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800

Modify the function "digitSum" to return a number that
equals to the sum of the digits in the result of 10!

Example:

Invoking "digitSum(10)" should return "27".
Since 10! === 3628800 and you sum 3 + 6 + 2 + 8 + 8 + 0 + 0
***** */

export const digitSum = (n: number): number => {
  let sumResult: number = 0;
  let factorial: number[] | number = 1;


  for (let i = n; i > 0; i--) {
    factorial *= i;
  }

  factorial = Array.from(BigInt(factorial).toString()).map(Number)
  sumResult = factorial.reduce((acumulator, current) => acumulator + current)

  return sumResult;
};

digitSum(10);
digitSum(42);
digitSum(71);
digitSum(89);

/* *****
Challenge 5

"N-Digit Fibonacci Number"

Modify the function "fibIndex" to return the index of the first Fibonacci
number whose digits-length equals the number passed in to the function.

Example:

Invoking "fibIndex(3)" should return "12".
Because the 12th index in the Fibonacci sequence is 144, and 144 has three digits
***** */

export const fibIndex = (n: number): number => {
  let fibonacciSequence: number[] = [0, 1];
  let index: number = 0;

  for (let i = 2; i < 100; i++) {
    fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];

    if (fibonacciSequence[i].toString().length == n) {
      index = i
      break
    }
  }

  return index;
};

fibIndex(3);
fibIndex(5);
fibIndex(12);
fibIndex(15);
