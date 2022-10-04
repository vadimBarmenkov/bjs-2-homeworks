function cachingDecoratorNew(func) {
    let cache = {};

    return (...args) => {
        const hash = args.join(",");
        if (hash in cache){
            return "Из кэша: " + cache[hash];
        }

        const result = func(...args);
        if (Object.keys(cache).length === 5){
            delete cache[Object.keys(cache)[0]];
        }
        cache[hash] = result;
        return  "Вычисляем: " + result;
    }
}


function debounceDecoratorNew(func, delay) {
    let timeOutId = null;
    function wrapper(...args) {
        if(timeOutId){
            clearTimeout(timeOutId);
        }
        if(timeOutId === null){
            wrapper.count++;
            wrapper.allCount++;
            func(...args);
        }
        timeOutId = setTimeout(() => {
            wrapper.allCount++;
            func(...args);
        }, delay);
    }

    wrapper.allCount = 0;
    wrapper.count = 0;

    return wrapper;
}