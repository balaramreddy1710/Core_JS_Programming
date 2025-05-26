## Core JavaScript Programming

This section covers the foundational concepts of JavaScript essential for both beginners and experienced developers. Topics include interactive development, primitives, data structures, functions, and modern ES6+ features.

### Topics Covered

- **REPL (Read-Eval-Print Loop)**  
  Interactive environment to execute JavaScript code line-by-line (e.g., browser console, Node.js).

- **Basic Programming Constructs**  
  Variables (`let`, `const`, `var`), conditionals (`if`, `else`, `switch`), loops (`for`, `while`, `do...while`), and functions.

- **Methods of Primitives**  
  Wrapper objects allow primitives (e.g., string, number) to use methods:  
  `"hello".toUpperCase()`, `(123).toFixed(2)`

- **Numbers**  
  Type conversion, parsing, rounding, `Number()`, `parseInt()`, `isNaN()`, `toFixed()`, etc.

- **Strings**  
  Operations like `length`, `slice()`, `substring()`, `split()`, `includes()`, `trim()`, and template literals.

- **Arrays**  
  Creation, access, and modification using index and built-in methods.

- **Array Methods**  
  - `forEach(callback)` – Iterates through each element
  - `filter(callback)` – Returns elements matching a condition
  - `map(callback)` – Transforms elements into a new array
  - `reduce(callback, initialValue)` – Reduces array to a single value

- **Arrow Functions**  
  Concise syntax:  
  `(a, b) => a + b`  
  Arrow functions also preserve the lexical `this`.

- **Iterables**  
  Objects that implement `Symbol.iterator`, allowing use with `for...of` (e.g., Arrays, Strings).

- **Map and Set**  
  - `Map` stores key-value pairs (any type as key)
  - `Set` stores unique values

- **WeakMap and WeakSet**  
  Similar to `Map`/`Set`, but keys must be objects and are weakly referenced (GC-friendly).

- **Destructuring Assignment**  
  Extract values from arrays/objects
  
- **The Old `var` vs `let` / `const`**  
  - `var`: function-scoped, hoisted, allows redeclaration  
  - `let`/`const`: block-scoped, safer, prevents bugs
