# nodex-cache

> A simple caching module for node js that has ```set```, ```get``` and ```delete``` methods. Keys can have a timeout (ttl) after which they expire and are deleted from the cache.

## Installation

```js
npm i --save nodex-cache
```

## Usage

```js
const node_cache = require('nodex-cache');
let { cache, expire } = node_cache;
```

### Simple Cache

```js
const simpleCache = cache();

simpleCache.set('a', 1)
simpleCache.set('b', 3)

console.log(simpleCache.remove('b')) // 3
console.log(simpleCache.get('a')) // 1
console.log(simpleCache.remove('b')) // undefined
```

### Expiring Cache

```js
const expirationHandler = (key, value) => {
    console.log(`expired ${key}: ${value}`) // expired b: 2
}
const expiringCache = expire(cache(), expirationHandler)

expiringCache.set('a', 1, 1000)
expiringCache.set('b', 2) //default expiry is 1000
expiringCache.set('c', 3) //default expiry is 1000

console.log(expiringCache.remove('b')) // 2
console.log(expiringCache.get('a')) // 1

setTimeout(() => {
    console.log(expiringCache.get('a')) // undefined
}, 1200)
```

## License

MIT © Liju Kuriakose