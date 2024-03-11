var n = Math.floor((Math.random()*6)+1);
var m = Math.floor((Math.random()*6)+1);
document.firstElementChild.lastElementChild.querySelector(".img1").setAttribute("src","./dice"+n+".png");
document.firstElementChild.lastElementChild.querySelector(".img2").setAttribute("src","./dice"+m+".png");
if(n>m){
document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
if(m>n){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
if(n===m){
    document.firstElementChild.lastElementChild.querySelector("h1").innerHTML="Draws!";
}