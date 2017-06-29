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

document.addEventListener('DOMContentLoaded',function(){
    ajax('GET','server.php?controller=inicio','',function(datos){
        var json = JSON.parse(datos);
        var template = ``;
        for(var i of json){
            template += `<option value="${i.id}">${i.nombre}</option>`;
        }
        $('#cursos').innerHTML = template;
    });
})
