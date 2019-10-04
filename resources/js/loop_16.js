function sorteio(escolha){
    let cara = 0;
    let coroa = 0;
    for(let i = 0; i < escolha; i++){
        let sorteado = Math.floor((Math.random() * 2));
        if(sorteado === 0){
            cara++
           
        }else{ coroa++    
        }
    }
    return ' Você sorteou cara: ' + cara + ' vezes e sorteou coroa: ' + coroa + ' vezes'
}
console.log(sorteio(10));