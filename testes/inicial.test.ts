import { agora, horas, minutos, segundos, tempo, textoIso8601ParaData, textoParaData } from '../index';
import { ObjetoData } from '../objeto-data';

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

describe('Função agora()', () => {
    test('Uso trivial', () => {
        expect(agora()).toBeTruthy();
    });
});

describe('Função tempo()', () => {
    test('Uso trivial', () => {
        expect(tempo()).toBeTruthy();
    });
});

describe('Função textoIso8601ParaData()', () => {
    test('Com horários em diferentes fusos', () => {
        const dataIso = textoIso8601ParaData(undefined, '2018-04-13 19:18:17.040+02:00');
        expect(dataIso).toBeTruthy();
        expect(dataIso).toBeInstanceOf(ObjetoData);
        expect(dataIso.ano).toBe(2018);
        expect(dataIso.mes).toBe(4);
        expect(dataIso.dia).toBe(13);
        expect(dataIso.emAngola).toBe("2018-04-13T18:18:17+01:00");
        expect(dataIso.emMocambique).toBe("2018-04-13T19:18:17+02:00");
        expect(dataIso.emMoçambique).toBe("2018-04-13T19:18:17+02:00");
        expect(dataIso.emPortugal).toBe("2018-04-13T18:18:17+01:00");
        expect(dataIso.emTimorLeste).toBe("2018-04-14T02:18:17+09:00");
        expect(dataIso.noBrasil).toBe("2018-04-13T14:18:17-03:00");
    });
});

describe('Função textoParaData()', () => {
    test('Uso trivial', () => {
        const dataIso = textoParaData(undefined, '26/05/2024');
        expect(dataIso).toBeTruthy();
        expect(dataIso).toBeInstanceOf(ObjetoData);
        expect(dataIso.ano).toBe(2024);
        expect(dataIso.mes).toBe(5);
        expect(dataIso.dia).toBe(26);
    });

    test('Com formato', () => {
        const dataIso = textoParaData(undefined, '26/05/2024', 'DD/MM/AAAA');
        expect(dataIso).toBeTruthy();
        expect(dataIso).toBeInstanceOf(ObjetoData);
        expect(dataIso.ano).toBe(2024);
        expect(dataIso.mes).toBe(5);
        expect(dataIso.dia).toBe(26);
    });

    test('Data vazia', () => {
        expect(() => textoParaData(undefined, '')).toThrow();
    });
});
