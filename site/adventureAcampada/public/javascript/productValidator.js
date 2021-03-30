let qs = function (elemento) {
    return document.querySelector(elemento)
}
/* Nombre del producto */
window.addEventListener("load", () => {
    let $inputName = qs('#name'),/* nombre del producto */
        $nameErrors = qs('#nameErrors'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExmin = /^.{5,100}$/

    $inputName.addEventListener('blur', function () {
        console.log($inputName.value.trim())
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputName.classList.add('is-invalid')
                break;
            case !regExmin.test($inputName.value):
                $nameErrors.innerHTML = 'El campo nombre debe tener como minimo cinco caracteres';
                $inputName.classList.add('is-invalid')
                break
            case !regExAlpha.test($inputName.value):
                $nameErrors.innerHTML = 'Debes ingresar un nombre válido'
                $inputName.classList.add('is-invalid')
                break;
            default:
                $inputName.classList.remove('is-invalid');
                $inputName.classList.add('is-valid');
                $nameErrors.innerHTML = ''
                break;
        }
    })

})


/* Descripcion */


window.addEventListener("load", () => {
    let $inputDescription = qs('#description'),/* nombre del producto */
        $descriptionErrors = qs('#descriptionErrors'),
        regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,
        regExmin = /^.{20,100}$/

    $inputDescription.addEventListener('blur', function () {
        console.log($inputDescription.value.trim())
        switch (true) {
            case !$inputDescription.value.trim():
                $descriptionErrors.innerHTML = 'El campo nombre es obligatorio'
                $inputDescription.classList.add('is-invalid')
                break;
            case !regExmin.test($inputDescription.value):
                $descriptionErrors.innerHTML = 'El campo nombre debe tener como minimo veinte caracteres';
                $inputDescription.classList.add('is-invalid')
                break
            case !regExAlpha.test($inputDescription.value):
                $descriptionErrors.innerHTML = 'Debes ingresar un nombre válido'
                $inputDescription.classList.add('is-invalid')
                break;
            default:
                $inputDescription.classList.remove('is-invalid');
                $inputDescription.classList.add('is-valid');
                $descriptionErrors.innerHTML = ''
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