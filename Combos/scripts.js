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
        $('#cursos').innerHTML += template;
    });
});
$("#cursos").addEventListener('change',function(ev){
    var url = 'id='+ev.target.value;
    $("#detalles").innerHTML = ""
    ajax('POST','server.php?controller=getTemas',encodeURI(url),function(data){
        var json = JSON.parse(data);
        var template = ``;
        for(var i in json){
            template += `<li><a href="#" id="${i}">${json[i].tema}</a><span class="tag is-warning">Duración: ${json[i].duracion}</span></li>`;
        }
        $("#temas").innerHTML = template;
    },{'Content-Type':'application/x-www-form-urlencoded'})
})
$("#temas").addEventListener('click',function(ev){
    ev.preventDefault();
    var id_curso = $("#cursos").value;
    var id_tema = ev.target.id;
    var url = 'id_curso='+id_curso+'&id_tema='+id_tema;
    ajax('POST','server.php?controller=getDescripciones',encodeURI(url),function(data){
        var json = JSON.parse(data);
        $("#detalles").innerHTML = json.descripcion
    },{'Content-Type':'application/x-www-form-urlencoded'})
})
