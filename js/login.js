const formLogin = document.querySelector('#loginForm')
formLogin.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const valuoUsers = Users.find(user => user.email === email & user.password === password)
    if(!valuoUsers){
        return alert("Usuario y/o contraseña incorrectos :(")
    }
    alert("Datos correctos, ¡bienvenido!")
    localStorage.setItem('Acceso_user', JSON.stringify(valuoUsers))

    window.location.href = 'index.html'


})