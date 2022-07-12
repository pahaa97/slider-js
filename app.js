const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide .querySelectorAll('div').length

const container = document.querySelector('.container')
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
let indexSlideIndex = 0

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn .addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        indexSlideIndex++
        if (indexSlideIndex === slidesCount) {
            indexSlideIndex = 0
        }
    } else if (direction === 'down') {
        indexSlideIndex--
        if (indexSlideIndex < 0) {
            indexSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${indexSlideIndex * height}px)`

    sidebar.style.transform = `translateY(${indexSlideIndex * height}px)`
}
