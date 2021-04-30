function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function done() {
        
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        
    }
}