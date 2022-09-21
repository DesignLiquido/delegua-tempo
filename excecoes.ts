export class TempoErroEmTempoDeExecucao extends Error {
  simbolo: any;
  mensagem: string;

  constructor(simbolo?: any, mensagem?: string) {
    super(mensagem);
    this.simbolo = simbolo;
    this.mensagem = mensagem;
    Object.setPrototypeOf(this, TempoErroEmTempoDeExecucao.prototype);
  }
}
