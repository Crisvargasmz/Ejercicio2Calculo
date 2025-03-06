// Función para determinar si la suma es par o impar
export const calcularSumaParImpar = (numero1, numero2) => {
    // Convertir los inputs a números y realizar la suma
    const suma = Number(numero1) + Number(numero2);
    
    // Determinar si la suma es par o impar usando el operador módulo
    const esParOImpar = suma % 2 === 0 ? "par" : "impar";
    
    return {
        suma: suma,
        resultado: esParOImpar
    };
};
