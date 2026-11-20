import { carimboDeTempoUnix, carimboDeTempoUnixMilissegundos, dormir, monotonicoMilissegundos } from '../fontes';
import { DeleguaModuloTempo } from '../fontes/delegua-modulo';

describe('Função carimboDeTempoUnixMilissegundos()', () => {
    test('Coincide com carimboDeTempoUnix(), em milissegundos', () => {
        const milissegundos = carimboDeTempoUnixMilissegundos();
        expect(Number.isInteger(milissegundos)).toBe(true);
        expect(Math.abs(Math.floor(milissegundos / 1000) - carimboDeTempoUnix())).toBeLessThanOrEqual(1);
    });
});

describe('Função monotonicoMilissegundos()', () => {
    test('Devolve inteiros que nunca diminuem', () => {
        const primeira = monotonicoMilissegundos();
        const segunda = monotonicoMilissegundos();
        expect(Number.isInteger(primeira)).toBe(true);
        expect(segunda).toBeGreaterThanOrEqual(primeira);
    });
});

describe('Função dormir()', () => {
    test('Espera pelo menos o tempo pedido', async () => {
        const inicio = monotonicoMilissegundos();
        await dormir(null, 50);
        // Margem de 1 ms: o relógio é truncado para milissegundos inteiros.
        expect(monotonicoMilissegundos() - inicio).toBeGreaterThanOrEqual(49);
    });

    test('Zero, negativo ou nulo não esperam', async () => {
        const inicio = monotonicoMilissegundos();
        await dormir(null, 0);
        await dormir(null, -10);
        await dormir(null, null as any);
        expect(monotonicoMilissegundos() - inicio).toBeLessThan(20);
    });
});

describe('Manifesto do módulo', () => {
    test('Declara as novas funções com os tipos Delégua', () => {
        expect(DeleguaModuloTempo.carimboDeTempoUnixMilissegundos).toMatchObject({ tipoRetorno: 'número', argumentos: [] });
        expect(DeleguaModuloTempo.monotonicoMilissegundos).toMatchObject({ tipoRetorno: 'número', argumentos: [] });
        expect(DeleguaModuloTempo.dormir).toMatchObject({
            tipoRetorno: 'vazio',
            argumentos: [{ nome: 'milissegundos', tipo: 'número' }],
        });
    });
});
