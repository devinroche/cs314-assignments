let scroll2section = (section) => section.scrollIntoView()

let setBg = (color) => document.body.style.backgroundColor = color

let currColor = ''
let content = 'Click for '

let poBtnToggle = () => {
    currColor = currColor == 'pink' && currColor !== '' ? 'orange' : 'pink'
    let currText = currColor == 'pink' ? 'orange' : 'pink'
    document.getElementById('poBtn').firstChild.data = content + currText + '!';
    return document.body.style.backgroundColor = currColor
}

let getInput = () => {
    let d = document.getElementById('input3').value
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(d));
    document.getElementById('list').appendChild(li);
}

let removeLi = (el) => el.parentNode.removeChild(el)

let liBg = (el) => {
    el.parentNode.childNodes.forEach((curr) => {
        if(curr.style)
            curr.style.backgroundColor = 'lightgray'
    })

    el.style.backgroundColor = 'rebeccapurple'
}