function calculadora(num1,num2,operador){
    switch(operador){
        case '-':
            return num1 - num2
        case '+':
            return num1 + num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Não dá para calcular!'
    }
}
console.log(calculadora(1,1,'+'));