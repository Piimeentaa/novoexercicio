function validarTriangulo(um,dois,tres){
    if(um + dois + tres === 180){
    return 'É um triângulo válido'
}else{
    return 'Não é um triângulo válido'
}
}
console.log(validarTriangulo(60,60,40));