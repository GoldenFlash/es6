class Promise1 {
     constructor() {
         this.callback = [];
     }
     resolve(data) {
         var execute = this.callback.shift();
         execute.resolve(data)
     }
     reject(data) {
         var execute = this.callback.shift();
         execute.reject(data)
     }
     then(success, fail) {
         var obj = {
             resolve: success,
             reject: fail
         }
         this.callback.push(obj)
         return this;
     }
 }
 var promise = new Promise1();

 function fn() {
     setTimeout(function() {
         promise.resolve('data')
     })
     return promise;
 }
 fn().then(function(data) {
     console.log(data)
     promise.resolve()
 }).then(function() {
     console.log('fn2')
 })