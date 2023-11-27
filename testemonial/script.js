const testimonialsContainer = document.querySelector(".testimonial-container")
const testimonial = document.querySelector(".testimonial")
const userImage = document.querySelector('.user-image')
const username = document.querySelector(".username")
const role = document.querySelector('.role')

const testimonials = [ 
{
    name: 'Mooo',
    position: 'SexWorker',
    photo: 'https://stickerly.pstatic.net/sticker_pack/PQEbA06NLcQ7reKUeFtK0g/9I87N5/2/08cebe44-befc-4883-b0a8-913d0225db72.png',
    text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium uam harum itaque voluptatem similique possimus ab ea! Minus, quibusdam!',
}, 
{
    name:'Mewww',
    position: 'Striper',
    photo: 'https://www.africanoverlandtours.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg',
    text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quam consequuntur impedit maiores? Non aliquam quibusdam at vel porro eius, quisquam harum itaque voluptatem similique possimus ab ea! Minus, quibusdam!',
},
{
    name: 'srtaberry ',
    position: 'Farmer',
    photo: 'https://i1.sndcdn.com/avatars-zUGIpyyW010rJFrc-rdl0PQ-t240x240.jpg',
    text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quam consequuntur impedit maiores? Non aliquam quibusdam at vel porro eius, quisquam harum itaque voluptatem similique possimus ab ea! Minus, quibusdam!',
}, 

]

let idx = 1

function updateTestimonial() {

   const { name, position, photo, text } = testimonials[idx]

   testimonial.innerHTML = text
   userImage.src = photo
   username.innerHTML = name
   role.innerHTML = position

   idx++

   if(idx > testimonials.length - 1) {
      idx = 0
   }
   
}
updateTestimonial()

setInterval(updateTestimonial, 10000);