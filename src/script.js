const input = document.querySelector('input');
const soundA = document.querySelector("#soundA")
const soundB = document.querySelector("#soundB")
const soundC = document.querySelector("#soundC")
const soundD = document.querySelector("#soundD")
const soundE = document.querySelector("#soundE")
const soundF = document.querySelector("#soundF")
const soundG = document.querySelector("#soundG")
const soundH = document.querySelector("#soundH")
const soundI = document.querySelector("#soundI")

function clean() {
    input.value = ""
}

input.addEventListener("keydown",
    function (e) {

        if (e.key === "a" || e.key === "A") {
            soundA.play()
        } else if (e.key === "b" || e.key === "B") {
            soundB.play()
        } else if (e.key === "c" || e.key === "C") {
            soundC.play()
        } else if (e.key === "d" || e.key === "D") {
            soundD.play()
        } else if (e.key === "e" || e.key === "E") {
            soundE.play()
        } else if (e.key === "f" || e.key === "F") {
            soundF.play()
        } else if (e.key === "g" || e.key === "G") {
            soundG.play()
        } else if (e.key === "h" || e.key === "H") {
            soundH.play()
        } else if (e.key === "i" || e.key === "I") {
            soundI.play()
        }
    });
function playA(){
    soundA.play()
}
function playB(){
    soundB.play()
}
function playC(){
    soundC.play()
}
function playD(){
    soundD.play()
}
function playE(){
    soundE.play()
}
function playF(){
    soundF.play()
}
function playG(){
    soundG.play()
}
function playH(){
    soundH.play()
}
function playI(){
    soundI.play()
}










