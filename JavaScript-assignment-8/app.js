

var left = 0;
// var right = 1200;
function abc(){
    console.log(event.keyCode)
var ironMan = document.getElementById("ironMan");
// var ironMan = document.getElementById("ironTager");
if(event.keyCode === 68){
    left = left + 10;
    ironMan.style.left = left + 'px'
    ironMan.src = 'image/iron man walk.gif'
    setTimeout(function(){
        ironMan.src = 'image/iron man stand.gif'
    },600)
}
if(event.keyCode === 65){
    left = left - 10;
    ironMan.style.left = left + 'px'
}
if(event.keyCode === 32){
    ironMan.style.width = "700px"
    ironMan.style.height = '300px'
    ironMan.src = 'image/iron man run.gif'
    setTimeout(function(){
        ironMan.src = 'image/iron man stand.gif'
    },2000)
}
if(event.keyCode === 87){
    ironMan.style.width = "800px"
    ironMan.style.height = "400px"
    ironMan.src = 'image/iron man fly.gif'    
    setTimeout(function(){
        ironMan.src = 'image/iron man stand.gif'
    },1000)
}
if(event.keyCode === 83){
    ironMan.style.width = '1000px'
    ironMan.style.height = '400px'
    ironMan.src = 'image/iron man fire.gif'
    setTimeout(function(){
        ironMan.src = 'image/iron man stand.gif'
    },5000)
}
}

window.onkeydown = abc;
