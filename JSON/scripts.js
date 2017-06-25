var xhr = new XMLHttpRequest();
xhr.open('GET','servidor.php');
xhr.onload = function(){
    if(xhr.status === 200){
        var json = JSON.parse(xhr.responseText);
        var template = ``;
        json.map(function(data){
            template += `
                <h2>${data.id}</h2>
                <strong>${data.nombre}</strong>
                <p>${data.edad}</p>
                <p>${data.sexo}</p><br>
            `;
            return template;
        });
        document.getElementById('lista').innerHTML = template;
    }else{
        console.log("EXITE UN ERROR DE TIPO: "+xhr.status);
    }
}
xhr.send();
