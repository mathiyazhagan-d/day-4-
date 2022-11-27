// question no 2

let result = new XMLHttpRequest;
result.open('GET','https://restcountries.com/v3.1/all');
result.send();
result.onload = ()=>{
    let data=JSON.parse(result.response);
    console.log("");//when you run all three question for same.allignment perpose
    for(let i=0;i<data.length;i++){
        console.log('country name : "'+data[i].name.common+'" and the flag : '+data[i].flags.png)
    }
}