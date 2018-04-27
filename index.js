let todos
let albums
let showTodos = false
let showAlbums = false

$(() => {
    $.get('https://jsonplaceholder.typicode.com/users')
        .done((data) => {
        $.each(data, function(idx, el) {
            $('#data').append($(`
            <div class='user' id='main-${el.id}'>
                ${el.name} <br>
                ${el.email} <br>
                ${el.company.name} <br>
                <button id='${el.id}' class='todoBtn'>To Do</button>
                <button id='${el.id}' class='albumBtn'>Albums</button>
                <br><br>
            </div>`));
        });
    })

    $('#data').on('click', '.todoBtn', function(){
        todoDataHandler(this.id)
    });

    $('#data').on('click', '.albumBtn', function(){
        albumDataHandler(this.id)
    });
})

let hideAlbums = () => $(`.albums`).hide(500)
let hideTodo = () => $(`.todos`).hide(500)
let toggleShows = (t, a) => {
    showTodos = t;
    showAlbums = a;
}

let todoDataHandler = (id) => {
    if(!showTodos) {
        if(typeof todos === 'undefined') {
            $.get('https://jsonplaceholder.typicode.com/todos', (todo) => {
                todos = todo
                addTodos(todos.filter((el) => el.userId.toString() === id), id)
            })
        }
        else {
            addTodos(todos.filter((el) => el.userId.toString() === id), id)
        }

        toggleShows(true, false)
        hideAlbums()
    }
    else { 
        toggleShows(false, false)
        hideTodo()
    }
}

let albumDataHandler = (id) => {
    if(!showAlbums) {
        if(typeof albums === 'undefined') {
            $.get('https://jsonplaceholder.typicode.com/albums', (album) => {
                albums = album
                addAlbums(albums.filter((el) => el.userId.toString() === id), id)
            })
        }
        else {
            addAlbums(albums.filter((el) => el.userId.toString() === id), id)
        }

        hideTodo()
        toggleShows(false, true)
    }
    else { 
        toggleShows(false, false)
        hideAlbums()
    }
}

let addTodos = (userTodos, id) => {
    $.each(userTodos, (idx, el) => {
        let isDone = el.completed===true ? "fas fa-check" : ""
        $(`#main-${id}`).append($(`
            <div class='todos'>
                ${el.id}: ${el.title} <i class='${isDone}'></i>
                <br> <br>
            </div>
        `))
    })
}

let addAlbums = (userAlbums, id) => {
    $.each(userAlbums, (idx, el) => {
        $(`#main-${id}`).append($(`
            <div class='albums'>
                ${el.id}: ${el.title}
                <br> <br>
            </div>
        `))
    })
}