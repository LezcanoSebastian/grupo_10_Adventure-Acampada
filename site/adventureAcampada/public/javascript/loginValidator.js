qs = function(elemento){
    return document.querySelector(elemento)
}

/* email */
window.addEventListener("load", () => {
    let $email = qs('#email'),
    $emailErrors = qs('#emailErrors'),
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

$email.addEventListener('blur', function() {

    switch (true) {
        case !$email.value.trim():
            $emailErrors.innerHTML = 'El campo email es obligatorio';
            $email.classList.add('is-invalid')
            break;
        case !regExEmail.test($email.value):
            $emailErrors.innerHTML = 'Debe ingresar un email válido';
            $email.classList.add('is-invalid')
            break
        default:
            $email.classList.remove('is-invalid');
            $email.classList.add('is-valid');
            $emailErrors.innerHTML = ''
            break;
    }
})
})

/* password */
window.addEventListener("load", () => {
    $pass = qs('#password'),
    $passErrors = qs('#passErrors'),
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    
$pass.addEventListener('blur', function() {
    switch (true) {
        case !$pass.value.trim():
            $passErrors.innerHTML = 'El campo contraseña es obligatorio';
            $pass.classList.add('is-invalid')
            break;
        case !regExPass.test($pass.value):
            $passErrors.innerHTML = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
            $pass.classList.add('is-invalid')
            break
        default:
            $pass.classList.remove('is-invalid');
            $pass.classList.add('is-valid');
            $passErrors.innerHTML = ''
            break;
    }
})
})
window.addEventListener("load", () => {
    let  $errorForm = qs("#errorBoton"),
    $form = qs("#form")
    $form.addEventListener("submit", function(event){
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = this.elements
    
        for (let index = 0; index < 2; index++) {
          if (elementosForm[index].value == "") {
            elementosForm[index].classList.add("is-invalid")
            $errorForm.innerHTML = "Completa los campos para ingresar";
            $errorForm.classList.add("errorFormulario")
            error = true;
          }
        }
    
        if (!error) {
          $form.submit()
        }
      })
})