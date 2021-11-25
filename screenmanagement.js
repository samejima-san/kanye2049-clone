document.addEventListener('DOMContentLoaded', () =>{

    let bios = document.querySelector('.bios')
    let passwordscreen = document.querySelector('.password-screen')
    let main = document.querySelector('.canvas')
    let nav = document.querySelector('nav')
    let navbuttons = document.querySelectorAll('#navbutt')
    let hint = document.querySelector('#password-hint')

    //menus on start
    nav.style.display = "none"
    main.style.display = "none"
    passwordscreen.style.visibility = "hidden"
    bios.style.visibility = "visible"
    
    //menus after the bios
    document.addEventListener('keypress', () =>{
        if(bios.style.visibility != "hidden"){
            bios.style.visibility = "hidden"
            passwordscreen.style.visibility ="visible"
            nav.style.display = "flex"
            toggleUnclickableClass(navbuttons)
        }
    })

    //menus normally after password
    let passwords = ["TLOP", "YEEZUS", "GRADUATION", "DONDA", "MBDTF", "YE", "KSG", "COLLEGE DROP OUT"]
    let input = document.querySelector('input')
    let button = document.querySelector('button')
    button.addEventListener('click', () => {
        if(passwords.includes(input.value.toUpperCase())){
            passwordscreen.style.visibility = "hidden"
            passwordscreen.style.display = "none"
            bios.style.display = "none"
            main.style.display = "flex"
            toggleUnclickableClass(navbuttons)
        }
        else{
            input.style.border = "2px solid red"
        }
    })

    function toggleUnclickableClass(buttons){
        buttons.forEach(element => {
            if(element.classList.contains("unclickable")){ element.classList.remove("unclickable")}
            else{element.classList.add("unclickable")}
        });
    }

    hint.addEventListener('click', element=>{
        hint.innerText = "The Greatest Album Of All Time."
    })
    

})
