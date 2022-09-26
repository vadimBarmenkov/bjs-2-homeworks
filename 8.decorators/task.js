function cachingDecoratorNew(func) {
  let cache = {};
    return (...args) => {
        const hash = args.join(",");
        if (hash in cache){
            return "Из кэша: " + cache[hash];
        }

        const result = func(...args);
        if (cache.left === 5){
            cache.shift();
        }
        cache[hash] = result;
        return  "Вычисляем: " + result;
    }
}


function debounceDecoratorNew(func, delay) {
    let timeOutId = null;
    let count = 0;
    let allCount;
    return function (...args) {
        if(timeOutId){
            console.log("delete timeOutId");
            count = 0;
            clearTimeout(timeOutId);
        }
        console.log("create new timeOutId");
        allCount++;
        timeOutId = setTimeout(() => {
            timeOutId = null;
            count++;
            console.log(func(...args));
            console.log("run callback");
        }, delay);
    }
}