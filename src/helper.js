//Obtener diferencia de años
export function differenceYears(year){
    return new Date().getFullYear() - year
}

//Incremento segun la marca

export function calculateBrand(brand){
    let increase;
    switch(brand){
        case 'europeo':
            increase = 0.3
            break
        case 'americano':
            increase = 0.15
            break
        case 'asiatico':
            increase = 0.05;
            break
        default:
            break;
    }
    return increase
}

//Incremento segun plan

export function calculatePlan(plan){
    let increase
    plan ==='basic' ? increase =  0.2 : increase = 0.5;
    return increase
}


//Primer letra en Mayuscula

export function firstUppercase(text){
    //El método charAt () devuelve el carácter en el índice especificado en una cadena.
    return text.charAt(0).toUpperCase() + text.slice(1)
}