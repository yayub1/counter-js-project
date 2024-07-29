const decreasebtn=document.getElementById('decreasebtn');
const resetbtn=document.getElementById('reset');
const increasebtn=document.getElementById('increasebtn');
const countable=document.getElementById('countable');
let count=0;
increasebtn.onclick=function(){
count++
countable.textContent=count;
}
decreasebtn.onclick=function(){
    count--
    countable.textContent=count;
    }
resetbtn.onclick=function(){
        count=0;
        countable.textContent=count;
        }