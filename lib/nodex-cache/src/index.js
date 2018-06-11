//Initializing the cache module
const cacheModule = module.exports = {};

//Main cache module
cacheModule.cache = () => {
    //Initializing cache store
    const store = {};
    //Set key and value
    const set = (key, value) => {
        store[key] = value;
    }
    //Remove key 
    const remove = key => {
        const value = store[key];
        delete store[key];
        return value;
    }
    //get key value
    const get = key => {
        const value = store[key];
        return value;
    }

    return { set, get, remove };
}


//Setting expiring cache
cacheModule.expire = (cache, expirationHandler) => {
    const timers = {};

    const set = (key, value, ttl = 1000) => {
        // Store value
        cache.set(key, value);
        // Clear existing timer
        clearTimeout(timers[key]);
        // Set expiration timer
        timers[key] = setTimeout(() => {
            const value = cache.remove(key);
            delete timers[key];
            expirationHandler(key, value);
        }, ttl);
    }

    const remove = key => {
        clearTimeout(timers[key]);
        delete timers[key];
        return cache.remove(key);
    }

    const get = key => {
        return cache.get(key);
    }



    return { set, get, remove };
}