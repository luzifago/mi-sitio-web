alert("hola mundo")
let logoHamburguer = document.getElementById("logoHamburguer");
let mainMenu = document.getElementById("mainMenu")
logoHamburguer.addEventListener("click", function() {
    
    mainMenu.classList.add("main-menu-block")
}) 