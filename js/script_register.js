
function validación(){
    nombre2=document.getElementById('nombre').value;
    largo_nombre=nombre2.length;
    email2=document.getElementById('email').value;
    largo_email=email2.length;
    contraseña2=document.getElementById('contraseña').value;
    largo_contraseña=contraseña2.length;
    //VALIDACIÓN LARGO NOMBRE
    if (largo_nombre<10){
        document.getElementById('nombre').className+="border border-danger";
        document.getElementById('error_nombre').style.display="block";
        nombre.focus();
        return false;
    } else{
        document.getElementById('nombre').className+="border border-success";
        document.getElementById('error_nombre').style.display="none";
        /*VALIDACIÓN LARGO MAIL */   
        if (largo_email < 9){
            document.getElementById('email').className+="border border-danger";
            document.getElementById('error_email').style.display="block";
            email.focus();
            return false;
        } else  {
            document.getElementById('email').className+="border border-success";
            document.getElementById('error_email').style.display="none";

            /*VALIDACIÓN LARGO CONTRASEÑA */   
            if (largo_contraseña < 8){
                document.getElementById('contraseña').className+="border border-danger";
                document.getElementById('error_contraseña').style.display="block";
                contraseña.focus();
                return false;
            } else {
                document.getElementById('contraseña').className+="border border-success";
                document.getElementById('error_contraseña').style.display="none";

                formulario=document.getElementById('formu');

                formulario.submit();
            }
        /* FIN VALIDACIÓN LARGO CONTRASEÑA*/   
        }
    }
    /* FIN VALIDACIÓN LARGO MAIL */   
}