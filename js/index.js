"use strict"

const apple = document.querySelector(`.apple`)
console.log(apple)

window.addEventListener(`mousemove` , ( e )=>{
    apple.style.translate = `${e.clientX}px ${e.clientY}px`
})