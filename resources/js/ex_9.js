function calendario(meses){
    switch(meses){
        case '1':
            return  'Janeiro tem 31' 
        case '2' :
            return 'Fevereiro  tem 28'
        case '3':
            return  'Março tem 31' 
        case '4' :
            return 'Abril  tem 30'
        case '5':
            return  'Maio tem 31' 
        case '6' :
            return 'Junho  tem 30'
        case '7':
            return  'Julho tem 31' 
        case '8' :
            return 'Agosto  tem 31'
        case '9':
            return  'Setembro tem 30' 
        case '10' :
            return 'Outubro  tem 31'
        case '11':
            return  'Novembro tem 30' 
        case '12' :
            return 'Dezembro  tem 31'       
            
    }
}
console.log(calendario('8'));
