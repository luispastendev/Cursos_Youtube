function $(selector){
    return document.querySelector(selector);
}
function ajax(method,path,datos = '',callback,header){
    var xhr = new XMLHttpRequest();
    xhr.open(method,path);
    for(var i in header){
        xhr.setRequestHeader(i,header[i]);
    }
    xhr.onload = onload.bind(this,xhr,callback);
    if(!datos){
        xhr.send();
    }else{
        xhr.send(datos);
    }
}
function onload(xhr,callback){
    if(xhr.status == 200){
        callback(xhr.responseText);
    }else{
        console.log("EXITE UN ERROR "+xhr.status);
    }
}
// ajax('GET','server.php','',function(data){
//     $("#consola").innerHTML = data;
// })
$("#frm_datos").addEventListener('submit', function(ev){
    ev.preventDefault();
    // var formdata = new FormData(this);
    var data = "nombre=" + $('#nombre').value;

    ajax('POST','server.php',encodeURI(data),function(data){
        $("#consola").innerHTML = data;
    },{'Content-Type':'application/x-www-form-urlencoded'});
})
