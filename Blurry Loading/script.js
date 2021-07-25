const loadText= document.querySelector('.loading-text');
const bg= document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30);
let filterBlur= 50;


function blurring(){
  load++;
    if(load>99){
      clearInterval(int);
    }

    loadText.innerText = load +'%';
    loadText.style.opacity = 1 - (load/100);

    // Doesnt work!
    // filterBlur -=0.3;
    // bg.style.filter = 'blur(${filterBlur}px)';

    // Doesn't work!
    // bg.style.filter= 'blur(${scale(load, 0, 100, 30, 0)}px)';
    // bg.style.filter= 'blur('+ 30-(30*(load/100)) +'px)';
    bg.style.filter= 'blur('+ (30-(30*(load/100))) +'px)';
    // console.log(bg.style.filter);
}
