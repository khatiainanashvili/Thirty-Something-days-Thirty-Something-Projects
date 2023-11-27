const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile-img')
const nam = document.getElementById('name')
const date = document.getElementById('date')


const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')
 setTimeout(getData, 2500);

function getData() {
    header.innerHTML = `<img src="./img/1 (1).jpeg" alt="">`
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est porro dolorem recusandae quos ex ipsam, veritatis tempore fugit quasi`
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="">`
    nam.innerHTML = 'jhon doe'
    date.innerHTML = 'Oct 08, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg'))
} 