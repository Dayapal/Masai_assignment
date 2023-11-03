const getdata = (data)=>{
    return new Promise((resolve,reject)=>{
        if(data %2 ==0){
            setTimeout(()=>{
                resolve("Even Number")
            },4000)
        }

        else if(data % 2 == 1){setTimeout(()=>{resolve("Odd Number")},2000)}
        else {reject('Error')}
    
       
    })

    
}

getdata(3).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log(error)
})



