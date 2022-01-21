"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibIndex = exports.digitSum = exports.ownPower = exports.circularArray = exports.readableTime = void 0;
const readableTime = (seconds) => {
    let formatHMS = null;
    function padLeadingZeros(num) {
        let formatNum = num.toString();
        if (num < 10) {
            formatNum = `0${num}`;
        }
        return formatNum;
    }
    ;
    if (seconds >= 0) {
        const conversionFactor = 60;
        const numSeconds = Math.floor(seconds % conversionFactor);
        let minutes = seconds / conversionFactor;
        const hours = Math.floor(minutes / conversionFactor);
        minutes = Math.floor(minutes % conversionFactor);
        formatHMS = `${padLeadingZeros(hours)}:${padLeadingZeros(minutes)}:${padLeadingZeros(numSeconds)}`;
    }
    return formatHMS;
};
exports.readableTime = readableTime;
(0, exports.readableTime)(458);
(0, exports.readableTime)(3690);
(0, exports.readableTime)(7293);
(0, exports.readableTime)(32420);
const COUNTRY_NAMES = ["Germany", "Norway", "Island", "Japan", "Israel"];
const circularArray = (index) => {
    let firstPartArray;
    let circleArray;
    const sizeArray = COUNTRY_NAMES.length;
    const nIndexCircularArray = (index % sizeArray + sizeArray) % sizeArray;
    firstPartArray = COUNTRY_NAMES.slice(0, nIndexCircularArray);
    circleArray = COUNTRY_NAMES.slice(nIndexCircularArray, sizeArray);
    Array.prototype.push.apply(circleArray, firstPartArray);
    return circleArray;
};
exports.circularArray = circularArray;
(0, exports.circularArray)(2);
(0, exports.circularArray)(3);
(0, exports.circularArray)(5);
(0, exports.circularArray)(9);
const ownPower = (number, lastDigits) => {
    let sumResult = 0;
    let stringsumResult;
    let sizeArray;
    let lastDigitsOfTheSumResult;
    for (let i = 1; i <= number; i++) {
        sumResult += (Math.pow(i, i));
    }
    stringsumResult = BigInt(sumResult).toString();
    sizeArray = stringsumResult.length;
    lastDigitsOfTheSumResult = stringsumResult.slice(sizeArray - lastDigits, sizeArray);
    return lastDigitsOfTheSumResult;
};
exports.ownPower = ownPower;
(0, exports.ownPower)(10, 3);
(0, exports.ownPower)(12, 7);
(0, exports.ownPower)(21, 12);
const digitSum = (n) => {
    let sumResult = 0;
    let factorial = 1;
    for (let i = n; i > 0; i--) {
        factorial *= i;
    }
    factorial = Array.from(BigInt(factorial).toString()).map(Number);
    sumResult = factorial.reduce((acumulator, current) => acumulator + current);
    return sumResult;
};
exports.digitSum = digitSum;
(0, exports.digitSum)(10);
(0, exports.digitSum)(42);
(0, exports.digitSum)(71);
(0, exports.digitSum)(89);
const fibIndex = (n) => {
    let fibonacciSequence = [0, 1];
    let index = 0;
    for (let i = 2; i < 100; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
        if (fibonacciSequence[i].toString().length == n) {
            index = i;
            break;
        }
    }
    return index;
};
exports.fibIndex = fibIndex;
(0, exports.fibIndex)(3);
(0, exports.fibIndex)(5);
(0, exports.fibIndex)(12);
(0, exports.fibIndex)(15);
