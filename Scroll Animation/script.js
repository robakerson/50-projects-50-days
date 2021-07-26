const boxes = document.querySelectorAll('.box');
const boxes2 = document.querySelectorAll('.box2');
window.addEventListener('scroll', checkBoxes);
window.addEventListener('scroll', check2Boxes);

checkBoxes();

function checkBoxes(){
  const triggerBottom = window.innerHeight * 0.7;
  boxes.forEach(box =>{
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom){
      box.classList.add('show');
    }else{
      box.classList.remove('show');
    }
  })
}
