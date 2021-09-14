document.addEventListener('DOMContentLoaded', function(){
 let ye 
 let musicicon = document.querySelectorAll('.music-icon')
 let body = document.querySelector('body')
 let isPlaying = false
 function playSong(clicked){
    let songtitle = clicked.innerText.split("").reverse().slice(4).reverse().join("")
    ye = new Audio(`mov/${songtitle}.wav`)
    ye.play()
    body.style.cssText = `background-image: url("gifs/${songtitle}.gif");`
    
    ye.onended = function(){stopSong()}
 }

 function stopSong(){
    ye.pause()
    ye.currentTime = 0
    body.style.background = "#000"
 }

for(const icon of musicicon){
    icon.addEventListener('click', (event)=>{
        if(!isPlaying){playSong(icon)}
        else{stopSong()}
        isPlaying = !isPlaying
    })
}

    
})