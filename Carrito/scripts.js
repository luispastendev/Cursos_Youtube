(function(){
    function $(selector){
        return document.querySelector(selector);
    }
    function Carrito(){
        this.catalogo = [{id:'P01',nombre:'Lapiz',precio:5,imagen:'lapiz.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P02',nombre:'Colores',precio:50,imagen:'colores.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P03',nombre:'Libreta',precio:30,imagen:'libreta.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P04',nombre:'Mochila',precio:500,imagen:'mochila.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P06',nombre:'Pluma',precio:7.50,imagen:'pluma.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P07',nombre:'Plumon',precio:20,imagen:'plumon.jpg',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
                        {id:'P08',nombre:'Regla',precio:10,imagen:'regla.png',descripcion:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}];
        this.constructor = function(){
            if(!localStorage.getItem("carrito")){
                localStorage.setItem('carrito','[]');
            }
        }
        this.getCarrito = JSON.parse(localStorage.getItem("carrito"));
    }
    function Carrito_View(){
        this.renderCatalogo = function(){
            var template = ``;
            for (var i in carrito.catalogo) {
                template += `
                <div class="column is-one-quarter">
                <div class="card">
                    <div class="card-image">
                        <img src="./img/${carrito.catalogo[i].imagen}" alt="Placeholder">
                    </div>
                    <div class="card-content">
                        <h2 class="title is-3">${carrito.catalogo[i].nombre}</h2>
                        <p>${carrito.catalogo[i].descripcion}</p>
                        <br>
                        <h3 class="subtitle is-4">Precio: <strong>$${carrito.catalogo[i].precio}</strong></h3>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-footer-item" id="${carrito.catalogo[i].id}">Agregar al Carrito</a>
                    </div>
                    </div>
                </div>
                `;
            }
            $("#catalogo").innerHTML = template;
        }
        this.showModal = function(){
            $("#modal").classList.toggle('is-active');
        }
        this.hideModal = function(ev){
            if (ev.target.classList.contains("toggle")) {
                this.showModal();
            }
        }
    }

    var carrito = new Carrito();
    var carrito_view = new Carrito_View();

    document.addEventListener('DOMContentLoaded',function(){
        carrito_view.renderCatalogo();
        carrito.constructor();
    });
    $("#btn_carrito").addEventListener("click",function(){
        carrito_view.showModal();
    });
    $("#modal").addEventListener("click",function(ev){
        carrito_view.hideModal(ev);
    })

})();
