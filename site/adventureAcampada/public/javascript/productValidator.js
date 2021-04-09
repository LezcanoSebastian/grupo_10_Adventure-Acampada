let qs = function (elemento) {
    return document.querySelector(elemento)
}
/* Nombre del producto */
window.addEventListener("load", () => {
    let $inputName = qs('#name'),/* nombre del producto */
        $nameErrors = qs('#nameErrors'),
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
            default:
                $inputName.classList.remove('is-invalid');
                $inputName.classList.add('is-valid');
                $nameErrors.innerHTML = ''
                break;
        }
    })

})
/* Precio */
window.addEventListener("load", () => {
    let $inputPrice = qs('#price'),/* nombre del producto */
        $priceErrors = qs('#priceErrors')

    $inputPrice.addEventListener('blur', function () {
        console.log($inputPrice.value.trim())
        switch (true) {
            case !$inputPrice.value.trim():
                $priceErrors.innerHTML = 'El campo precio es obligatorio'
                $inputPrice.classList.add('is-invalid')
                break;
            default:
                $inputPrice.classList.remove('is-invalid');
                $inputPrice.classList.add('is-valid');
                $priceErrors.innerHTML = ''
                break;
        }
    })

})
/* Descuento */
window.addEventListener("load", () => {
    let $inputDiscount = qs('#discount'),/* nombre del producto */
        $discountErrors = qs('#discountErrors')

    $inputDiscount.addEventListener('blur', function () {
        console.log($inputDiscount.value.trim())
        switch (true) {
            case !$inputDiscount.value.trim():
                $discountErrors.innerHTML = 'El campo descuento es obligatorio'
                $inputDiscount.classList.add('is-invalid')
                break;
            default:
                $inputDiscount.classList.remove('is-invalid');
                $inputDiscount.classList.add('is-valid');
                $discountErrors.innerHTML = ''
                break;
        }
    })

})
/* Marca */
window.addEventListener("load", () => {
    let $inputMark = qs('#mark'),/* nombre del producto */
        $markErrors = qs('#markErrors')

    $inputMark.addEventListener('blur', function () {
        console.log($inputMark.value.trim())
        switch (true) {
            case !$inputMark.value.trim():
                $markErrors.innerHTML = 'El campo marca es obligatorio'
                $inputMark.classList.add('is-invalid')
                break;
            default:
                $inputMark.classList.remove('is-invalid');
                $inputMark.classList.add('is-valid');
                $markErrors.innerHTML = ''
                break;
        }
    })

})
/* Origen */
window.addEventListener("load", () => {
    let $inputOrigin = qs('#origin'),/* nombre del producto */
        $originErrors = qs('#originErrors')

    $inputOrigin.addEventListener('blur', function () {
        console.log($inputOrigin.value.trim())
        switch (true) {
            case !$inputOrigin.value.trim():
                $originErrors.innerHTML = 'El campo origen es obligatorio'
                $inputOrigin.classList.add('is-invalid')
                break;
            default:
                $inputOrigin.classList.remove('is-invalid');
                $inputOrigin.classList.add('is-valid');
                $originErrors.innerHTML = ''
                break;
        }
    })

})
/* Color */
window.addEventListener("load", () => {
    let $inputColor = qs('#color'),/* nombre del producto */
        $colorErrors = qs('#colorErrors')

    $inputColor.addEventListener('blur', function () {
        console.log($inputColor.value.trim())
        switch (true) {
            case !$inputColor.value.trim():
                $colorErrors.innerHTML = 'El campo color es obligatorio'
                $inputColor.classList.add('is-invalid')
                break;
            default:
                $inputColor.classList.remove('is-invalid');
                $inputColor.classList.add('is-valid');
                $colorErrors.innerHTML = ''
                break;
        }
    })

})
/* Talle */
window.addEventListener("load", () => {
    let $inputSize = qs('#size'),/* nombre del producto */
        $sizeErrors = qs('#sizeErrors')

    $inputSize.addEventListener('blur', function () {
        console.log($inputSize.value.trim())
        switch (true) {
            case !$inputSize.value.trim():
                $sizeErrors.innerHTML = 'El campo talle es obligatorio'
                $inputSize.classList.add('is-invalid')
                break;
            default:
                $inputSize.classList.remove('is-invalid');
                $inputSize.classList.add('is-valid');
                $sizeErrors.innerHTML = ''
                break;
        }
    })

})
/* Material */
window.addEventListener("load", () => {
    let $inputMaterial = qs('#material'),/* nombre del producto */
        $materialErrors = qs('#materialErrors')

    $inputMaterial.addEventListener('blur', function () {
        console.log($inputMaterial.value.trim())
        switch (true) {
            case !$inputMaterial.value.trim():
                $materialErrors.innerHTML = 'El campo material es obligatorio'
                $inputMaterial.classList.add('is-invalid')
                break;
            default:
                $inputMaterial.classList.remove('is-invalid');
                $inputMaterial.classList.add('is-valid');
                $materialErrors.innerHTML = ''
                break;
        }
    })

})


/* Descripcion */


window.addEventListener("load", () => {
    let $inputDescription = qs('#description'),/* nombre del producto */
        $descriptionErrors = qs('#descriptionErrors'),
        regExmin = /^.{20,100}$/

    $inputDescription.addEventListener('blur', function () {
        console.log($inputDescription.value.trim())
        switch (true) {
            case !$inputDescription.value.trim():
                $descriptionErrors.innerHTML = 'El campo descripción es obligatorio'
                $inputDescription.classList.add('is-invalid')
                break;
            case !regExmin.test($inputDescription.value):
                $descriptionErrors.innerHTML = 'El campo nombre debe tener como minimo veinte caracteres';
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
    }
})
})

/* Formulario */
window.addEventListener("load", () => {
    let  $errorForm = qs("#errorBoton"),
    $form = qs("#form"),
    $cancelar= qs("#cancelar")
    $form.addEventListener("submit", function(event){
        let error = false;
        event.preventDefault()
        console.log($form.elements)
        let elementosForm = this.elements
    
        for (let index = 0; index < 12; index++) {
          if (elementosForm[index].value == "") {
            elementosForm[index].classList.add("invalido")
            $errorForm.innerHTML = "Completa los campos para ingresar";
            $errorForm.classList.add("errorFormulario")
            error = true;
          }
        }
    
        if (!error)  {
          $form.submit()
        } else if($cancelar){
            error = false;
            
        }
      })
})