import { horas, minutos, segundos, tempo, textoParaData } from '../index';

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

describe('Função tempo()', () => {
    test('Uso trivial', () => {
        expect(tempo()).toBeTruthy();
    });
});

describe('Função textoParaData()', () => {
    test('Uso trivial', () => {
        const dataIso = textoParaData(undefined, '26/05/2024');
        expect(dataIso).toBeTruthy();
        expect(dataIso).toBeInstanceOf(Date);
    });

    test('Data vazia', () => {
        expect(() => textoParaData(undefined, '')).toThrowError();
    });
});