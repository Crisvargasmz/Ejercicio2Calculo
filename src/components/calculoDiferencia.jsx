// Función para calcular si la diferencia es mayor que un tercer número
export const calcularDiferencia = (numero1, numero2, numero3) => {
    // Convertir los inputs a números
    const num1 = Number(numero1);
    const num2 = Number(numero2);
    const num3 = Number(numero3);
    
    // Calcular la diferencia absoluta entre los dos primeros números
    const diferencia = Math.abs(num1 - num2);
    
    // Determinar si la diferencia es mayor que el tercer número
    const esMayor = diferencia > num3;
    
    return {
        diferencia: diferencia,
        tercerNumero: num3,
        esMayor: esMayor,
        mensaje: esMayor 
            ? `La diferencia (${diferencia}) es mayor que ${num3}`
            : `La diferencia (${diferencia}) no es mayor que ${num3}`
    };
}; 