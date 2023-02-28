const menu_btn = document.getElementById('menu_btn')
const mobile_menu = document.getElementById('mobile_menu')
const menu_bars = document.getElementById('menu_bars')
const menu_close = document.getElementById('menu_close')
const clipBoard = document.querySelector('#clipboard')

menu_btn.addEventListener('click', () => {
  mobile_menu.classList.toggle('hidden')
  menu_bars.classList.toggle('hidden')
  menu_close.classList.toggle('hidden')
})

clipBoard.addEventListener('click', () => {
  clipBoard.toggleAttribute('class','fa-solid fa-circle-check ')
});