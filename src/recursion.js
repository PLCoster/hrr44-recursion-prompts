/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {

    if (n < 0) {
        return null;
    } else if (n === 0) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {

    var arr = array.slice();

    if (arr.length === 0) {
        return 0;
    } else {
        var num = arr.pop();
        return num + sum(arr);
    }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            count += arraySum(array[i]);
        } else {
            count += array[i];
        }
    }
    return count;
};

// 4. Check if a number is even.
var isEven = function(n) {

    if (n > 0){
        var num = n - 2;
    } else {
        var num = n + 2;
    }

    if (num === 0){
        return true;
    } else if (num === 1) {
        return false;
    } else {
        return isEven(num);
    };
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

    if (n == 0){
        return 0;
    } else if (n > 0) {
        return (n-1) + sumBelow(n-1);
    } else {
        return (n+1) + sumBelow(n+1);
    }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    if (x === y - 1 || x === y || y == x -1) {
        return [];
    } else if ( x > y) {
        return [x-1].concat(range(x-1, y));
    } else {
        return [x+1].concat(range(x+1,y));
    }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
    if (exp === 0){
        return 1;
    } else if (exp < 0) {
        return 1/exponent(base, -exp);
    } else if (exp > 0 && exp % 2 !== 0) {
        return base * exponent(base, exp-1);
    } 
    else {
     return exponent(base, exp/2) **2;
    }
};

