import * as dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import { TempoErroEmTempoDeExecucao } from './excecoes';

dayjs.extend(customParseFormat);
dayjs.extend(utc)
dayjs.extend(timezone)

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
}