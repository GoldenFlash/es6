function fn() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve()
        }, 0)
    });
    console.log(1)
    return promise;
}
fn().then(function() {
    console.log("fn1")
}).then(function() {
    console.log('fn2')
}).catch(function(error) {
    console.log(error)
})
console.log(2)