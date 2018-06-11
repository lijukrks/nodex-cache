const node_cache = require('nodex-cache');
let { cache, expire } = node_cache;

const simpleCache = cache()

simpleCache.set('a', 1)
simpleCache.set('b', 3)
console.log(simpleCache.remove('b')) // 1
console.log(simpleCache.get('a')) // 1
console.log(simpleCache.remove('b')) // 1



const expirationHandler = (key, value) => {
    console.log(`expired ${key}: ${value}`) // expired b: 2
}
const expiringCache = expire(cache(), expirationHandler)

expiringCache.set('a', 1, 500)
expiringCache.set('b', 2)

console.log(expiringCache.remove('b')) // 1
console.log(expiringCache.get('a')) // 1

setTimeout(() => {
    console.log(expiringCache.get('b')) // undefined
}, 1100)
