import React from 'react'
import './Administrador.css'

const Administrador = () => {


    return (
        <div className="App">
            <h1>Reportar problema</h1>
            <form >
                <textarea
                    className="textAreaResponderPregunta"
                    placeholder="PRUEBA DESDE LA APP"
                />
                <div>
                    <button type="submit" className="submitButton">
                        Enviar reporte
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Administrador
