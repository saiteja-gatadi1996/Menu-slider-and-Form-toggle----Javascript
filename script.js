const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () =>
  document.body.classList.toggle('show-nav')
);

open.addEventListener('click', () => modal.classList.add('show-modal'));

close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', (e) =>
// console.log(e.target===modal) //true
  e.target == modal ? modal.classList.remove('show-modal') : false
);

