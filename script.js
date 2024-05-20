var arr=[
    {dp: "https://images.unsplash.com/photo-1616790876844-97c0c6057364?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://images.unsplash.com/photo-1620332981233-fc3fa893bfb5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1615414400871-0c67042d9653?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://images.unsplash.com/photo-1618488221006-4ee92e2192cf?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://images.unsplash.com/photo-1616536864825-30513d5d0b0e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {dp: "https://images.unsplash.com/photo-1555584564-d39afb381168?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", img: "https://plus.unsplash.com/premium_photo-1664369473321-864d03df2fa0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
var grow=0;
var clutter= "";
arr.forEach(function(val,index){
    clutter+=`<div class="story">
    <img id="${index}" src="${val.dp}" alt="">
</div>`
})
document.querySelector("#stories").innerHTML=clutter;
document.querySelector("#stories").addEventListener("click", function(details){
    document.querySelector("#fullscr").style.display="initial";
    document.querySelector("#fullscr").style.backgroundImage=`url(${arr[details.target.id].img})`;
    
    if(grow<100){
        setInterval(function(){
            document.querySelector("#growth").style.width=`${grow}%`;
            grow++;
        },20)
    }
    else{
        grow=0;
    }
    setTimeout(function(){
        document.querySelector("#fullscr").style.display="none";
    },2000);
})