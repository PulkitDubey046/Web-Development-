function getData(dataId){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        },3000);
    });
}

getData(1).then ((res)=>{
    console.log(res);
    getData(2).then ((res)=>{
        console.log(res);
        getData(3).then ((res)=>{
        console.log(res);
    });
    });
});