const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const FinalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

function resetDOM() {
    counter.classList.remove('hide')
    FinalMessage.classList.remove('show')
    nums.forEach((e)=>{
      e.classList.value = ''
    })

    nums[0].classList.add('in')
    
}

function runAnimation() {
    nums.forEach( (e , i) => {
        console.log(e, i);
        const nextToLast = e.length - 1
       
        e.addEventListener('animationend', (el)=> {
            if(el.animationName === 'goIn' && i !== nextToLast){
                e.classList.remove('in')
                e.classList.add('out')
            } else if(el.animationName === 'goOut' && e.nextElementSibling) {
                       e.nextElementSibling.classList.add('in')
            }else {
                counter.classList.add('hide')
                FinalMessage.classList.add('show')
            }
        })
    })
}



replay.addEventListener("click", ()=> {
    resetDOM()
    runAnimation()
})