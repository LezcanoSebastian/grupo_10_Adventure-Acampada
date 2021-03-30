
qs = function(elemento){
    return document.querySelector(elemento)
}
/* Nombre */
window.addEventListener("load", () => {
    let $inputFirstName = qs('#firstName'),
    $firstNameErrors = qs('#firstNameErrors'),
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
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
    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/
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
$pass2 = qs('#password2'),
$pass2Errors = qs('#pass2Errors'),
$pass2.addEventListener('blur', function(){
    switch (true) {
        case !$pass2.value.trim():
            $pass2Errors.innerHTML = 'Debes reingresar la contraseña';
            $pass2.classList.add('is-invalid')
            break;
        case $pass2.value != $pass.value:
            pass2Errors.innerHTML = 'Las contraseñas no coinciden';
            $pass2.classList.add('is-invalid')
            break;
        default:
            $pass2.classList.remove('is-invalid');
            $pass2.classList.add('is-valid');
            $pass2Errors.innerHTML = ''
            break;
    }
})
})

/* Imagenes */
window.addEventListener("load", () => {
    $file = qs('#formFile'),
    $fileErrors = qs('#fileErrors'),
    $imgPreview = qs('#img-preview')
$file.addEventListener('change', 
function fileValidation(){
    let filePath = $file.value, //Capturo el valor del input
        allowefExtensions = /(.jpg|.jpeg|.png|.gif|.web)$/i //Extensiones permitidas
    if(!allowefExtensions.exec(filePath)){ //El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null.
        $fileErrors.innerHTML = 'Carga un archivo de imagen válido, con las extensiones (.jpg - .jpeg - .png - .gif)';
        $file.value = '';
        $imgPreview.innerHTML = '';
        return false;
    }else{
        // Image preview
        console.log($file.files);
        if($file.files && $file.files[0]){
            let reader = new FileReader();
            reader.onload = function(e){
                $imgPreview.innerHTML = '<img src="' + e.target.result +'"/>';
            };
            reader.readAsDataURL($file.files[0]);
            $fileErrors.innerHTML = '';
            $file.classList.remove('is-invalid')
        }
    }
})
})