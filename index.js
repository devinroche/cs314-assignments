let images = ["fn1.jpg", "fn2.jpg", "fn3.jpg", "fn4.jpg"]
let imgContainer = document.getElementById("homeImg");
let imgCount = 1;

$(document).ready(() => {
    if(window.location.pathname === '/') 
        setInterval(changeImg, 3500)

    if(window.location.pathname === '/map')
        initMap()

    if(window.location.pathname === '/api')
        initApi()

})

let changeImg = () => {
    imgContainer.src = `images/${images[imgCount]}`;
    imgCount = (imgCount === images.length - 1) ? 0 : imgCount + 1;
}

let formHandler = () => {
    let form = document.forms[0]
    let fd = Object.values(form).reduce((obj,field) => { obj[field.name] = field.value; return obj }, {})
    delete fd[""]

    if(!fd.name){
        let err = document.createElement('div')
        err.innerHTML = 'Invalid Name'
        err.style.color = 'red'
        return document.getElementsByClassName('inner-main')[0].appendChild(err)
    }
    
    let div = document.createElement('div')
    for(let key in fd)
        div.innerHTML += key + ': ' +fd[key] + "<br/>"

    return document.getElementsByClassName('inner-main')[0].appendChild(div)
}

let map;
let mapPoints = [
    {
        position: {lat: 45.4025636, lng: -122.7621367},
        title: 'Durham Elementary School'
    },
    {
        position: {lat: 45.4317094, lng: -122.791429},
        title: 'Fowler Middle School'
    },
    {
        position: {lat: 45.4032698, lng: -122.771238},
        title: 'Tigard High School'
    }
]

let initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.4248196, lng: -122.8245259},
        zoom: 12
    });

    let markers = mapPoints.map((el, idx) => {
        return new google.maps.Marker({
            position: el.position,
            map: map,
            label: idx.toString(),
            title: el.title
        })
    })

    markers.map((el) => {
        let infowindow = new google.maps.InfoWindow({
            content: '<div>'+ el.title +'</div>'
        });

        el.addListener('click', function() {
            infowindow.open(map, el);
        });
  
  
    })
}

let initApi = () => {
    fetch(' https://dog.ceo/api/breeds/list/all ')
        .then((response) => response.json())
        .then((res) => {
            displayData(Object.keys(res.message))
        })
}

let displayData = (keysArr) => {
    let ul = document.createElement('ul')
    ul.setAttribute('id','dogUl');
    keysArr.map((k) => {
        li = document.createElement('li');
        li.id = k
        li.className = 'apiLi'
        li.innerHTML +=  k;
        return ul.appendChild(li)
    })
    ul.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI'){
            console.log(e.target.innerHTML)
            getDog(e.target.innerHTML)
        }
    });
    return document.getElementsByClassName('inner-main')[0].appendChild(ul)
}

let getDog = (dog) => {
    fetch(`https://dog.ceo/api/breed/${dog}/images`)
        .then((res) => res.json())
        .then((r) => {
            displayDoggo(r.message, dog)
        })
}

let displayDoggo = (dArr, did) => {
    var br = document.createElement("br");
    document.getElementById(did).appendChild(br)
    deleteAllDoggos()
    img = document.createElement('img')
    img.id = 'dogImg'
    img.src = dArr[Math.floor(Math.random() * dArr.length)]
    return document.getElementById(did).appendChild(img)
}

deleteAllDoggos = () => document.querySelectorAll("#dogImg").forEach(e => e.parentNode.removeChild(e));