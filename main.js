let btnOpen = document.getElementById("open");
let btnClose = document.getElementById("close");
let container = document.getElementById("cont");
onload=function(){
    container.classList.add("hide");
    btnClose.classList.add('hide2');
    btnOpen.classList.remove("hide2")

}
btnClose.onclick=function(){
    container.classList.add("hide");
    btnClose.classList.add('hide2');
    btnOpen.classList.remove("hide2")
}
btnOpen.onclick=function(){
    container.classList.remove("hide");
    btnClose.classList.remove('hide2');
    btnOpen.classList.add("hide2")
}