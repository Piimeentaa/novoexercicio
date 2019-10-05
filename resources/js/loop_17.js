
for(let i = 0; i < 8; i++){
    let entrada = " ";

    for(h = 0; h < (8 - i); h++){
    entrada += "*";
    
    }
    console.log(entrada);
}
//for (let i = 0; i <= 5; i++){
 //   for(let y = 1; y = <= i; y++){
 //       
 //   }
//  console.log(i);
//}
//for(let i = 0; i < 8; i++){
 //   let entrada = " ";
//
//    for(h = 0; h < (8 - i); h++){
//    entrada += "*";
//    
//    }
//    console.log(entrada);
//}
function verificarPangrama(frase){
    let letra ='abcdefghijlmnopqrstuvxz';
    letra  = letra.split('');
    frase = frase.toLowerCase();
    
    for(let i = 0; i < letra.length ; i++){
        if(frase.indexOf(letra[i])< 0){
            return false;
        }   
    }
    return true;
} 
console.log(verificarPangrama('Blitz prende ex-vesgo com cheque fajuto.'));
