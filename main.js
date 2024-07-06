const p1butt = document.querySelector("#p1butt");
const p2butt = document.querySelector("#p2butt");
const p1score = document.querySelector('#p1Score');
const p2score = document.querySelector('#p2Score');

let p1count, p2count =0;
let win=5;
let gameover = false;

p1butt.addEventListener('click', function(){
    if(!gameover){
        p1count += 1;
        if(p1count === win){
            gameover = true;
        }
        p1score.textContent = p1count;  
    }
});

p2butt.addEventListener('click', function(){
    if(!gameover){
        p2count += 1;
        if(p2count === win){
            gameover = true;
        }
        p2score.textContent = p2count;  
    }
});