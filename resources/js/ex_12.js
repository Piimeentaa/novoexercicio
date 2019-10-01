function calculaBaskara(a,b,c){
    let delta = (b**2) - (4*a*c);
    
    if(delta < 0){ 
        return 'A equação não tem raízes'
    }else if(delta === 0){
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        return 'A equação tem uma raiz'         
    }else if(delta > 0){
        let x1 = (-b + Math.sqrt(delta)) / (2*a);
        let x2 = (-b - Math.sqrt(delta)) / (2*a);
        return 'A equação tem duas raízes'    
    }   
}
console.log(calculaBaskara(2,3,-5));    
    