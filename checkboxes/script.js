const toggles =document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
const free = document.getElementById('free')
toggles.forEach(toggle => toggle.addEventListener('change', (e) => toTheTrick(e.target)))

function toTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked){
        if (free === theClickedOne) {
            cheap.checked = false
            good.checked = false
            fast.checked = false
        }
        
        else if(good === theClickedOne) {
            fast.checked = false
        }

        else if(cheap === theClickedOne) {
            good.checked = false
        }

        else if(fast === theClickedOne) {
            cheap.checked = false
        }
        
    }
}