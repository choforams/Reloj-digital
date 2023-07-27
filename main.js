//funcion flecha

const getHora = () =>{
    // senten-instucciones
    const fecha = new Date(); //creacion objeto date
    // console.log(fecha.getHours())
    const tiempo = {hora: fecha.getHours(),
                    minuto:fecha.getMinutes(),
                    segundo: fecha.getSeconds()
                }
    document.querySelector(".reloj").innerHTML = `${tiempo.hora}:${tiempo.minuto}:${tiempo.segundo}`
}

setInterval(getHora,1000)