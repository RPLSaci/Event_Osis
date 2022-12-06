let date = new Date()

if(document.getElementById("FooterYear")){
    document.getElementById("FooterYear").innerText = document.getElementById("FooterYear").innerText.replace("xxxx",date.getFullYear()) 
}

function getNav(){
    document.getElementById("navbar-cta").classList.toggle("hidden")
}

fetchEvent()
async function fetchEvent(){
    let res = await fetch("https://raw.githubusercontent.com/RPLSaci/Event_Osis/main/events/mainMenu.json")
    console.log((await res.json()))
}