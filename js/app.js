document.querySelector('#generar-nombre').addEventListener('submit',cargarNombres);

function cargarNombres(e){
    e.preventDefault();
    
    //Read variables
    const pais = document.querySelector('#origen');
    const paisSeleccionado = pais.options[pais.selectedIndex].value;
    
    const genero = document.querySelector('#genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidadNombres = document.querySelector('#numero').value;

    let url = '';
    url += 'https://uinames.com/api/?';

    if (paisSeleccionado !== ''){
        url += `region=${paisSeleccionado}&`
    }

    if (generoSeleccionado !== ''){
        url += `gender=${generoSeleccionado}&`
    }

    if (cantidadNombres !== ''){
        url += `amount=${cantidadNombres}&`
    }

    const xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);
    xhr.onload = function(){
        if (this.status === 200){
            const nombres = JSON.parse(this.responseText);

            let htmlNombres = `<h2>Nombres Generados </h2>`;
            htmlNombres += `<ul class="lista">`;
            nombres.forEach(function(nombre){
                htmlNombres += `<li>${nombre.name}</li>`;
            });
            htmlNombres += `</ul>`;

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    xhr.send();
    
    
}