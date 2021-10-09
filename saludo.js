let hora=245;
let saludo;
if (hora>=7 && hora<12){
    saludo='Buenos dias'
}
else if (hora>=12 && hora<19){
    saludo='Buenas tardes'
}
else if (hora >=19 && hora <=24){
    saludo='Buenas noches'
}
else if (hora=1 && hora<=6){
    saludo='Estoy durmiendo'
}
else{
    saludo='esa hora no existe'
}
console.log(saludo);