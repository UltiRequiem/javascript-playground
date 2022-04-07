# JavaScript

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/javascript?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/javascript/workflows/CodeQL/badge.svg)
![Lint](https://github.com/UltiRequiem/javascript/workflows/Lint/badge.svg)

JavaScript is the world's most popular programming language and it is very cool.

All here runs whit [Deno](https://deno.land), not [Node.js](https://nodejs.org).

## FAQ

- "Hey, everything here is TypeScript, not Javascript!"

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

And in TypeScript it would be:

```typescript
function biggerThan(arr: number[], max: number) {
  return arr.filter((num) => num > max);
}
```

Deno treats TypeScript as a first-class language, this means that configuration
is not necessary and you can import Typescript files into Javascript files
without any problem, so it was very easy to port all to Typescript.

I ended up passing even what was not needed to TypeScript because I didn't like
that the repository was half TypeScript and half JavaScript.

- "I want to import your code"

E.g: Import
[algos/primeNumber.ts](https://github.com/UltiRequiem/javascript/blob/main/algos/primeNumber.ts):

```typescript
import isPrime from "https://raw.githubusercontent.com/UltiRequiem/javascript/main/algos/primeNumber.ts";

console.log(isPrime(5));
```

### Bookmarks

Things that I liked and I want to save them to review them in some future.
