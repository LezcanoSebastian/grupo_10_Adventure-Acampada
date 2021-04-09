
qs = function(elemento){
    return document.querySelector(elemento)
}
/* Nombre */
window.addEventListener("load", () => {
    let $inputFirstName = qs('#firstName'),
    $firstNameErrors = qs('#firstNameErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExmin = /^.{2,100}$/;


    $inputFirstName.addEventListener('blur', function(){
        console.log($inputFirstName.value.trim())
        switch (true) {
            case !$inputFirstName.value.trim():
                $firstNameErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputFirstName.classList.add('is-invalid')
                break;
                case !regExmin.test($inputFirstName.value):
                $firstNameErrors.innerHTML = 'El campo nombre debe tener como minimo dos caracteres';
                $inputFirstName.classList.add('is-invalid')
                break
            case !regExAlpha.test($inputFirstName.value):
                $firstNameErrors.innerHTML = 'Debes ingresar un nombre válido'
                $inputFirstName.classList.add('is-invalid')  
                break; 
            default:
                $inputFirstName.classList.remove('is-invalid');
                $inputFirstName.classList.add('is-valid');
                $firstNameErrors.innerHTML = ''
                break;
        }
    })
})

/* Apellido */
window.addEventListener("load", () => {
    let $inputLastName = qs('#lastName'),
    $lastNameErrors = qs('#lastNameErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
    regExmin = /^.{2,100}$/;


    $inputLastName.addEventListener('blur', function(){
        console.log($inputLastName.value.trim())
        switch (true) {
            case !$inputLastName.value.trim():
                $lastNameErrors.innerHTML = 'El campo apellido es obligatorio'
                $inputLastName.classList.add('is-invalid')
                break;         
            case !regExAlpha.test($inputLastName.value):
                $lastNameErrors.innerHTML = 'Debes ingresar un apellido válido'
                $inputLastName.classList.add('is-invalid')  
                break; 
            case !regExmin.test($inputLastName.value):
                $lastNameErrors.innerHTML = 'El campo apellido debe tener como minimo dos caracteres';
                $inputLastName.classList.add('is-invalid')
                break
            default:
                $inputLastName.classList.remove('is-invalid');
                $inputLastName.classList.add('is-valid');
                $lastNameErrors.innerHTML = ''
                break;
        }
    })
})





/* Imagenes */
window.addEventListener("load", () => {
    let  $errorForm = qs("#errorBoton"),
    $form = qs("#form")
    $form.addEventListener("submit", function(event){
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = this.elements
    
        for (let index = 0; index < 3; index++) {
          if (elementosForm[index].value == "") {
            elementosForm[index].classList.add("invalido")
            $errorForm.innerHTML = "Los campos señalados son obligatorios";
            $errorForm.classList.add("errorFormulario")
            error = true;
          }
        }
    
        if (!error) {
          $form.submit()
        }
      })
})