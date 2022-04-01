const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')
const closedMouth = document.querySelector('.open1')

//add the event listener
closedFace.addEventListener('click', () =>{
    if(openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', ()=> {
    if(closedFace.classList.contains('closed')) {
        closedMouth.classList.add('active');
        openFace.classList.remove('active');
    }
});

closedMouth.addEventListener('click', ()=> {
    if(closedMouth.classList.contains('open1')) {
        closedFace.classList.add('active');
        closedMouth.classList.remove('active');
    }
})