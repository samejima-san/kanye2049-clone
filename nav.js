document.addEventListener('DOMContentLoaded', function(){

    let nav = document.querySelectorAll('#navbutt')
    let apple = document.querySelector('.apple')
    let special = document.querySelector('.special')
    let file = document.querySelector('.file')
    let edit = document.querySelector('.edit')
    let dropdownsub = document.querySelectorAll('.dropdown')
    
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
        if(menu.style.visibility === "hidden"){ menu.style.visibility = "visible" }
        else{ menu.style.visibility = "hidden" }
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

    about.addEventListener('click', event=>{ dropdown(aboutmenu)})
    show.addEventListener('click', event=>{ 
        if(show.innerHTML=== "Show Hidden Files"){ show.innerHTML = `Hide Hidden Files`}
        else{show.innerHTML = `Show Hidden Files`}
        dropdown(hiddenfiles[0])
    })
})