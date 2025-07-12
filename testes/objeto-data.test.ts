import { expectTypeOf } from 'expect-type';

import { textoIso8601ParaData, textoParaData } from "..";
import { ObjetoData } from "../objeto-data";

describe('ObjetoData', () => {
    describe('Testes de data sem horas', () => {
        const objetoReferencia: ObjetoData = textoParaData(undefined, '26/05/2024');

        it('dia', () => {
            expect(objetoReferencia.dia).toBe(26);
        });

        it('mes', () => {
            expect(objetoReferencia.mes).toBe(5);
        });

        it('ano', () => {
            expect(objetoReferencia.ano).toBe(2024);
        });

        it('diasNoMes', () => {
            expect(objetoReferencia.diasNoMes).toBe(31);
        });

        it('diaDaSemana', () => {
            expect(objetoReferencia.diaDaSemana).toBe(0);
        });

        it('semanaDoAno', () => {
            expect(objetoReferencia.semanaDoAno).toBe(22);
        });

        it('carimboDeTempoUnix', () => {
            expect(objetoReferencia.carimboDeTempoUnix).toBe(1716706800);
        });

        describe('Métodos de exibição', () => {
            it('paraTexto', () => {
                const testeParaTexto = objetoReferencia.paraTexto();
                expectTypeOf(testeParaTexto).toBeString();
                expect(testeParaTexto).toBe('<objeto-data dia=26 mês=5 ano=2024 hora=0 minuto=0 segundo=0>');
            });

            it('porExtenso', () => {
                const testePorExtenso = objetoReferencia.porExtenso();
                expectTypeOf(testePorExtenso).toBeString();
                expect(testePorExtenso).toBe('domingo, 26 de maio de 2024 às 00:00');
            });
        });

        describe("Fusos horários", () => {
            it("Em Angola", () => {
                expect(objetoReferencia.emAngola).toBe("2024-05-26T08:00:00+01:00");
            });

            it("Em Moçambique", () => {
                expect(objetoReferencia.emMoçambique).toBe("2024-05-26T09:00:00+02:00");
                expect(objetoReferencia.emMocambique).toBe("2024-05-26T09:00:00+02:00");
            });

            it("Em Portugal", () => {
                expect(objetoReferencia.emPortugal).toBe("2024-05-26T08:00:00+01:00");
            });

            it("Em Timor Leste", () => {
                expect(objetoReferencia.emTimorLeste).toBe("2024-05-26T16:00:00+09:00");
            });

            it("No Brasil", () => {
                expect(objetoReferencia.noBrasil).toBe("2024-05-26T04:00:00-03:00");
            });
        });

        describe('Operações de datas', () => {
            it("Adição de dias", () => {
                const tresDiasApos = objetoReferencia.adicionarDias(3);
                expect(tresDiasApos.dia).toBe(29);
                expect(tresDiasApos.mes).toBe(5);
                expect(tresDiasApos.ano).toBe(2024);
            });

            it("Adição de semanas", () => {
                const tresSemanasApos = objetoReferencia.adicionarSemanas(3);
                expect(tresSemanasApos.dia).toBe(16);
                expect(tresSemanasApos.mes).toBe(6);
                expect(tresSemanasApos.ano).toBe(2024);
            });

            it("Adição de meses", () => {
                const doisMesesApos = objetoReferencia.adicionarMeses(2);
                expect(doisMesesApos.dia).toBe(26);
                expect(doisMesesApos.mes).toBe(7);
                expect(doisMesesApos.ano).toBe(2024);
            });

            it("Adição de trimestres", () => {
                const umTrimestreApos = objetoReferencia.adicionarTrimestres(1);
                expect(umTrimestreApos.dia).toBe(26);
                expect(umTrimestreApos.mes).toBe(8);
                expect(umTrimestreApos.ano).toBe(2024);
            });

            it("Adição de anos", () => {
                const umAnoApos = objetoReferencia.adicionarAnos(1);
                expect(umAnoApos.dia).toBe(26);
                expect(umAnoApos.mes).toBe(5);
                expect(umAnoApos.ano).toBe(2025);
            });

            it("Subtração de dias", () => {
                const tresDiasApos = objetoReferencia.subtrairDias(3);
                expect(tresDiasApos.dia).toBe(23);
                expect(tresDiasApos.mes).toBe(5);
                expect(tresDiasApos.ano).toBe(2024);
            });

            it("Subtração de semanas", () => {
                const tresSemanasApos = objetoReferencia.subtrairSemanas(3);
                expect(tresSemanasApos.dia).toBe(5);
                expect(tresSemanasApos.mes).toBe(5);
                expect(tresSemanasApos.ano).toBe(2024);
            });

            it("Subtração de meses", () => {
                const doisMesesApos = objetoReferencia.subtrairMeses(2);
                expect(doisMesesApos.dia).toBe(26);
                expect(doisMesesApos.mes).toBe(3);
                expect(doisMesesApos.ano).toBe(2024);
            });

            it("Subtração de trimestres", () => {
                const umTrimestreApos = objetoReferencia.subtrairTrimestres(1);
                expect(umTrimestreApos.dia).toBe(26);
                expect(umTrimestreApos.mes).toBe(2);
                expect(umTrimestreApos.ano).toBe(2024);
            });

            it("Subtração de anos", () => {
                const umAnoApos = objetoReferencia.subtrairAnos(1);
                expect(umAnoApos.dia).toBe(26);
                expect(umAnoApos.mes).toBe(5);
                expect(umAnoApos.ano).toBe(2023);
            });
        });
    });
    
    describe('Testes de data com horas', () => {
        const objetoReferencia: ObjetoData = textoIso8601ParaData(undefined, '2024-05-26T19:18:17.040-03:00');

        it('hora', () => {
            expect(objetoReferencia.hora).toBe(15);
        });

        it('minuto', () => {
            expect(objetoReferencia.minuto).toBe(18);
        });

        it('segundo', () => {
            expect(objetoReferencia.segundo).toBe(17);
        });

        it('milissegundo', () => {
            expect(objetoReferencia.milissegundo).toBe(40);
        });

        describe('Operações de horas', () => {
            it("Adição de horas", () => {
                const quatroHorasApos = objetoReferencia.adicionarHoras(4);
                expect(quatroHorasApos.hora).toBe(19);
                expect(quatroHorasApos.minuto).toBe(18);
                expect(quatroHorasApos.segundo).toBe(17);
                expect(quatroHorasApos.milissegundo).toBe(40);
            });

            it("Adição de minutos", () => {
                const dezMinutosApos = objetoReferencia.adicionarMinutos(10);
                expect(dezMinutosApos.hora).toBe(15);
                expect(dezMinutosApos.minuto).toBe(28);
                expect(dezMinutosApos.segundo).toBe(17);
                expect(dezMinutosApos.milissegundo).toBe(40);
            });

            it("Adição de segundos", () => {
                const vinteSegundosApos = objetoReferencia.adicionarSegundos(20);
                expect(vinteSegundosApos.hora).toBe(15);
                expect(vinteSegundosApos.minuto).toBe(18);
                expect(vinteSegundosApos.segundo).toBe(37);
                expect(vinteSegundosApos.milissegundo).toBe(40);
            });

            it("Adição de milissegundos", () => {
                const duzentosMilissegundosApos = objetoReferencia.adicionarMilissegundos(200);
                expect(duzentosMilissegundosApos.hora).toBe(15);
                expect(duzentosMilissegundosApos.minuto).toBe(18);
                expect(duzentosMilissegundosApos.segundo).toBe(17);
                expect(duzentosMilissegundosApos.milissegundo).toBe(240);
            });

            it("Subtração de horas", () => {
                const quatroHorasApos = objetoReferencia.subtrairHoras(4);
                expect(quatroHorasApos.hora).toBe(11);
                expect(quatroHorasApos.minuto).toBe(18);
                expect(quatroHorasApos.segundo).toBe(17);
                expect(quatroHorasApos.milissegundo).toBe(40);
            });

            it("Subtração de minutos", () => {
                const dezMinutosApos = objetoReferencia.subtrairMinutos(10);
                expect(dezMinutosApos.hora).toBe(15);
                expect(dezMinutosApos.minuto).toBe(8);
                expect(dezMinutosApos.segundo).toBe(17);
                expect(dezMinutosApos.milissegundo).toBe(40);
            });

            it("Subtração de segundos", () => {
                const vinteSegundosApos = objetoReferencia.subtrairSegundos(20);
                expect(vinteSegundosApos.hora).toBe(15);
                expect(vinteSegundosApos.minuto).toBe(17);
                expect(vinteSegundosApos.segundo).toBe(57);
                expect(vinteSegundosApos.milissegundo).toBe(40);
            });

            it("Subtração de milissegundos", () => {
                const duzentosMilissegundosApos = objetoReferencia.subtrairMilissegundos(200);
                expect(duzentosMilissegundosApos.hora).toBe(15);
                expect(duzentosMilissegundosApos.minuto).toBe(18);
                expect(duzentosMilissegundosApos.segundo).toBe(16);
                expect(duzentosMilissegundosApos.milissegundo).toBe(840);
            });
        });
    });
});