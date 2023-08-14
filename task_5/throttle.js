function onScroll(event) {  
    console.log("Scroll event:", event);  
}  

function throttle(fn, time) {
    let timer;
    return (...args) => {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
            clearTimeout(timer);
            timer = null;
        }, time);
    }
}
      
const throttledScrollHandler = throttle(onScroll, 1000);  
      
window.addEventListener("scroll", event => throttledScrollHandler(event));