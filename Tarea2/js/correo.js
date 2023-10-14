function EnviarCorreo(){
 let parametros = {
    correo_id: document.getElementById('correo_id').value,
 }
 emailjs.send("service_wh6co78", "template_fyu4plb", parametros).then( function(){
   swal.fire({
      title: "¡Suscrito!",
      html: "Pronto te enviaremos un descuento promocional",
      icon: "success",
      confirmButtonColor: "#2ecc71",
      confirmButtonText: "Continuar",
  });
 })
};