// Not optimised for even numbers, works otherwise:
//var exponent = function(base, exp) {
//    if (exp === 0){
//        return 1;
//    } else if (exp > 0) {
//        return base * exponent(base, exp-1);
//    } else {
//        return 1/exponent(base, -exp);
//    }
//};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n === 1){
        return true;
    } else if (n < 1){
        return false;
    } else {
        return powerOfTwo(n/2);
    }
    
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
    if (string.length === 0) {
        return '';
    } else {
        return string.slice(-1) + reverse(string.slice(0, -1));
    }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {

    if (string.length <= 1) {
        return true;
    } else if (string[0].toLowerCase() !== string[string.length-1].toLowerCase()){
        return false;
    } else {
        return palindrome(string.slice(1,-1));
    }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

    if (y === 0) {
        return NaN;
    } else if ( y < 0) {
        return modulo(x, -y);
    } else if (x < 0) {
        return -modulo(-x, y);
    }

    if (x < y) {
        return x;
    } else if (x === y){
        return 0;
    } else {
        return modulo(x-y, y);
    }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    if (x === 0 || y === 0) {
        return 0;
    } else if (x < 0 && y < 0) {
        return multiply(-x, -y);
    } else if (x < 0) {
        return -multiply(-x, y);
    } else if (y < 0) {
        return -multiply(x, -y);
    } else {
        return x + multiply(x, y-1);
    }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {

    if (y === 0) {
        return NaN;
    } else if (x === 0) {
        return 0;
    } else if (x < 0 && y < 0) {
        return divide(-x, -y);
    } else if (x < 0) {
        return -divide(-x, y);
    } else if (y < 0) {
        return -divide(x, -y);
    } else if (x < y) {
        return 0;
    } else {
        return 1 + (divide(x-y, y));
    }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {

    // Base Cases if x or y are 0, or numbers are negative:
    if (x < 0 | y < 0) {
        return null;
    } else if (x === 0) {
        return y;
    } else if (y === 0) {
        return x;
    } else {

    // Find larger number of the pair:
    if (x > y) {
        var larger = x;
        var smaller = y;
    } else {
        var larger = y;
        var smaller = x;
    }

    // Take modulo of larger wrt smaller:
    var result = larger % smaller;

    return gcd(smaller, result);
    }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if (str1 === '' && str2 === '') {
        return true;
    } else if (str1[0] !== str2[0]) {
        return false
    } else {
        return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length));
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    if (str.length === 0) {
        return [];
    } else {
        return [str[0]].concat(createArray(str.slice(1, str.length)));
    }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
    if (array.length === 0) {
        return [];
    } else {
        return [array[array.length-1]].concat(reverseArr(array.slice(0, array.length-1)));
    }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length === 0) {
        return [];
    } else {
        return [value].concat(buildList(value, length-1));
    }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
    
    var result;
    
    if (n === 0) {
        return [];
    } else if (n % 3 === 0 && n % 5 === 0) {
        result = ['FizzBuzz']
    } else if (n % 3 === 0) {
        result = ['Fizz'];
    } else if (n % 5 === 0) {
        result = ['Buzz'];
    } else {
        result = [n.toString()];
    }

    return (fizzBuzz(n-1)).concat(result);

};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

    if (array.length === 0) {
        return 0;
    } else if (array[0] === value) {
        return 1 + countOccurrence(array.slice(1, array.length), value);
    } else {
        return 0 + countOccurrence(array.slice(1, array.length), value);
    }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {

    if (array.length === 0) {
        return [];
    } else {
        return [callback(array[0])].concat(rMap(array.slice(1, array.length), callback));
    }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
    var count = 0;
    for (var k in obj) {   
        if (k === key){
            count += 1;
        }
        
        if (typeof obj[k] === 'object') {
            count += countKeysInObj(obj[k], key)
        }
    } 
    return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
    var count = 0;
    for (var k in obj) {
        if (obj[k] === value) {
            count += 1;
        } else if (typeof obj[k] === 'object') {
            count += countValuesInObj(obj[k], value);
        }
    }
    return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
    for (var k in obj) {
        if (typeof obj[k] === 'object') {
            obj[k] = replaceKeysInObj(obj[k], oldKey, newKey);
        }

        if (k === oldKey) {
            obj[newKey] = obj[oldKey]
        }
    }

    delete obj[oldKey];
    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
    if (n < 1) {
        return null;
    }

    if (n === 1) {
        return [0, 1];
    } else {

        var fibs = fibonacci(n-1);
        fibs.push(fibs[fibs.length-1] + fibs[fibs.length-2]);
        return fibs;
    }
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    
    if (n < 0) {
        return null;
    }

    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return nthFibo(n-1) + nthFibo(n-2);
    }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
    if (array.length === 0) {
        return [];
    } else {
        return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1, array.length)));
    }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    if (array.length === 0) {
        return [];
    } else {
        var capWord = array[0][0].toUpperCase() + array[0].slice(1, array[0].length);
        return [capWord].concat(capitalizeFirst(array.slice(1, array.length)));
    }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
    var count = 0;

    for (var k in obj) {
        if (typeof obj[k] === 'object') {
            count += nestedEvenSum(obj[k])
        } else if (obj[k] % 2 === 0 ) {
            count += obj[k];
        }
    }
    return count;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {

    var output = [];

    for (var i = 0; i < array.length; i++) {

        if (Array.isArray(array[i])) {
            output = output.concat(flatten(array[i]));
        } else {
            output.push(array[i]);
        }
    }

    return output;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {

    if (obj === undefined) {
        obj = {};
    }

    if (str.length === 0) {
        return obj
    } else {
        if (obj[str[0]] === undefined) {
            obj[str[0]] = 1;
        } else {
            obj[str[0]] += 1;
        }
        return letterTally(str.slice(1, str.length), obj);
    }
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {

    var output = [];

    if (list.length === 0) {
        return [];
    }
    
    var letter = list[0]
    var index;
    output.push(letter)

    for (var i = 0; i <= list.length; i++){
        index = i;
        if (list[i] !== letter){
        break
        }
    }

    return output.concat(compress(list.slice(index, list.length)));

};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {

    var output = [];

    if (array.length === 0) {
        return output;
    } else {
        // Select first element from list and add augment
        var element = array[0]
        element.push(aug)

        // Add augmented element to an array and concatenate with output
        output.push(element);

        // Concatenate this output with recursive result of calling on remaining list elements
        return output.concat(augmentElements(array.slice(1, array.length), aug));
    }
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    var output = [];

    if (array.length === 0) {
        return [];
    }
    
    var num = array[0]
    var index = 1;
    output.push(num)

    // If num is a zero, search through array until a non-zero number is found
    if (num === 0){
        for (var i = 1; i <= array.length; i++){
            index = i;
            if (array[i] !== 0){
            break
            }
        }
    };

    // Recursive call to minimize Zero on the remaining array
    return output.concat(minimizeZeroes(array.slice(index, array.length)));
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

var alternateSign = function(array) {
    
    // Base Case if given empty array
    if (array.length === 0) {
        return [];
    // Base Case if given array length of 1 - number at index must be positive
    } else if (array.length === 1) {
        if (array[0] < 0) {
            return [-array[0]];
        } else {
            return [array[0]];
        }  

    // Otherwise carry out recursive calls to alternateSign
    } else {
        var num = array[array.length-1];
        var alternate = alternateSign(array.slice(0, array.length-1));

        if (alternate.length % 2 === 1 && num > 0){
            alternate.push(-num);
        } else if (alternate.length % 2 === 0 && num < 0){
            alternate.push(-num);
        } else {
            alternate.push(num);
        }
        return alternate;
    }
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    var numText = {1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'}

    var result = '';

    // Base Case for empty string:
    if (str.length === 0) {
        return '';
    // Recursive Case
    } else {

        var charDigit = parseInt(str[0]);

        // If Char is numerical then replace with string from numText object
        if (numText[charDigit] !== undefined){
            result += numText[charDigit];
        } else {
            result += str[0];
        }

        return result += numToText(str.slice(1, str.length));

    }
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
