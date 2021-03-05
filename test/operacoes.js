const assert = require('chai').assert;
const {soma, subtracao, divisao, multiplicacao} = require('../src/operacoes')

describe('Testes com operações', () => {
    it('Soma', () => {
        assert.equal(soma(1, 1), 2, '1 + 1 deve ser 2');
        assert.notEqual(soma(1, 1), 3, '1 + 1 não deve ser 3');
    })

    it('Subtracao', () => {
        assert.equal(subtracao(1, 1), 0, '1 - 1 deve ser 0');
    })
    
    it('Multiplicacao', () => {
        assert.equal(multiplicacao(2, 2), 4, '2 * 2 deve ser 4');
    })

    describe('Testes com Divisão', () => {
        it('Divisao', () => {
            assert.equal(divisao(2, 2), 1, '2 / 2 deve ser 1');
        })
        it('Divisao por zero', () => {
            assert.equal(divisao(2, 0), 'invalido', 'Não pode dividir por zero');
        })
    })
})
