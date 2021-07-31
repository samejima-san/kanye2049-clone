document.addEventListener('DOMContentLoaded', function(){
 //let ye = new Audio('mov/AOTL.wav')
 //ye.play()
 let ye 
 let musicicon = document.querySelectorAll('.music-icon')
 let isPlaying = false
 function playSong(clicked){
    ye = new Audio(`mov/${clicked.innerText.split("").reverse().slice(4).reverse().join("")}.wav`)
    ye.play()
 }

 function stopSong(){
    ye.pause()
    ye.currentTime = 0
 }

for(const icon of musicicon){
    icon.addEventListener('click', (event)=>{
        if(!isPlaying){playSong(icon)}
        else{stopSong()}
        isPlaying = !isPlaying
    })
}
})