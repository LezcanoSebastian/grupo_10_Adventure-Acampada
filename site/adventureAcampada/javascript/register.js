window.addEventListener("load", function(){
let formularioUser = document.querySelector("form.reservation");
formularioUser.addEventListener('submit', function(e){
    e.preventDefault();
    let campoFirstname = document.querySelector("imput.firstName");
    if (campoFirstname.value == ""){
        alert("El campo nombre es obligatorio")
    }else if(campoFirstname.value.length < 2){
        alert("El campo nombre debe contar con al menos dos caracteres ")
    }
    let campolastname = document.querySelector("imput.lastName");
    if (campolastname.value == ""){
        alert("El campo Apellido es obligatorio")
    }else if(campolastname.value.length < 2){
        alert("El campo nombre debe contar con al menos dos caracteres ")
    }
    let campoEmail = document.querySelector("imput.email");
   /*  if (campoFirstname.value == ""){
        alert("El campo nombre tiene que estar completo")
    }else if(campoFirstname.value.length < 2){
        alert("El campo nombre debe contar con al menos dos caracteres " )
    }*/
})
})