var archivo = document.getElementById('archivo');
archivo.onchange = (ev) => {
    var file = ev.target.files[0];
    var extenciones_p = ['png','jpg','jpg','jpeg'];
    var tamano_m = function(mega){
        return Math.pow(2,20) * mega;
    }
    var extencion = file.type.split('/').pop();
    if (extenciones_p.indexOf(extencion) != -1) {
        if (file.size <= tamano_m(1)){
            subirImg(file);
        }else{
            console.log("El archivo es muy grande solo se admiten archivos maximo de 1mb");
            archivo.value = "";
        }
    }else{
        console.log("no se encontro la extencion, extenciones validas: " + extenciones_p.toString());
        archivo.value = "";
    }
}
function subirImg(file){
    var file_r = new FileReader();
    var progress = document.getElementById('progreso');
    var preview = document.getElementById('muestra');
    var etiqueta = document.getElementById('etiqueta');

    file_r.onloadstart = (ev) => {
        console.log("comenzando");
        console.log("se cargo: "+ev.loaded);
    }
    file_r.onloadend = (ev) => {
        console.log("termino");
        console.log("se cargo: "+ev.loaded);
    }
    file_r.onprogress = (ev) => {
        progress.value = (ev.loaded * 100) / ev.total;
        etiqueta.innerHTML = Math.round(progress.value) + "%";
        // total =>  100%
        // loaded => ?
    }
    file_r.onload = (ev) => {
        preview.src = file_r.result;
    }
    file_r.readAsDataURL(file);
}
var formulario = document.getElementById('frm_datos');
formulario.addEventListener('submit',(ev) => {
    ev.preventDefault();
    if(archivo.files.length == 0 || document.getElementById('nombre').value == ""){
        console.log("Verifica que ninguno de los campos este vacio");
        return
    }
    var dataform = new FormData(formulario);
    dataform.append('imagen',archivo.files[0]);
    var xhr = new XMLHttpRequest();
    xhr.open('POST','server.php');
    xhr.onload = () => {
        if (xhr.status === 200) {
            console.log("se enviaron dtos");
        }else{
            console.log("Ocurrio un error al enviar los datos" + xhr.status);
        }
    }
    xhr.send(dataform);
})
