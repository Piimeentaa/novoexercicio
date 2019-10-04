function listaRandom(num){
    let arr = [];
    for(let i = 0; i < num; i++){
       let valor =  Math.floor((Math.random() *100) + 1)
       arr.push(valor);   
        
    }
    return arr;
}
console.log(listaRandom(8));