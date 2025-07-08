import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from "dayjs/plugin/customParseFormat";

import { TempoErroEmTempoDeExecucao } from './excecoes';
import { ObjetoData } from './objeto-data';

dayjs.extend(customParseFormat);

/**
 * Retorna uma data completa
 */
export function agora(): dayjs.Dayjs {
  return dayjs.default();
}

/**
 * Retorna uma data completa
 */
export function tempo(): dayjs.Dayjs {
  return dayjs.default();
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
 * Retorna a hora atual do sistema
 */
export function horas(): number {
  return dayjs.default().hour();
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