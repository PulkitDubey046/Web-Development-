function asyncFun(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success");
        },4000);
    });
}

console.log("Fetching data...");
let p1= asyncFun();
p1.then((res)=>{
    console.log(res);
})