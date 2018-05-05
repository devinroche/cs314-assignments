let images = ["fn1.jpg", "fn2.jpg", "fn3.jpg", "fn4.jpg"]
let imgContainer = document.getElementById("homeImg");
let imgCount = 1;

$(document).ready(() => {
    if(window.location.pathname === '/') 
        setInterval(changeImg, 3500)

})

let changeImg = () => {
    imgContainer.src = `images/${images[imgCount]}`;
    imgCount = (imgCount === images.length - 1) ? 0 : imgCount + 1;
}

let formHandler = () => {
    let form = document.forms[0]
    let fd = Object.values(form).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {})
    console.log(fd)
    if(!fd.name)
        return false
    
    let div = document.createElement('div')
    div.innerHTML = fd.name;
    return document.getElementById('form-container').appendChild(div)
}