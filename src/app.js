const menu_btn = document.getElementById('menu_btn')
const mobile_menu = document.getElementById('mobile_menu')
const menu_bars = document.getElementById('menu_bars')
const menu_close = document.getElementById('menu_close')
const copyAddress = document.querySelector('.copyAddress')
const copyButton = document.querySelector('.copyButton')
const popUp = document.querySelector('.popUp')

menu_btn.addEventListener('click', () => {
  mobile_menu.classList.toggle('hidden')
  menu_bars.classList.toggle('hidden')
  menu_close.classList.toggle('hidden')
})

copyButton.addEventListener('click',() => {
  copyAddress.select();
  copyAddress.setSelectionRange(0, 99999); //for mobile phone
  navigator.clipboard.writeText(copyAddress.value);
  popUp.innerHTML = `Address is copied!`    
  setTimeout(() => {
  popUp.innerHTML = ''    
  }, 2000)
});
