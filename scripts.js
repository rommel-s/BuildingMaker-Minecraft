//2D coordinates
const initCoordX = document.getElementById("ini-coord-x-2d")
const initCoordY = document.getElementById("ini-coord-y-2d")
const initCoordZ = document.getElementById("ini-coord-z-2d")

const endCoordX = document.getElementById("end-coord-x-2d")
const endCoordY = document.getElementById("end-coord-y-2d")
const endCoordZ = document.getElementById("end-coord-z-2d")

//3D coordinates
const initCoordX3D = document.getElementById("ini-coord-x-3d")
const initCoordY3D = document.getElementById("ini-coord-y-3d")
const initCoordZ3D = document.getElementById("ini-coord-z-3d")

const endCoordX3D = document.getElementById("end-coord-x-3d")
const endCoordY3D = document.getElementById("end-coord-y-3d")
const endCoordZ3D = document.getElementById("end-coord-z-3d")

//User inputs
const blockName2D = document.querySelector(" #block-2d")
const blockName3D = document.querySelector(" #block-3d")

const answer = document.getElementById("code-answer")


function generate2D() {

    let initX = Number(initCoordX.value)
    let initY = Number(initCoordY.value)
    let initZ = Number(initCoordZ.value)
    
    let endX = Number(endCoordX.value)
    let endY = Number(endCoordY.value)
    let endZ = Number(endCoordZ.value)

    let blockString = String(blockName2D.value)

    if (initCoordX.value.length == 0 || initCoordY.value.length == 0 || initCoordZ.value.length == 0 || endCoordX.value.length == 0 || endCoordZ.value.length == 0) {
        alert("Confira os valores e tente novamente")
    } else if (initCoordY.value != endCoordY.value) {
        endY = initY
        alert("Os valores da altura Y são diferentes, portanto foi mantido o mesmo valor da altura inicial X")
        answer.innerHTML = `>> /fill ${initX} ${initY} ${initZ} ${endX} ${endY} ${endZ} ${blockString}`
    } else {
        answer.innerHTML = `>> /fill ${initX} ${initY} ${initZ} ${endX} ${endY} ${endZ} ${blockString}`

    }

}

function generate3D() {

    let initX3d = Number(initCoordX3D.value)
    let initY3d = Number(initCoordY3D.value)
    let initZ3d = Number(initCoordZ3D.value)
    
    let endX3d = Number(endCoordX3D.value)
    let endY3d = Number(endCoordY3D.value)
    let endZ3d = Number(endCoordZ3D.value)
    
    let blockString3D = String(blockName3D.value)
    
    if (initCoordX3D.value.length == 0 || initCoordY3D.value.length == 0 || initCoordZ3D.value.length == 0 || endCoordX3D.value.length == 0 || endCoordY3D.value.length == 0 || endCoordZ3D.value.length == 0) {
        alert("Confira os valores e tente novamente")
    } else {
        answer.innerHTML = `>> /fill ${initX3d} ${initY3d} ${initZ3d} ${endX3d} ${endY3d} ${endZ3d} ${blockString3D}`

    }

}