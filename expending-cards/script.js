const panels = document.querySelectorAll(".panel");


panels.forEach(element =>{
    element.addEventListener('click',()=>{
          removeActiveClases()
          element.classList.add("active")
    })
})

function removeActiveClases() {
     panels.forEach(element => {
        element.classList.remove("active")
     });
}