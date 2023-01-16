let img = document.getElementsByClassName("img")[0]
let button = document.getElementById("btn")


function Api(){
    fetch(' https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(json => {
           button.onclick = () => {
            let ran = Math.floor(Math.random()*101)
            let url =  json.data.memes[ran].url
            img.innerHTML = `<img src='${url}'alt="" width=300px height=300px >`;
            }
}
        )}
         
Api()

let top1 = document.getElementsByClassName('abs')[0]
let top2 = document.getElementsByClassName('abs1')[0]

window.onclick = () =>{
    let text1 =  document.getElementsByClassName('text1')[0].value
    let text =  document.getElementsByClassName('text')[0].value
    top1.innerText = text
    top2.innerHTML = text1

}


