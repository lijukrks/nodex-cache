const node_cache = require('nodex-cache');
let { cache, expire } = node_cache;

const simpleCache = cache()

simpleCache.set('a', 1)
simpleCache.set('b', 3)
console.log(simpleCache.remove('b')) 
console.log(simpleCache.get('a')) 
console.log(simpleCache.remove('b')) 



const expirationHandler = (key, value) => {
    console.log(`expired ${key}: ${value}`) 
}
const expiringCache = expire(cache(), expirationHandler)

expiringCache.set('a', 1, 500)
expiringCache.set('b', 2)

console.log(expiringCache.remove('b')) 
console.log(expiringCache.get('a')) 

setTimeout(() => {
    console.log(expiringCache.get('b')) 
}, 1100)
