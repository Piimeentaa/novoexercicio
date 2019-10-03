function fibonacci(number) {
	let sequencia = [1, 1];
	for (let i = 2; i < number; i++) {
        sequencia[i] = sequencia[i-1]+ sequencia[i-2];
    }
    return sequencia
    
}
console.log(fibonacci(50));
