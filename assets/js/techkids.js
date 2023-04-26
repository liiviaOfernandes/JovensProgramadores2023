let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');

window.addEventListener('scroll'), () =>{
    let value = window.scrollY;

    text.style.marginTop =value * 2.5 + 'px';
    leaf.style.top =value * -1.5 + 'px';
    leaf.style.left =value * 1.5 + 'px';
    hill1.style.top =value * 1 + 'px';
}