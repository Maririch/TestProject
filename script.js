const slides = document.querySelectorAll('.slide')
/*Акитивация активного класса*/
for (const slide of slides) {

    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}
/*Деактивация активного класса*/
function clearActiveClasses() {
    slides.forEach( (slide) => {
        slide.classList.remove('active')
    })

} 