//封装一个带有promise功能的ajax
   function ajax(option){
      var promise = new Promise(function(resolve,reject){
      	    var type = option.type||'get',
            url = option.url||'url',
            datatype = option.datatype||'json',
            data = option.data||{},
            onsuccess = option.onsuccess||function(){},
            onerror = option.onerror||function(){};

            var newArry=[];
            for(var key in data){
                    newArry.push(key+"="+data[key])
                };
            var dataStr = newArry.join('&');
            if(type==='get'){
                url = url +'?'+dataStr
            }

            // var xhr = window.XMLHttpRequest? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); 
            var xhr = new XMLHttpRequest();
            xhr.timeout = 1000;
            xhr.open(type,url,true);
        
            xhr.onreadystatechange = function(){
                
                if(xhr.readyState === 4){
                    if(xhr.status>=200 && xhr.status <300||xhr.status ==304){
                        
                        if(datatype=='json'){
                            
                            data= JSON.parse(xhr.responseText);
                        }else{
                            data = xhr.responseText;
                        };
                      	resolve(data)
                    }else{
                       reject()
                    };
                };
            };
            xhr.ontimeout = function(){
                
            };
             xhr.upload.onprogress = function(e) {
                
            };

            if(type==='get'){
                xhr.send(null);
            }else if(type =='post'){
                xhr.send(dataStr)
            };
      })
      return promise      
 
    };
ajax({
    type:'get',
    url:'http://v.juhe.cn/weather/index?format=2&key=559cd04c55bb224e129bb05ffec76ac4',
    datatype:'json',
    data: {
        cityname:'北京'
    }  
}).then(function(res,req){
	console.log(res)
},function(){

	console.log('erro')
})