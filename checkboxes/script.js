const toggles =document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
const free = document.getElementById('free')
toggles.forEach(toggle => toggle.addEventListener('change', (e) => toTheTrick(e.target)))

function toTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked && free.checked){
        if(free === theClickedOne) {
            cheap.checked = false
            good.checked = false
            fast.checked = false
        }
        
        if(good === theClickedOne || free === theClickedOne)  {
            fast.checked = false
        }

        if(cheap === theClickedOne || free === theClickedOne) {
            good.checked = false
        
        }

        if(fast === theClickedOne || free === theClickedOne) {
            cheap.checked = false
    
        }
        
    }
}