function carrinhoDeCompras(codigoItem,quantidade){
  if(codigoItem == 100){
      console.log('Cachorro-Quente ' + ' R$ ' + quantidade * 1.70)
  } else if(codigoItem == 101){
      console.log('Bauru Simples '  + ' R$ ' + quantidade *  2.30 )
  }else if(codigoItem == 102){
    console.log('Bauru com ovo '  + ' R$ ' + quantidade *  2.60 )
  }else if(codigoItem == 103){
    console.log('Hamburguer '  + ' R$ ' + quantidade *  2.40 )
  }else if(codigoItem == 104){
    console.log('Cheeseburguer '  + ' R$ ' + quantidade *  2.50 )
  }else if(codigoItem == 105){
    console.log('Refrigerante '  + ' R$ ' + quantidade *  1.00 )
  }
}

carrinhoDeCompras(100,2);