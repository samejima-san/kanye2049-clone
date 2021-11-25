document.addEventListener('DOMContentLoaded', function(){

    let nav = document.querySelectorAll('#navbutt')
    let apple = document.querySelector('.apple')
    let special = document.querySelector('.special')
    let file = document.querySelector('.file')
    let edit = document.querySelector('.edit')
    let dropdownsub = document.querySelectorAll('.dropdown')
    let canvas = document.querySelector('.canvas')
    
    //adds the inline-style on our dropdown menus
    dropdownsub.forEach(element=>{element.style.visibility = "hidden"})

    for(const button of nav){
        button.addEventListener('click', (event) => {
            switch(button.innerHTML){
                case "File":
                    dropdown(file)
                    hideRemainingNavmenus(file)
                    break
                case "Edit":
                    dropdown(edit)
                    hideRemainingNavmenus(edit)
                    break
                case "Special":
                    dropdown(special)
                    hideRemainingNavmenus(special)
                    break
                default:
                    dropdown(apple)
                    hideRemainingNavmenus(apple)
                    break
            }
        })
    }

    function dropdown(menu){
        if(menu.style.visibility === "hidden"){
             menu.style.visibility = "visible" 
        }
        else{ 
            menu.style.visibility = "hidden"
        }
    }
        
    

    function hideRemainingNavmenus(navbutton){
        for(let i = 0; i<dropdownsub.length; i++){
            if(dropdownsub[i] !== navbutton){ dropdownsub[i].style.visibility = "hidden"}
        }
    }

    let show = document.getElementById('show')
    let about = document.getElementById('about')
    let restart = document.getElementById('restart')

    let aboutmenu = document.querySelector('.aboutscreen')
    let hiddenfiles = document.querySelectorAll('#hiddenfile')

    let asukavid = document.querySelector('.ytasuka')
    let exitbutton = document.querySelector('.exit')

    about.addEventListener('click', event=>{ dropdown(aboutmenu)})
    show.addEventListener('click', event=>{ 
        if(show.innerHTML=== "Show Hidden Files"){ show.innerHTML = `Hide Hidden Files`}
        else{show.innerHTML = `Show Hidden Files`}
        dropdown(hiddenfiles[0])
    })

    hiddenfiles[0].addEventListener('click', event =>{
        dropdown(asukavid)
    })

    exitbutton.addEventListener('click', event=>{dropdown(asukavid)})

    restart.addEventListener('click', ()=>{ location.reload()})

    canvas.addEventListener('click', ()=>{hideRemainingNavmenus("all")})



    let blinking = document.querySelector('.blinking')
    let bios = document.querySelector('.bios')

    function blinkfunc(){
        if(blinking.style.visibility === "hidden"){ blinking.style.visibility = "visible" }
        else{ blinking.style.visibility = "hidden" }
        if(bios.style.visibility != "hidden"){setTimeout(blinkfunc, 600)}
        else{ 
            blinking.style.visibility = "hidden"
            blinking.style.display = "none"
        }
    }

    blinkfunc()
    
})