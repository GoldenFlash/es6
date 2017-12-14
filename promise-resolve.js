 var fn = {
        then(resolve,reject) {
            resolve('data')
        }
    }
    
    var fn1 = Promise.resolve(fn);

    fn1.then(function(data) {
        console.log(data)
    }).then(function() {
        console.log('fn2')
    }).catch(function(error) {
        console.log(error)
    });

//需要注意的是，立即resolve的 Promise 对象，是在本轮“事件循环”（event loop）的结束时，
//而不是在下一轮“事件循环”的开始时。

setTimeout(function () {
  console.log('three');
}, 0);

Promise.resolve().then(function () {
  console.log('two');
});

console.log('one');

// one
// two
// three
//上面代码中，setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
//Promise.resolve()在本轮“事件循环”结束时执行，console.log('one')则是立即执行，
//因此最先输出。