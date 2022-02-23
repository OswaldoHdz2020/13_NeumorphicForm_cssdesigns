
const header = document.querySelector('.header');
const btn = document.querySelector('.btn');
const sign = document.querySelector('.sign');
const div = document.querySelector('.div');
const view = document.getElementById('view');
const view2 = document.getElementById('view2');

div.addEventListener('click', () =>{

    const html = document.querySelector('html');
    if(html.classList.contains('Up')){
        html.classList.remove('Up');
        view.style.display = 'none';
        view2.style.display = 'none';
        header.innerHTML = "Sign Up";
        btn.innerHTML = "Sign In";
        sign.innerHTML = "Sign Up";
    } else{
        html.classList.add('Up');
        view.style.display = 'block';
        view2.style.display = 'block';
        header.innerHTML = "Sign In";
        btn.innerHTML = "Sign Up";
        sign.innerHTML = "Sign In";
    }
});