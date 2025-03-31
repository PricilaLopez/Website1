const element1 = document.getElementById('element1')
const element2 = document.getElementById('element2')
const element3 = document.getElementById('element3')
const element4 = document.getElementById('element4')
const element5 = document.getElementById('element5')
const element6 = document.getElementById('element6')
const element7 = document.getElementById('element7')
const element8 = document.getElementById('element8')
const element9 = document.getElementById('element9')
container = document.querySelectorAll('.container')

element9.addEventListener('click', ()=>{
    element1.style.backgroundColor = "rgb(247, 168, 196, 0.75)"
    element2.style.backgroundColor = "rgb(247, 168, 196, 0.75)"
    element3.style.backgroundColor = "rgb(247, 168, 196, 0.75)"
    element4.style.backgroundColor = "rgb(247, 168, 196, 0.75)"
    element5.style.backgroundColor = "rgb(247, 168, 196, 0.75)"
    element6.style.backgroundColor = "rgb(247, 168, 196, 0.75)"
    element7.style.backgroundColor = "rgb(247, 168, 196, 0.75)"
    element8.style.backgroundColor = "rgb(247, 168, 196, 0.75)"
    element9.style.backgroundColor = "rgb(247, 168, 196, 0.75)"
})

container.addEventListener('mouseover', ()=>{
    element2.style.color = "green"
    element2.style.backgroundColor = "blue"
})
