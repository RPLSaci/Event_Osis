let date = new Date()
if(document.getElementById("FooterYear")){
    document.getElementById("FooterYear").innerText = document.getElementById("FooterYear").innerText.replace("xxxx",date.getFullYear()) 
}

function getNav(){
    document.getElementById("navbar-cta").classList.toggle("hidden")
}

let converter = new showdown.Converter()

main();
async function main(){
    let res = await fetch("https://raw.githubusercontent.com/RPLSaci/Event_Osis/main/events/list.json")
    let id = new URLSearchParams(window.location.search).get("id")
    if(!id){
        document.querySelector("#nama").innerText = "Event tidak ditemukan"
        return
    }
    let data = await res.json()
    let event = data.find(e => e.id===id)
    if(!event){
        document.querySelector("#nama").innerText = "Event tidak ditemukan"
        return 
    }
    console.log(event)
    document.querySelector("#nama").innerText = event.nama

    let CurrentEvent = await fetch(`https://raw.githubusercontent.com/RPLSaci/Event_Osis/main/events/${event.file}`)
    let text = await CurrentEvent.text()
    let Converted = converter.makeHtml(text)
    let el = document.querySelector("#main")
    el.innerHTML += Converted
}