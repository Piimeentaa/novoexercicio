function classificaAngulo(valor){
  if( valor > 0 && valor < 90)
  {
    return ('Ângulo agudo');
    
  } else if( valor === 90 )
  {
    return ('Ângulo reto');
  }
  else if( valor > 90 && valor < 180 )
  {
    return ('Ângulo obtuso');
    
  }
  else if( valor === 0 || valor === 180 )
  {
    return ('Ângulo raso');
  } 
  else if( valor > 180 && valor < 360)
  {
    return ('Ângulo Côncavo');
  } 
  else if ( valor === 360)
  {
    return ('Ângulo completo');
  } 
  else 
  { 
    return ('Não sabe escrever, vagabundo');
  } 
}

console.log(classificaAngulo(45));