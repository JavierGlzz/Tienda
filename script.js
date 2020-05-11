var carro = []
//Animacion///////////////////////////////////////////////
window.onload = function animacion(){
    let traerCargando= document.getElementById('cargar');
    traerCargando.style.visibility = 'hidden';
    traerCargando.style.opacity= '0';
}
//pedirApi//////////////////////////////////////////////
    async function makeRequestProductos(){
      let response = await fetch('http://demo6292426.mockable.io/products');
      let dataProducto = await response.json();
      console.log(dataProducto);
      return dataProducto;
    } 
///////////////////////////////////////////////////////
  setTimeout(() => {
    mostrarProducto()
  }, 1);

    function mostrarProducto(dataProducto) {
      makeRequestProductos().then(dataProducto => {
        Object.values(dataProducto).forEach(
        key => {
          const parrafoDato = document.createTextNode(key.name + '  ' + key.price + '  ' + key.category + ' ' + key.guid);
          const parrafo = document.createElement('div')
          const botonCompra = document.createElement('button')
          botonCompra.id = 'idBoton'
          botonCompra.textContent = ' + '
          parrafo.className = 'caja'
          parrafo.id = 'pcaja'
          parrafo.appendChild(parrafoDato)
          parrafo.appendChild(botonCompra)
          mostrarProductos.appendChild(parrafo)
          botonCompra.addEventListener('click', añadirCarro)
          botonCompra.setAttribute('marcadorId', key.guid + ' ' + key.price)
        })
      })
    }

    function filtarDatosMujer(dataProducto){
      const jaja = document.getElementById("checkbox1")
      document.getElementById('mostrarProductos').innerHTML= jaja
      makeRequestProductos().then(dataProducto => {
        Object.values(dataProducto).forEach(
          key => {
            const parrafoFiltrarMujer = document.createTextNode(key.name + ' ' + key.price + ' ' + key.category)
            const botonCompra = document.createElement('button')
            botonCompra.id = 'idBoton'
            botonCompra.textContent = ' + '
            if(key.category === 'mujer'){
              const parrafo = document.createElement('div')
              parrafo.appendChild(parrafoFiltrarMujer)
              parrafo.appendChild(botonCompra)
              mostrarProductos.appendChild(parrafo)
              botonCompra.addEventListener('click', añadirCarro)
              botonCompra.setAttribute('marcadorId', key.guid + ' ' + key.price)
            }
          }
        )
      })
    }

    function filtarDatosHombre(dataProducto){
      const jaja = document.getElementById("checkbox2")
      document.getElementById('mostrarProductos').innerHTML= jaja
      makeRequestProductos().then(dataProducto => {
        Object.values(dataProducto).forEach(
          key => {
            const parrafoFiltrarHom = document.createTextNode(key.name + ' ' + key.price + ' ' + key.category)
            const botonCompra = document.createElement('button')
            botonCompra.id = 'idBoton'
            botonCompra.textContent = ' + '
            if(key.category === 'hombre'){
              const parrafo = document.createElement('div')
              parrafo.appendChild(parrafoFiltrarHom)
              parrafo.appendChild(botonCompra)
              mostrarProductos.appendChild(parrafo)
              botonCompra.addEventListener('click', añadirCarro)
              botonCompra.setAttribute('marcadorId', key.guid + ' ' + key.price)
            }
          }
        )
      })
    }

    function filtarDatosJoven(dataProducto){
      const jaja = document.getElementById("checkbox3")
      document.getElementById('mostrarProductos').innerHTML = jaja
      makeRequestProductos().then(dataProducto => {
        Object.values(dataProducto).forEach(
          key => {
            const parrafoFiltrarHom = document.createTextNode(key.name + ' ' + key.price + ' ' + key.category)
            const botonCompra = document.createElement('button')
            botonCompra.id = 'idBoton'
            botonCompra.textContent = ' + '
            if(key.category === 'joven'){
              const parrafo = document.createElement('div')
              parrafo.appendChild(parrafoFiltrarHom)
              parrafo.appendChild(botonCompra)
              mostrarProductos.appendChild(parrafo)
              botonCompra.addEventListener('click', añadirCarro)
              botonCompra.setAttribute('marcadorId', key.guid + ' ' + key.price)
            }
          }
        )
      })
    }
    
    function añadirCarro(){
      carro.push(this.getAttribute('marcadorId'))
      pintarProduc(carro)
    }
  console.log(carro);
  function pintarProduc(carro){
      let pintar = document.getElementById('pintarProductos')
      let pintarBoton = document.createElement('button')
      pintarBoton.id = 'menosBoton'
      pintarBoton.textContent = '-'
      pintar.innerHTML =' '
      Object.values(carro).forEach(
        key => {
          pintar.innerHTML += ` 
          <li>${key}</li>
          `}
      )}

  const checarHombres = document.getElementById('checkbox2')
  const checarMujeres = document.getElementById('checkbox1')
  const checarJovenes = document.getElementById('checkbox3')

  function filtrados(){
    if(checarHombres == 'false')
    elBody = document.getElementById('body')
  }
    
    
    
     
    
    
    