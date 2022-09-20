
var cagetory = document.querySelector('.cagetory__wrap')
function showCagetory() {

    if (cagetory) {
        cagetory.classList.remove('cagetory__wrap__close')
        cagetory.classList.add('cagetory__wrap__show')
    }

}
function closeCagetory() {
    if (cagetory) {
        cagetory.classList.remove('cagetory__wrap__show')
        cagetory.classList.add('cagetory__wrap__close')


    }
}
function closeMenu() {
    var menuHide = document.querySelector('.menuhide__wrap')

    if (menuHide) {
        menuHide.classList.remove('showMenu')
        menuHide.classList.add('closeMenu')
    }

}
function showMenu() {
    var menuHide = document.querySelector('.menuhide__wrap')
    if (menuHide) {
        menuHide.classList.add('showMenu')
        menuHide.classList.remove('closeMenu')
    }

}