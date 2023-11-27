const raitings = document.querySelectorAll('.raiting')
const raitingsContainer = document.querySelector('.raiting-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selectedRaiting = 'Statisfied'


raitingsContainer.addEventListener('click', (e) =>{

    if(e.target.parentNode.classList.contains('raiting'))
    {

        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRaiting = e.target.nextElementSibiling.innerHtml
    }
})

sendBtn.addEventListener('click', (e) =>{
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You </strong>
    <br>
    <strong>Feedback: ${selectedRaiting}</strong>
    <p> We'll use your feedback to improve our custumer support</p>
    `
})

function removeActive() {
    for (let i = 0; i < raitings.length; i++) {
        raitings[i].classList.remove('active')
        
    }
}