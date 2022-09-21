
fetch('./json/platos.json')
    .then((response) => response.json())
    .then((platos) => {
        platos.forEach(plato => {
                divClima.innerHTML = 
                `
                <p class= "copy1">El plato ${plato.nombre}: </p>
                <p class= "temperatura">Temperatura: ${plato.ingredientes}°</p>
                <p class= "humedad">Humedad: ${plato.origen}%</p>
                <img src="../${plato.img} " alt="">
    
                <p class= "actualizacion"> Actualizado c/ 5 min. </p>
                `})
        })
