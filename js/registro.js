// Creación de mini "base de datos" con LocalStorage

const  formRegistro = document.querySelector('#registroForm')
formRegistro.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const lastname = document.querySelector('#lastname').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const genero = document.querySelector('#genero').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const registroUser = Users.find(user => user.email === email)
    
    if(registroUser){
        return alert('Este usuario ya existe. Pruebe otro correo ;)')
    }

    Users.push({name: name, lastname:lastname, email: email, password: password, genero: genero})
    localStorage.setItem('users', JSON.stringify(Users))

    alert('Registro exitoso :)')

    // Redirección a la página de login

    window.location.href = 'login.html'

})