//*function fibonacci(number) {
	//let sequencia = [1, 1];
	//for (let i = 2; i < number; i++) {
        //sequencia[i] = sequencia[i-1]+ sequencia[i-2];
    //}
    //return sequencia
    
//}
//console.log(fibonacci(50));
function sequenciaFibonacci(n){
    if(n <= 0){
        return[];
    }else if(n === 2){
        return[0];
    }else{
        let fibonacciseq = [0,1]
        let n1 = 0;
        let n2 = 1;

        for(let i = 2; i <= n; i++){
            let proximonumero = n1 + n2;
            n1 = n2
            n2 = proximonumero
            fibonacciseq.push(proximonumero);
        }
        return fibonacciseq;
        }      
}
console.log(sequenciaFibonacci(5));
