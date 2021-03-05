const assert = require('chai').assert;
const lista = require('../src/fizzbuzz')

describe ('listagem', () => {
    it ('testa se lista numeros', () => {
        assert.equal(lista().length, 50, 'deve retornar um array de 50 numeros' )
    })
})

describe ('divisao por 3', () =>{
    it ('testa se é fizz', () =>{
        const resultado = lista();

        assert.equal(resultado[2], 'Fizz', 'Divisivel por 3 vira fizz')
        assert.equal(resultado[0], 1, 'não Divisivel por 3 não muda')
    })
})

describe ('divisao por 5', () =>{
    it ('testa o buzz', () => {
        const resultado = lista();

        assert.equal(resultado[4], 'Buzz', 'Divisivel por 5 vira buzz')
        assert.equal(resultado[3], 4, 'outros numeros não mudam')
    })
})

describe ('funcao divisivel por 3 esta restrita', () =>{
    it ('testa funcao divisao por 3', () => {
        try {
            div3()
        } catch (error) {
            assert.equal(error.message, 'div3 is not defined', 'função está restrita')
        }
    })
})

