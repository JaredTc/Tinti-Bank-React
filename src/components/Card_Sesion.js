import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import cancel from '../assets/tacho-de-reciclaje.png'
import acept from '../assets/checked.png'
import coin from '../assets/dollar.png'
import retiro from '../assets/retirada.png'
import close from '../assets/cerrar-sesion.png'
import setting from '../assets/settings.png'
import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'


export const CardSesion = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        focus: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus: e.target.name
        })
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
        limpiarFormulario()
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

        var inputSaldo = document.getElementById('sald')
        var inoutConsigna = document.getElementById('cantidad')
        var inputRetiro = document.getElementById('retiro')
        inputRetiro.value = ""
        inputSaldo.value = ""
        inoutConsigna.value = ""
    }

    return (
        <div className="container">
            <div id="tarjeta-de-inicio" className="card shadow mx-auto custom-card">
                <div className="card-body d-flex flex-column align-items-center">
                    <Cards
                        number={state.number}
                        name={state.name}
                        focused={state.focus}
                    />
                    <h2 className="text-center mb-5 txt">¡Bienvenido!</h2>

                    <form onSubmit={AbrirCuenta}>
                        <div className="row mb-3">
                            <div className="col-12 col-md-4">
                                <label htmlFor="number" className="form-label">Numero de tarjeta </label>
                            </div>
                            <div className="col-12 col-md-8">
                                <input type="text" name="number" id="number" maxLength="16" className="form-control" onChange={handleInputChange} onFocus={handleFocusChange}
                                    required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12 col-md-4">
                                <label htmlFor="name" classBane="form-label">Nombre </label>
                            </div>
                            <div className="col-12 col-md-8">
                                <input type="text" name="name" id="saldo" maxLength="30" className="form-control" onChange={handleInputChange} onFocus={handleFocusChange}
                                    required />
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

            <div id="tarjeta-saldo" className="card shadow mx-auto  custom d-none">
                <div className="card-body  d-flex flex-column align-items-center">
                    <h2 className="text-1">Balance</h2>
                    <h3 className="text"> $ <span id="totalmoney">----</span> COP</h3>
                    <div className="dashboard">

                        <div onClick={Consignar} className="consigna">
                            <img src={coin} className="img" width="50" />
                            <h3>Consignar</h3>
                        </div>
                        <div onClick={Retirar} className="retirar">
                            <img src={retiro} className="img" width="50" />
                            <h3>Retirar</h3>
                        </div>
                    </div>
                    <div className="dash">

                        <div className="consigna">
                            <img src={setting} className="img" width="50" />
                            <h3>Herramientas</h3>
                        </div>
                        <div onClick={cerrarSesion} className="retirar">
                            <img src={close} className="img" width="50" />
                            <h3>Cerrar Sesion</h3>
                        </div>
                    </div>
                </div>

            </div>
            <div id="tarjeta-consignar" className="card shadow mx-auto custom-card d-none">
                <div className="card-body ccard d-flex flex-column align-items-center">

                    <h2>Consignacion</h2>
                    <img src={coin} width="70" />
                    <label for="">Ingrese la cantidad a consignar</label>
                    <div>
                        <input type="number" id="cantidad" className="form-control" required />
                    </div>
                    <div className="dashboard">
                        <div onClick={cancelar} className="cancel">
                            <img src={cancel} className="img" width="50" />
                            <h3 className="titles">Cancelar</h3>
                        </div>
                        <div onClick={Aceptarconsigna} className="aceptar">
                            <img src={acept} className="img" width="50" />
                            <h3 className="titles">Aceptar</h3>

                        </div>
                    </div>

                </div>

            </div>
            <div id="tarjeta-Retiro" className="card shadow mx-auto custom-card d-none">
                <div className="card-body d-flex flex-column align-items-center">

                    <h2>Retiro</h2>
                    <img src={retiro} width="70" />
                    <label for="">Ingrese la cantidad a Retirar</label>
                    <div>
                        <input type="number" id="retiro" className="form-control" required />
                    </div>
                    <div className="dashboard">
                        <div onClick={cancelar} className="cancel">
                            <img src={cancel} className="img" width="50" />
                            <h3 className="titles">Cancelar</h3>
                        </div>
                        <div onClick={AceptarRetiro} className="aceptar">
                            <img src={acept} className="img" width="50" />
                            <h3 className="titles">Aceptar</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
