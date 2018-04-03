let charSwap = (a) => {
    let str = a.split("")
    console.log("1: ", a.substring(a.length-1) + a.substring(1, str.length-1)+ a.substring(0, 1) )
}

let hiStr = (str) => str.includes("Hi") ? console.log("2: ", str) : console.log("2: ", "Hi " + str)

let threeChars = (str) => str.length >= 3 ? console.log("3: ", str.substring(str.length-3, str.length) + str.substring(0, str.length-3)) : console.log("3: ", "not 3")

let strSent = (strLst) => {
    let strArr = strLst.split(",")
    console.log("4: ", `My favorite color is ${strArr[0]}, ${strArr[1]} are awesome, and I love ${strArr[2]}`)
}

let upLow = (str) => {
    console.log("5: ", str.length > 3 ? str.substring(0, 3).toLowerCase() + str.slice(3) : str.toUpperCase())
}

let intSwap = (intArr) => {
    if(intArr.length > 1) { 
        let first = intArr.slice(0,1)[0]
        intArr.splice(0, 1, intArr.slice(-1)[0])
        intArr.splice(-1, 1, first)
        console.log("6: ", intArr)
    } 
    else console.log("too small")
}

let longStr = (strArr) => console.log("7: ", strArr.sort((a, b) => {
    return b.length > a.length
})[0])

let bigEven = (numArr) => {
    let evenArr = numArr.filter((el, idx) => idx %2 !== 0)
    console.log("8: ", evenArr.sort((a, b) => b > a)[0])
}

let dateAlert = () => {
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        now = new Date()
        hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours()
        am_pm = now.getHours() >= 12 ? "pm" : "am"
        minutes = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()

    console.log("9: ", `Today is ${days[now.getDay()]}\n It is ${hours + ":" + minutes +" " + am_pm}`)
    alert(`Today is ${days[now.getDay()]}\n It is ${hours + ":" + minutes +" " + am_pm}`)
}

let infiniteArgs = (...args) => {
    
}

charSwap("pizza")

hiStr('Hi dude')
hiStr('foobar')

threeChars('pizza')

strSent("foo, bar, baz")

upLow("foo")
upLow("FOOBAR")

intSwap([1,2,3,4,5])

longStr(["foo", "bazzle", "test", "asdfasdf", "dog"])

bigEven([1,2,3,7,15,16, 8,9,10,11, 4,5,6,12,13,14])

dateAlert()