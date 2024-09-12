const p1butt = document.querySelector("#p1butt");
const p2butt = document.querySelector("#p2butt");
const p1score = document.querySelector('#p1Score');
const p2score = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
const select = document.querySelector("#select");

let p1count = 0;
let p2count =0;
let win= 11;
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

select.addEventListener('change' , function(){
    win = parseInt(this.value);
});

reset.addEventListener('click', function(){
    gameover = false;
    p1count = 0;
    p2count = 0;
    p2score.textContent = 0;  
    p1score.textContent = 0;
} );