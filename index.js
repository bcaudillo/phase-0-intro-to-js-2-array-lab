// Write your solution here!
let cats =["Milo","Otis","Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    let cats2 = [...cats,name]
    return cats2
}

function prependCat(name){
    let cats3 = [name,...cats]
    return cats3
}

function removeLastCat(){
    let cats4 = cats.slice(0,-1)
    return cats4
}

function removeFirstCat(){
    let cats5 = cats.slice(1)
    return cats5
}