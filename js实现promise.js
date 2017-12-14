class Promise() {
	constractor() {
		this.callback = [];
	}
	resolve() {
		var execute = this.callback.shift();
		execute.resolve()
	}
	reject() {
		var execute = this.callback.shift();
		execute.resolve()
	}
	then(success, fail) {
		var obj = {
			resolve: success,
			reject: fail
		}
		this.callback.push(obj)
	}
}
var promise = new Promise();
function fn(){
	setTimeout(function(){
		promise.resolve()
	})
	return promise;
}
fn().then(function(){
	console.log('fn1')
}).then(function(){
	console.log('fn2')
})