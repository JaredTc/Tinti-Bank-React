import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'


export const CardSesion = () => {
    return (
        <div className="container">
            <div id="tarjeta-de-inicio" className="card shadow mx-auto custom-card">
                <div className="card-body d-flex flex-column align-items-center">
                    <h2 className="text-center mb-5">¡Bienvenido!</h2>
                    <form onSubmit={AbrirCuenta}>
                        <div className="row mb-3">
                            <div className="col-12 col-md-4">
                                <label for="nomb" classBane="form-label">Nombre <FontAwesomeIcon icon={faUser} /></label>
                            </div>
                            <div className="col-12 col-md-8">
                                <input type="text" id="nomb" className="form-control" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12 col-md-4">
                                <label for="saldo" className="form-label">Saldo <FontAwesomeIcon icon={faMoneyBill} /></label>
                            </div>
                            <div className="col-12 col-md-8">
                                <input type="number" id="sald" className="form-control" required />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark">Abrir Cuenta</button>
                        </div>
                    </form>
                </div>

            </div>

            <div id="tarjeta-saldo" className="card shadow mx-auto custom-card d-none">
                <div className="card-body d-flex flex-column align-items-center">
                    <h2>Saldo</h2>
                    <h3> $ <span id="totalmoney">----</span> COP</h3>
                    <div className="botonn">
                        <button onClick={Consignar} type="button" className="btn btn-success">Consignar</button>
                        <button onClick={Retirar} type="button" className="btn btn-danger">Retirar</button>
                    </div>
                    <button onClick={cerrarSesion} type="button" className="btn cerrar">Cerrar Cuenta</button>
                </div>
            </div>
            <div id="tarjeta-consignar" className="card shadow mx-auto custom-card d-none">
                <div className="card-body d-flex flex-column align-items-center">

                    <h2>Consignacion</h2>
                    <label for="">Ingrese la cantidad a consignar</label>
                    <div>
                        <input type="number" id="cantidad" className="form-control" required />
                    </div>
                    <div className="boton">
                        <button onClick={cancelar} type="button" className="btn btn-danger">Cancelar</button>
                        <button onClick={Aceptarconsigna} type="button" className="btn btn-success">Aceptar</button>
                    </div>
                </div>
            </div>
            <div id="tarjeta-Retiro" className="card shadow mx-auto custom-card d-none">
                <div className="card-body d-flex flex-column align-items-center">

                    <h2>Retiro</h2>
                    <label for="">Ingrese la cantidad a Retirar</label>
                    <div>
                        <input type="number" id="retiro" className="form-control" required />

                    </div>

                    <div class="boton">
                        <button onClick={cancelar} type="button" className="btn btn-danger">Cancelar</button>
                        <button onClick={AceptarRetiro} type="button" className="btn btn-success">Aceptar</button>

                    </div>

                </div>
            </div>

        </div>
    );
}

function mostrarTarjeta() {

    var tarjetaInicio = document.getElementById('tarjeta-de-inicio')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')

    tarjetaInicio.classList.add('d-none')
    tarjetaSaldo.classList.remove('d-none')
}

const AbrirCuenta = (event) => {
    event.preventDefault()

    var inputEmail = document.getElementById('sald')
    var total = inputEmail.value
    localStorage.setItem('saldo', total)

    var mostrarSaldo = document.getElementById('totalmoney')
    mostrarSaldo.innerHTML = total

    mostrarTarjeta()
}
const Consignar = (event) => {
    event.preventDefault()


    var tarjetaConsignacion = document.getElementById('tarjeta-consignar')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.add('d-none')
    tarjetaConsignacion.classList.remove('d-none')

}
const Retirar = (event) => {
    event.preventDefault()
    var tarjetaConsignacion = document.getElementById('tarjeta-Retiro')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.add('d-none')
    tarjetaConsignacion.classList.remove('d-none')

}
const cerrarSesion = (event) => {
    event.preventDefault()
    var tarjetaInicio = document.getElementById('tarjeta-de-inicio')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.add('d-none')
    tarjetaInicio.classList.remove('d-none')
    localStorage.removeItem('saldo')
}
const cancelar = (event) => {
    event.preventDefault()
    var tarjetaRetiro = document.getElementById('tarjeta-Retiro')
    var tarjetaConsignacion = document.getElementById('tarjeta-consignar')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.remove('d-none')
    tarjetaRetiro.classList.add('d-none')
    tarjetaConsignacion.classList.add('d-none')
}

const Aceptarconsigna = (event) => {
    var tarjetaConsigna = document.getElementById('tarjeta-consignar')
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.remove('d-none')
    tarjetaConsigna.classList.add('d-none')



    var valor = document.getElementById('cantidad')
    var sal = valor.value
    var sald = document.getElementById('sald')
    var val = sald.value
    var total = val - sal
    localStorage.setItem('saldo', total)
    var mostrarSaldo = document.getElementById('totalmoney')
    mostrarSaldo.innerHTML = total

    limpiarFormulario()

    if (total === 0) {
        alert('Su cuenta ha quedado en 0, no puede hacer mas movimientos')

    }

}
const AceptarRetiro = (event) => {
    var tarjetaSaldo = document.getElementById('tarjeta-saldo')
    tarjetaSaldo.classList.remove('d-none')
    var tarjetaRetiro = document.getElementById('tarjeta-Retiro')
    tarjetaRetiro.classList.add('d-none')

    var valor = document.getElementById('retiro')
    var sal = valor.value
    var sald = document.getElementById('sald')
    var val = sald.value
    var total = val - sal

    localStorage.setItem('saldo', total)
    var mostrarSaldo = document.getElementById('totalmoney')
    mostrarSaldo.innerHTML = total


    limpiarFormulario()

}

function limpiarFormulario() {
    var inputNombre = document.getElementById('nomb')
    var inputSaldo = document.getElementById('sald')
    var inoutConsigna = document.getElementById('cantidad')
    var inputRetiro = document.getElementById('retiro')
    inputRetiro.value = ""
    inputNombre.value = ""
    inputSaldo.value = ""
    inoutConsigna.value = ""
}
