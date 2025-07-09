import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from "dayjs/plugin/customParseFormat";
import weekYear from "dayjs/plugin/weekYear";
import weekOfYear from "dayjs/plugin/weekOfYear";

import { TempoErroEmTempoDeExecucao } from './excecoes';
import { ObjetoData } from './objeto-data';

dayjs.extend(customParseFormat);
dayjs.extend(weekYear);
dayjs.extend(weekOfYear);

/**
 * Retorna uma data completa.
 */
export function agora(): ObjetoData {
  return new ObjetoData(dayjs.default());
}

/**
 * Retorna uma data completa.
 */
export function tempo(): ObjetoData {
  return new ObjetoData(dayjs.default());
}

/**
 * Retorna os milissegundos atuais do sistema.
 */
export function milissegundos(): number {
  return dayjs.default().millisecond();
}

/**
 * Retorna os segundos atuais do sistema.
 */
export function segundos(): number {
  return dayjs.default().second();
}

/**
 * Retorna os minutos atuais do sistema.
 */
export function minutos(): number {
  return dayjs.default().minute();
}

/**
 * Retorna a hora atual do sistema.
 */
export function horas(): number {
  return dayjs.default().hour();
}

/**
 * Retorna o valor do Carimbo de Tempo Unix (Unix Timestamp).
 * É o valor em segundos desde dia 1º de janeiro de 1970
 * @returns Um valor inteiro com o número de segundos desde 01/01/1970 até hoje.
 * @see https://www.unixtimestamp.com/
 */
export function carimboDeTempoUnix(): number {
  return dayjs.default().unix();
}

/**
 * Retorna um objeto de data inicializado com um Carimbo de Tempo Unix.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {number} carimboDeTempoUnix O Carimbo de Tempo Unix.
 * @returns {ObjetoData} A data como um objeto ObjetoData.
 */
export function carimboDeTempoUnixParaData(_: any, carimboDeTempoUnix: number): ObjetoData {
  return new ObjetoData(dayjs.unix(carimboDeTempoUnix));
}

/**
 * Retorna o dia da semana atual.
 * @returns 
 */
export function diaDaSemana(): number {
  return dayjs.default().day();
}

export function semanaDoAno(): number {
  return dayjs.default().weekYear();
}

/**
 * Retorna uma instância de Date do JavaScript da data passada por parâmetro.
 * @param {any} _ O visitante da instrução, normalmente um interpretador.
 * @param {string} dataIso8601ComoTexto A data no formato ISO 8601 a ser convertida como texto.
 * @returns {ObjetoData} A data como um objeto ObjetoData.
 */
export function textoIso8601ParaData(_: any, dataIso8601ComoTexto: string): ObjetoData {
  if (!dataIso8601ComoTexto) {
    throw new TempoErroEmTempoDeExecucao(
      null, // TODO: this.simbolo,
      "Parâmetro de data inválido (vazio ou nulo)."
    );
  }

  const data = dayjs.default(dataIso8601ComoTexto);
  return new ObjetoData(data);
}

export function textoParaData(_: any, dataComoTexto: string, formato: string = "DD/MM/YYYY"): ObjetoData {
  const formatoResolvido = formato.replace("AAAA", "YYYY").replace("AA", "YY");

  if (!dataComoTexto) {
    throw new TempoErroEmTempoDeExecucao(
      null, // TODO: this.simbolo,
      "Parâmetro de data inválido (vazio ou nulo)."
    );
  }

  const data = dayjs.default(dataComoTexto, formatoResolvido);
  return new ObjetoData(data);
}