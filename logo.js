const ElLogo = document.querySelector('#logo');

window.addEventListener('scroll',function(){
    ElLogo.classList.toggle('activo', window.scrollY>0)
})