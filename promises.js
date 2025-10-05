const newpromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
            console.log("newpromise");
            resolve('username:"adarsh",email:"adarsh@gmail.com"');
        }else {
            reject("Got error");
        }
    },1000)
    
})
.then((data)=>{
    console.log(data);
})