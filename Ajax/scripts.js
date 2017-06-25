var xhr = new XMLHttpRequest();
var data = document.getElementById('frm_usuario');

data.addEventListener('submit',(ev) => {
    var form = new FormData(data);
    xhr.open('POST','servidor.php');
    xhr.onload = () => {
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.responseText));
        }else{
            console.log("error en la peticion: "+xhr.status);
        }
    }
    xhr.send(form);
    ev.preventDefault();
});
