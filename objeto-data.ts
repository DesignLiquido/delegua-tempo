import * as dayjs from 'dayjs';
import 'dayjs/locale/pt';

import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import weekYear from "dayjs/plugin/weekYear";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(quarterOfYear);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekYear);
dayjs.extend(weekOfYear);

dayjs.locale('pt');

export class ObjetoData {
    constructor(private estruturaInterna: dayjs.Dayjs) {

    }

    get dia(): number {
        return this.estruturaInterna.date();
    }

    /**
     * Na Day.js, os meses são indexados por zero.
     */
    get mes(): number {
        return this.estruturaInterna.month() + 1;
    }

    get ano(): number {
        return this.estruturaInterna.year();
    }

    get diasNoMes(): number {
        return this.estruturaInterna.daysInMonth();
    }

    get hora(): number {
        return this.estruturaInterna.hour();
    }

    get minuto(): number {
        return this.estruturaInterna.minute();
    }

    get segundo(): number {
        return this.estruturaInterna.second();
    }

    get milissegundo(): number {
        return this.estruturaInterna.millisecond();
    }

    get diaDaSemana(): number {
        return this.estruturaInterna.day();
    }

    get semanaDoAno(): number {
        return this.estruturaInterna.week();
    }

    get carimboDeTempoUnix(): number {
        return this.estruturaInterna.unix();
    }

    get emAngola(): string {
        return this.estruturaInterna.utc().tz('Africa/Luanda').format();
    }

    get emMoçambique(): string {
        return this.estruturaInterna.utc().tz('Africa/Maputo').format();
    }

    get emMocambique(): string {
        return this.emMoçambique;
    }

    get emPortugal(): string {
        return this.estruturaInterna.utc().tz('Europe/Lisbon').format();
    }

    get emTimorLeste(): string {
        return this.estruturaInterna.utc().tz('Asia/Dili').format();
    }

    get noBrasil(): string {
        return this.estruturaInterna.utc().tz('Brazil/East').format();
    }

    adicionarDias(dias: number): ObjetoData {
        const novaData = this.estruturaInterna.add(dias, 'day');
        return new ObjetoData(novaData);
    }

    adicionarSemanas(semanas: number): ObjetoData {
        const novaData = this.estruturaInterna.add(semanas, 'week');
        return new ObjetoData(novaData);
    }

    adicionarMeses(meses: number): ObjetoData {
        const novaData = this.estruturaInterna.add(meses, 'month');
        return new ObjetoData(novaData);
    }

    adicionarTrimestres(trimestres: number): ObjetoData {
        const novaData = this.estruturaInterna.add(trimestres, 'quarter');
        return new ObjetoData(novaData);
    }

    adicionarAnos(anos: number): ObjetoData {
        const novaData = this.estruturaInterna.add(anos, 'year');
        return new ObjetoData(novaData);
    }

    adicionarHoras(horas: number): ObjetoData {
        const novaData = this.estruturaInterna.add(horas, 'hour');
        return new ObjetoData(novaData);
    }

    adicionarMinutos(minutos: number): ObjetoData {
        const novaData = this.estruturaInterna.add(minutos, 'minute');
        return new ObjetoData(novaData);
    }

    adicionarSegundos(segundos: number): ObjetoData {
        const novaData = this.estruturaInterna.add(segundos, 'second');
        return new ObjetoData(novaData);
    }

    adicionarMilissegundos(milissegundos: number): ObjetoData {
        const novaData = this.estruturaInterna.add(milissegundos, 'millisecond');
        return new ObjetoData(novaData);
    }

    subtrairDias(dias: number): ObjetoData {
        const novaData = this.estruturaInterna.subtract(dias, 'day');
        return new ObjetoData(novaData);
    }

    subtrairSemanas(semanas: number): ObjetoData {
        const novaData = this.estruturaInterna.subtract(semanas, 'week');
        return new ObjetoData(novaData);
    }

    subtrairMeses(meses: number): ObjetoData {
        const novaData = this.estruturaInterna.subtract(meses, 'month');
        return new ObjetoData(novaData);
    }

    subtrairTrimestres(trimestres: number): ObjetoData {
        const novaData = this.estruturaInterna.subtract(trimestres, 'quarter');
        return new ObjetoData(novaData);
    }

    subtrairAnos(anos: number): ObjetoData {
        const novaData = this.estruturaInterna.subtract(anos, 'year');
        return new ObjetoData(novaData);
    }

    subtrairHoras(horas: number): ObjetoData {
        const novaData = this.estruturaInterna.subtract(horas, 'hour');
        return new ObjetoData(novaData);
    }

    subtrairMinutos(minutos: number): ObjetoData {
        const novaData = this.estruturaInterna.subtract(minutos, 'minute');
        return new ObjetoData(novaData);
    }

    subtrairSegundos(segundos: number): ObjetoData {
        const novaData = this.estruturaInterna.subtract(segundos, 'second');
        return new ObjetoData(novaData);
    }

    subtrairMilissegundos(milissegundos: number): ObjetoData {
        const novaData = this.estruturaInterna.subtract(milissegundos, 'millisecond');
        return new ObjetoData(novaData);
    }

    paraTexto(): string {
        return this.toString();
    }

    porExtenso(): string {
        return this.estruturaInterna.format('LLLL');
    }

    toString(): string {
        return `<objeto-data dia=${this.dia} mês=${this.mes} ano=${this.ano} hora=${this.hora} minuto=${this.minuto} segundo=${this.segundo}>`;
    }
}