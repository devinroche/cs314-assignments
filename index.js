// swap first and last characters in a string
let charSwap = () => {
    let str = prompt("input string")
    lenHelper(str) ? console.log("1: ", str.substring(str.length-1) + str.substring(1, str.length-1)+ str.substring(0, 1) ) : null
}


let hiStr = () => {
    str = prompt("input string")
    lenHelper(str) ? 
        str.toLowerCase().includes("hi") ? 
        console.log("2: ", str) 
        : console.log("2: ", "hi " + str)
    : null
}

let threeChars = () => {
    str = prompt("input string")
    str.length >= 3 && str !==null ? 
    console.log("3: ", str.substring(str.length-3, str.length) + str.substring(0, str.length-3)) 
    : console.log("3: ", "not 3")
}

let strSent = () => {
    let strLst = prompt("enter comma separated list (3)")
    let strArr = strLst.split(",")
    strArr.length === 3 ?
    console.log("4: ", `My favorite color is ${strArr[0]}, ${strArr[1]} are awesome, and I love ${strArr[2]}`)
    : console.log("4: invalid length")
}

// convert first three characters to either upper or lower case
let upLow = () => {
    let str = prompt("enter string")
    let finalStr = str.length > 3 ? str.substring(0, 3).toLowerCase() + str.slice(3) : str.toUpperCase()
    console.log("5: ", finalStr)
}

// swap first and last integers in array
let intSwap = () => {
    intArr = prompt("enter comma separated integers").split(",").map(Number)
    if(lenHelper(intArr)) { 
        let first = intArr.slice(0,1)[0]
        intArr.splice(0, 1, intArr.slice(-1)[0])
        intArr.splice(-1, 1, first)
        console.log("6: ", intArr)
        alert(intArr)
    } 
    else console.log("too small")
}

//prompt comma separated list (strings) return longest string
let longStr = (strArr) => {
    strArr = prompt("enter comma separted list of strings")
    strArr = strArr.split(",").map((el) => el.trim())
    let bigStr = strArr.sort((a, b) => {
        return b.length > a.length
    })[0]
    console.log("7: ", bigStr)
    alert("biggest string: "+ bigStr)
}

// prompt for comma separated list (ints) and return largest even number
let bigEven = () => {
    let numArr = prompt("enter list of numbers separated by comma")
    numArr = numArr.split(",")
    numArr = numArr.map((el) => Number(el))
    let evenArr = numArr.filter((el, idx) => idx %2 !== 0)
    console.log("8: ", evenArr.sort((a, b) => b > a)[0])
    alert("Largest Even Number: " + evenArr.sort((a, b) => b > a)[0])
}

// alert current day and time 
let dateAlert = () => {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        now = new Date()
        hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours()
        am_pm = now.getHours() >= 12 ? "pm" : "am"
        minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()

    console.log("9: ", `Today is ${days[now.getDay()]}\n It is ${hours + ":" + minutes +" " + am_pm}`)
    alert(`Today is ${days[now.getDay()]}\n It is ${hours + ":" + minutes +" " + am_pm}`)
}

//accept unlimited args and print as single string
let infiniteArgs = (...args) => alert(args.join(" "))

let lenHelper = (str) => {
    let retVal = false
    str !== null && str.length >= 1 ? retVal = true : retVal = false
    retVal === false ? console.log("invalid") : null
    return retVal
}

// charSwap()

// hiStr()

// threeChars()

// strSent()

// upLow()

// intSwap()

// longStr()

// bigEven()

// dateAlert()

// infiniteArgs("hi", "programming", "rocks", "twitch", "tv", "mcscruples")