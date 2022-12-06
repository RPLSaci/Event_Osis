let date = new Date()

if(document.getElementById("FooterYear")){
    document.getElementById("FooterYear").innerText = document.getElementById("FooterYear").innerText.replace("xxxx",date.getFullYear()) 
}

function getNav(){
    document.getElementById("navbar-cta").classList.toggle("hidden")
}