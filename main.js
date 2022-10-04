
//Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)



//Muestra el usuario que has guardado en el DOM

localStorage.clear()

const inputFirstName = document.getElementById('firstName')
const email = document.getElementById('email')
const message = document.getElementById('message')

const botonFinal = document.getElementById("botonfinal")

function onSubmit(e) {
    e.preventDefault()

    let object = {
        name: inputFirstName.value,
        email: email.value,
        message: message.value, 
    }
    localStorage.setItem("user", JSON.stringify(object));
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)

    let parrafodani = document.createElement("p");
    parrafodani.textContent = "Hola buenos dias, soy: " + user.name  + " y mi e-mail es " + user.email + " Aqui les dejo mi mensaje" + user.message;
    document.body.appendChild(parrafodani);
}

    botonFinal.addEventListener("click", onSubmit)

    
    
    