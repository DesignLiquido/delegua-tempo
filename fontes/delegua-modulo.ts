import {
    agora,
    carimboDeTempoUnix,
    carimboDeTempoUnixMilissegundos,
    carimboDeTempoUnixParaData,
    diaDaSemana,
    dormir,
    horas,
    milissegundos,
    minutos,
    monotonicoMilissegundos,
    segundos,
    semanaDoAno,
    textoIso8601ParaData,
    textoParaData,
} from ".";

const definicaoAgoraOuTempo = {
    tipoRetorno: 'ObjetoData',
    funcao: agora,
    argumentos: []
}

export const DeleguaModuloTempo = {
    agora: definicaoAgoraOuTempo,
    tempo: definicaoAgoraOuTempo,
    milissegundos: {
        tipoRetorno: 'número',
        funcao: milissegundos,
        argumentos: []
    },
    segundos: {
        tipoRetorno: 'número',
        funcao: segundos,
        argumentos: []
    },
    minutos: {
        tipoRetorno: 'número',
        funcao: minutos,
        argumentos: []
    },
    horas: {
        tipoRetorno: 'número',
        funcao: horas,
        argumentos: []
    },
    carimboDeTempoUnix: {
        tipoRetorno: 'número',
        funcao: carimboDeTempoUnix,
        argumentos: []
    },
    carimboDeTempoUnixMilissegundos: {
        tipoRetorno: 'número',
        funcao: carimboDeTempoUnixMilissegundos,
        argumentos: []
    },
    monotonicoMilissegundos: {
        tipoRetorno: 'número',
        funcao: monotonicoMilissegundos,
        argumentos: []
    },
    dormir: {
        tipoRetorno: 'vazio',
        funcao: dormir,
        argumentos: [
            {
                nome: 'milissegundos',
                tipo: 'número'
            }
        ]
    },
    carimboDeTempoUnixParaData: {
        tipoRetorno: 'ObjetoData',
        funcao: carimboDeTempoUnixParaData,
        argumentos: [
            {
                nome: 'carimboDeTempoUnix',
                tipo: 'número'
            }
        ]
    },
    diaDaSemana: {
        tipoRetorno: 'número',
        funcao: diaDaSemana,
        argumentos: []
    },
    semanaDoAno: {
        tipoRetorno: 'número',
        funcao: semanaDoAno,
        argumentos: []
    },
    textoIso8601ParaData: {
        tipoRetorno: 'ObjetoData',
        funcao: textoIso8601ParaData,
        argumentos: [
            {
                nome: 'dataIso8601ComoTexto',
                tipo: 'texto'
            }
        ]
    },
    textoParaData: {
        tipoRetorno: 'ObjetoData',
        funcao: textoParaData,
        argumentos: [
            {
                nome: 'dataComoTexto',
                tipo: 'texto'
            },
            {
                nome: 'formato',
                tipo: 'texto'
            }
        ]
    },
}