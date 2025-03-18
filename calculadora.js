function calcular(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            if (b !== 0) {
                return a / b;
            }
            else {
                throw new Error('Divisão por zero não é permitida.');
            }
        default:
            throw new Error('Operação inválida.');
    }
}
console.log(calcular('soma', 5, 3));
console.log(calcular('divisao', 10, 2));
