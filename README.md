# 🔄 JavaScript Array Methods & Callback Functions – Explained

This repository serves as a concise yet detailed explanation of some of the most powerful array methods in JavaScript:  
- `forEach`  
- `map`  
- `filter`  
- `reduce`  
- Plus, a foundational look at **callback functions**, which power all of these methods.

Understanding these concepts is essential for writing clean, functional, and modern JavaScript.

---

## 📌 Table of Contents

1. [forEach](#1-foreach)
2. [map](#2-map)
3. [filter](#3-filter)
4. [reduce](#4-reduce)
5. [Callback Functions](#5-callback-functions)

---

## 1. 🔁 forEach

- The `forEach()` method is used to execute a given function once for each element in an array.
- It is **used for side effects**, such as logging or updating external values.
- It **does not return a new array**, and calling `return` inside it doesn't affect the outer scope.
- Common use: iterating through an array to perform an action on each element.

---

## 2. 🧭 map

- The `map()` method creates a **new array** populated with the results of calling a provided function on every element.
- It is **pure and functional**, meaning the original array remains unchanged.
- Best used when you want to **transform** elements (e.g., convert numbers, extract values, etc.).
- The returned array has the **same length** as the original array.

---

## 3. 🧹 filter

- The `filter()` method creates a **new array** with all elements that **pass a given test**.
- It does not mutate the original array.
- Use `filter()` to extract a **subset** of elements based on a condition.
- The resulting array may have **fewer elements** than the original.

---

## 4. 🧮 reduce

- The `reduce()` method executes a **reducer function** on each element and returns a **single accumulated value**.
- It is useful for calculating sums, products, building objects, or any form of accumulation.
- Takes an optional **initial value**, which is essential for predictable results (especially on empty arrays).
- Offers great flexibility but requires a deeper understanding compared to other methods.

---

## 5. 🧠 Callback Functions

- A **callback function** is a function passed as an argument to another function.
- All the methods above (`forEach`, `map`, `filter`, `reduce`) rely on callbacks to decide how to process each array element.
- Callbacks can be **anonymous** or **named**, and they are a core concept in asynchronous and functional JavaScript.

---

## 📚 Resources

- [MDN: Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN: Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN: Callback functions](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

---

## 👨‍💻 Author

Created by [Paras Jindal](https://github.com/Paras-jindal1604) while mastering core JavaScript methods for modern development.

---

