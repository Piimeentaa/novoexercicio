function determine(letra){
    switch(letra){
        case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
            return 'É uma vogal.'
        default :
         return 'É uma consoante.'
    }
}
console.log(determine('b'));