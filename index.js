// let pts= document.getElementsByClassName("score")
let homepts = 0
let awaypts = 0

// document.getElementById("home").textContent = homepts
document.getElementById("away").textContent = awaypts

console.log(awaypts)
console.log(homepts)
// console.log(pts)

function home_oneptr(){
    homepts += 1
    // console.log(homepts)    
    document.getElementById("home").textContent = homepts
}

function home_twoptr(){
    homepts += 2
    // console.log(homepts)    
    document.getElementById("home").textContent = homepts
}

function home_threeptr() {
    homepts +=3
    document.getElementById("home").textContent = homepts
}

function away_oneptr(){
    awaypts += 1
    document.getElementById("away").textContent = awaypts
}

function away_twoptr(){
    awaypts += 2
    // console.log(homepts)    
    document.getElementById("away").textContent = awaypts
}

function away_threeptr() {
    awaypts +=3
    document.getElementById("away").textContent = awaypts
}
let win = ""
function winner() {
    if (awaypts > homepts) win = console.log("GUEST TEAM is the winner")
    else win = console.log("HOME TEAM is the winner")
}

function victory() {
    document.getElementById("result").textContent = winner()
}


