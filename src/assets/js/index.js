let date = new Date()

if(document.getElementById("FooterYear")){
    document.getElementById("FooterYear").innerText = document.getElementById("FooterYear").innerText.replace("xxxx",date.getFullYear()) 
}

function getNav(){
    document.getElementById("navbar-cta").classList.toggle("hidden")
}

fetchEvent()
async function fetchEvent(){
    let res = await fetch("https://raw.githubusercontent.com/RPLSaci/event/main/events/mainMenu.json")
    let data = await res.json()
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element)
        let str = `
        <div class="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src="https://github.com/RPLSaci/event/raw/main/events/${element.img}" alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">${element.nama}</h2>
          <p>${element.deskripsi}</p>
          <div class="card-actions justify-end">
            <a class="btn btn-primary" href="./showEvent/index.html?id=${element.id}">Detail</a>
          </div>
        </div>
    </div>
    `
    const el = document.querySelector("#cards")
        if(el){
          el.innerHTML += str
        }
    }
}