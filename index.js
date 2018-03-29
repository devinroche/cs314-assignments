let confirmFunc = () => {
    if (confirm("true or false"))
        return console.log('true')

    else return console.log('false')
}

let confirmFuncTurn = () => confirm("true or false") ? console.log('true') : console.log('false')

let numPromp = () => {
    let val = prompt("enter a number")

    if(val === null) 
        alert('null//cancel')
    
    else if(isNaN(val)) 
        alert('not a number')

    else if(val.length == 0) 
        alert('no input')
    
    else
        alert(parseInt(val))
}

function makeObj(first, last){
    this.first = first,
    this.last = last,
    this.fullName = () => `${this.first} ${this.last} `
}

function cloneFunc(new_kv = {}, obj){
    return objClone = Object.assign(new_kv, obj)
} 

let uObj = new makeObj('devin', 'roche')
console.log("old obj", uObj, uObj.fullName())

let cpObj = new cloneFunc({age: 22}, uObj)
console.log('cloned obj', cpObj, cpObj.fullName())

// function threeString(a, b, c="baz") {
//     console.log(a+b+c)
//     return a+b+c
// }

// let threeString = function(a, b, c='baz') {
//     console.log(a+b+c)
//     return a+b+c
// }

let threeString = (a, b, c='baz') => a+b+c

let tmp = threeString('foo', 'bar')
console.log(tmp)