# 101 Days Of Code - Log

### Day 3: May 3, 2018

**Today's Progress**: Working through a lot of practice problems and trying to learn more built in objects. 

**Thoughts**: Feeling like I understand the basics of the JS language, but am terrible at using it to actually solve problems. 

**Learned** 
* `array.reduce` - reduce(callback(accumulator, currentValue) {  }, initialValue); *you don't need an initialValue*
```js
let array = [0, 1, 2, 3, 4]
array.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
});
```
* `in` operator - returns true if the specified property is in the object (or index is in the array)
 ```js
 let myCar = {make: 'Mazda', model: 'Maxda 3', year: 2013};
 console.log('make' in myCar);
 // expected output: true
 ```
 * `.map` vs `.forEach` - `.map` creates a new array with the results of calling a provided function on every element in the calling array while `forEach` performs a provided function once for each array index.
 ```js
 let arr = [1, 2, 3, 4, 5];
 
 //.forEach changes the original array
 arr.forEach((arrValue, index) => {
   return arr[index] = arrValue * 2;
 });
 
 //original array is change: arr = [2, 4, 6, 8, 10]
 
 //.map creates a new array with the changes made
 let arr2 = arr.map(arrValue => {
   return arrValue * 2;
 });
 
 //new array is change: arr2 = [2, 4, 6, 8, 10]
 ```

**Link(s) to work**:

### Day 2: May 2, 2018

**Today's Progress**: 
* Reread through the 2nd chapter of YDKJS: Up & Going again. Spent a bit more time on closure, `this`, and prototypes. 
* Working slowly through YDKJS: Scope and Closure. 
* Chapter One notes: Already understood pretty well how scope worked, but learned about the RHS and LHS look-ups in scope and learned about how the compilation of the code works. 

**Thoughts**: Trying to slow down and focus more on each subject. Got introduced to the `call` function which allows you to use a method from a different object.

**Link(s) to work**: [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

### Day 1: May 1, 2018

**Today's Progress**: 
* Finished Watch and Code - PJS walkthrough building a to-do list app.
* Completed Project Euler: Multiples of 3 and 5, Even Fibonacci numbers 

**Thoughts:** I definitely enjoyed the lessons and am happy I'm understanding all of the code being written. Most of it I could
figure out what was going to be written before he wrote it. I am also starting to get better at understanding and reading 
objects and arrays. 

**Learned:** 
* More in depth understanding of `this`
* Review of higher-order functions and callback functions 
* onclick HTML 
* `forEach` which takes an array and does an action for every item in the array, removing the need of `for` loops. 
* Basic understanding of how to connect JS to HTML and have them work together. Learned about event listeners, append child, element clicked, etc.

**Link(s) to work:** [Watch and Code - Practical JavaScript](https://watchandcode.com/p/practical-javascript), [Project Euler](https://projecteuler.net/archives)

### Day X: May 2, 2018

**Today's Progress**: 

**Thoughts**: 

**Link(s) to work**:
