const circle = document.querySelector('#circle')
const firstText = document.querySelector('.closed')
const longText = document.querySelector('.open')


circle.addEventListener('mouseenter', ()=> {
    if(!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseleave', ()=> {
    if(circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});



//add the event listener
firstText.addEventListener('click', () =>{
    if(longText.classList.contains('open')) {
        longText.classList.add('active');
        firstText.classList.remove('active');
    }
});

longText.addEventListener('click', ()=> {
    if(firstText.classList.contains('closed')) {
        firstText.classList.add('active');
        longText.classList.remove('active');
    }
})