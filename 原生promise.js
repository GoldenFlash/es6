function fn() {
	var promise = new Promise(function(resolve,reject){
		setTimeout(function() {
		resolve()
	}, 0)
	});
	
	console.log(promise.resolve)
	return promise;
}
fn().then(function() {
	console.log("fn1")
}).then(function(){
	console.log('fn2')
})