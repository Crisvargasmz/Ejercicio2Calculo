import React, { useState } from 'react';
import { calcularSumaParImpar } from '../components/calculoDiferencia';
import './pantallaCalculo.css';

const PantallaCalculo = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularResultado = () => {
        if (numero1 && numero2) {
            const respuesta = calcularSumaParImpar(numero1, numero2);
            setResultado(respuesta);
        }
    };

    return (
        <div className="container">
            <h1 className="titulo">Calculadora Par o Impar</h1>
            
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
                        La suma es: {resultado.suma}
                    </p>
                    <p className="texto-resultado">
                        El resultado es: {resultado.resultado}
                    </p>
                </div>
            )}
        </div>
    );
};

export default PantallaCalculo;
