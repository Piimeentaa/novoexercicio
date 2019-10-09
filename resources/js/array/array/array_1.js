//percorrer array e printar no console o valor

const array = [2,4,5,7];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }
// //exercicio 2
// for(let i = array.length - 1 ; i > -1; i--){
//     console.log(array[i]);
// }
// //Localizar índice de valor da array
for(let i = 0; i <= array.length; i++){
    if(array[i] === 5)
    console.log(i);
}

