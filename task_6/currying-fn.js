function multiply(a, b, c) {  
    return a * b * c;  
}  

function curry(func, arity) {
    return function curriedFunc(...args) {
        if (args.length >= arity) {
            return func(...args);
        }
        return function(...concatArgs) {
            return curriedFunc.apply(this, args.concat(concatArgs));
        }
    }
}

function extendCurry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            if (args.includes('_')) {
                const underScoreLength = args.filter(a => '_' === a).length;
                return function addMissingArgs(...underScoreArgs) {
                    if (underScoreArgs.length >= underScoreLength) {
                        args = args.map((a, i) => a === '_' ? underScoreArgs[i] : a);
                        return func(...args);
                    }
                    return function(...concatUnderscoreArgs) {
                        return addMissingArgs.apply(this, underScoreArgs.concat(concatUnderscoreArgs));
                    }
                }
            }
            return func(...args);
        }
        return function(...concatArgs) {
            return curriedFunc.apply(this, args.concat(concatArgs));
        }
    }
}

export {curry, multiply, extendCurry};