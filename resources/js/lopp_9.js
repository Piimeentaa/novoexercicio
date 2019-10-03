let num = 71;
let contador = 0;

 for (let i = 1; i <= num; i++) {   
  if (num % i == 0) {
       contador++;
  }
 }
 if(contador == 2){
     console.log(num + ' é primo ')
     }else{
         console.log('Não é primo');
     }
 