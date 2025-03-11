const btn = document.querySelector('.btn')
const colorList = ['#A5B68D','"#FFB8E0"', '"#ADB2D4"', '"#C7D9DD"', '"#D5E5D5"', '"#C1D8C3"', '"#EC7FA9"', '"#7A73D1"', '"#C599B6"', '"#A9B5DF"', '"#7886C7"', '"#F7CFD8"', '#B82132', '#D2665A', '#818C78', '#EFB036', '#98D8EF', '#F0BB78', '#FCC737', '#997C70', '#D6C0B3', '#B8001F']
let index = 0

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = "colorList[index]"
    index = (index + 1) % 22
})
