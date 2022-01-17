import { tempo, horas, minutos, segundos } from '../index';

describe('Função tempo()', () => {
    test('Uso trivial', () => {
        expect(tempo()).toBeTruthy();
    });
});

describe('Função horas()', () => {
    test('Uso trivial', () => {
        expect(horas()).toBeTruthy();
    });
});

describe('Função minutos()', () => {
    test('Uso trivial', () => {
        expect(minutos()).toBeTruthy();
    });
});

describe('Função segundos()', () => {
    test('Uso trivial', () => {
        expect(segundos()).toBeTruthy();
    });
});
