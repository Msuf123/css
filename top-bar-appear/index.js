var prev = window.scrollY;
console.log(prev)
window.onscroll=()=>{
let current=window.scrollY
if(prev<current){
 document.getElementById('top_bar').style.display='none'
}
else if(prev>current){
    document.getElementById('top_bar').style.display='block'
    document.getElementById('top_bar').style.position='sticky'
    document.getElementById('top_bar').style.top='0px'
}

console.log(prev+' and '+current)
prev=window.scrollY
}




