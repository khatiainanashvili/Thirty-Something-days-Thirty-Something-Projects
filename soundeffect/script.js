const sounds = ['doggy', 'epic', 'bird', 'yawns']

sounds.forEach ( s => {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = s 


    btn.addEventListener('click', () =>{

        stopSongs()
        document.getElementById(s).play()
    } )

document.getElementById('buttons').appendChild(btn);
}

)

function stopSongs() {
    sounds.forEach(s => {
        var s= document.getElementById(s)

        s.pause()
        s.currentTime = 0
    })
}