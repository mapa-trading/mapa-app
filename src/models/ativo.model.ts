

export interface IAtivo {
  id: string,
  nome: string,
  sigla: string,
  moeda: string,
  descricao: string,
  razaoSocial: string,
  website: string,
  tipoAtivo: string
  }

export class MAtivo implements IAtivo {
  id!: string;
  nome!: string;
  sigla!: string;
  moeda!: string;
  descricao!: string;
  razaoSocial!: string;
  website!: string;
  tipoAtivo!: string;

    constructor() {
    }
}