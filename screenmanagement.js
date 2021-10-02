document.addEventListener('DOMContentLoaded', () =>{

    let bios = document.querySelector('.bios')
    let passwordscreen = document.querySelector('.password-screen')
    let main = document.querySelector('.canvas')
    let nav = document.querySelector('nav')
    let navbuttons = document.querySelectorAll('#navbutt')

    //menus on start
    nav.style.display = "none"
    main.style.display = "none"
    passwordscreen.style.visibility = "hidden"
    bios.style.visibility = "visible"
    
    //menus after the bios
    document.addEventListener('keypress', () =>{
        bios.style.visibility = "hidden"
        passwordscreen.style.visibility ="visible"
        nav.style.display = "flex"
        toggleUnclickableClass(navbuttons)
    })
    //menus normally after password
    let passwords = ["TLOP", "YEEZUS", "GRADUATION", "DONDA"]
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
    })

    function toggleUnclickableClass(buttons){
        buttons.forEach(element => {
            if(element.classList.contains("unclickable")){ element.classList.remove("unclickable")}
            else{element.classList.add("unclickable")}
        });
    }
    

})
