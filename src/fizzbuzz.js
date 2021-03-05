function lista (){
    const resultado = []
    for (let i = 1; i <= 50; i++){
        if (i % 3 === 0) {
            resultado.push('Fizz')
        } else if (i % 5 === 0){
            resultado.push('Buzz')
        } else {
            resultado.push(i)
        }
    }
    return resultado
}



function div3 (){

}

module.exports = lista
