# JavaScript

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


JavaScript is the world's most popular programming language and is very cool.

All here runs whit [Deno](https://deno.land), not [Node.js](https://nodejs.org).

## FAQ

- "Hey, everything here is TypeScript, not JavaScript!"

It's because I had a lot of functions like:

```javascript
/**
 * @param {number[]} arr
 * @param {number} max
 */

function biggerThan(arr, max) {
  return arr.filter((num) => num > max);
}
```

And in TypeScript, it would be:

```typescript
function biggerThan(arr: number[], max: number) {
  return arr.filter((num) => num > max);
}
```

Deno treats TypeScript as a first-class language, which means that configuration
is not necessary, and you can import TypeScript files into JavaScript files
without any problem, as these snippets were mostly independent, it was very straightforward to port everything to TypeScript.

I ended up passing even what was not needed to TypeScript because I didn't like
that the repository was half TypeScript and half JavaScript.

- "I want to import your code."

E.g: Import
[algos/primeNumber.ts](https://github.com/UltiRequiem/javascript/blob/main/algos/primeNumber.ts):

```typescript
import isPrime from "https://raw.githubusercontent.com/UltiRequiem/javascript/main/algos/primeNumber.ts";

console.log(isPrime(5));
```

### Bookmarks

Things that I liked and I want to save them to review them in the future.
