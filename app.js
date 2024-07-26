let vandi=document.getElementById("sel")
let sel0=document.getElementById("veh")
let ul=document.getElementById("ul1")
let ul1=document.getElementById("ul2")

function select(){
    let get=vandi.value
    let get1=sel0.value
    if(get1=="car"){
        let gets=document.createElement("li")
        gets.innerHTML=get
        ul.appendChild(gets)
        let li_item=ul.getElementsByTagName("li")
        // console.log(li_item);
        for(let i=0;i<li_item.length;i++){
            if(i %2 == 0){
                li_item[i].style.color="red"
            }else{
                li_item[i].style.color="blue"
            }
        }
    }else if(get1=="bike"){
    let gets1=document.createElement("li")
    gets1.innerHTML=get
    ul1.appendChild(gets1)
    let li_item=ul1.getElementsByTagName("li")
    // console.log(li_item);
    for(let i=0;i<li_item.length;i++){
        if(i %2 == 0){
            li_item[i].style.color="red"
        }else{
            li_item[i].style.color="blue"
        }
    }
}else{
    alert("Please enter the vehicle name")
}
}


