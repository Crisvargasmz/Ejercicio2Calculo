import React, { useState } from 'react';
import { calcularDiferencia } from '../components/calculoDiferencia';
import './pantallaCalculo.css';

const PantallaCalculo = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [numero3, setNumero3] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularResultado = () => {
        if (numero1 && numero2 && numero3) {
            const respuesta = calcularDiferencia(numero1, numero2, numero3);
            setResultado(respuesta);
        }
    };

    return (
        <div className="container">
            <h1 className="titulo">Calculadora de Diferencia</h1>
            
            <div className="input-container">
                <input
                    className="input"
                    type="number"
                    placeholder="Ingrese el primer número"
                    value={numero1}
                    onChange={(e) => setNumero1(e.target.value)}
                />
                
                <input
                    className="input"
                    type="number"
                    placeholder="Ingrese el segundo número"
                    value={numero2}
                    onChange={(e) => setNumero2(e.target.value)}
                />

                <input
                    className="input"
                    type="number"
                    placeholder="Ingrese el tercer número"
                    value={numero3}
                    onChange={(e) => setNumero3(e.target.value)}
                />
            </div>

            <button 
                className="boton"
                onClick={calcularResultado}
            >
                Calcular
            </button>

            {resultado && (
                <div className="resultado-container">
                    <p className="texto-resultado">
                        Diferencia: {resultado.diferencia}
                    </p>
                    <p className="texto-resultado">
                        Tercer número: {resultado.tercerNumero}
                    </p>
                    <p className="texto-resultado">
                        {resultado.mensaje}
                    </p>
                </div>
            )}
        </div>
    );
};

export default PantallaCalculo;
