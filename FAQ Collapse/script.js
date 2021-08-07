
const toggles = document.querySelectorAll('.faq-toggle');

// console.log(toggles);

toggles.forEach(toggle =>{
  toggle.addEventListener('click', function(){
    toggle.parentNode.classList.toggle('active');
  })
})
