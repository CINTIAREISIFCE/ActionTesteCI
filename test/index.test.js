import {soma, subtracao, multiplicacao, divisao } from "../index.js"
describe('Testes da Calculadora', () => {
    it('Deve retornar a soma de dois números', () => {
        const esperado = 12
        const retornado = soma(10,2)
        expect(retornado).toBe(esperado)
    })
    it('Deve retornar a subtração', () => {
        const esperado = 8
        const retornado = subtracao(10,2)
        expect(retornado).toBe(esperado)
    })
    it('Deve retornar a multiplicação', () => {
        const esperado = 20
        const retornado = multiplicacao(10,2)
        expect(retornado).toBe(esperado)
    })
    it('Deve retornar a divisao', () => {
        const esperado = 5
        const retornado = divisao(10,2)
        expect(retornado).toBe(esperado)
    })
})