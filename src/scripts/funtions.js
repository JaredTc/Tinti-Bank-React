function mostrarTarjeta() {

    var tarjetaInicio = document.getElementById('tarjeta-de-inicio')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')

    tarjetaInicio.classList.add('d-none')
    tarjetaSaldo.classList.remove('d-none')
}

const AbrirCuenta = (event) =>{
    event.preventDefault()

    var inputEmail = document.getElementById('sald')
    var total = inputEmail.value
    localStorage.setItem('saldo',total)

    var mostrarSaldo = document.getElementById('totalmoney')
    mostrarSaldo.innerHTML = total

    mostrarTarjeta()
}

const Consignar = (event) => {

}
const Retirar = (event) => {

}
const cerrarSesion = (event) => {

}