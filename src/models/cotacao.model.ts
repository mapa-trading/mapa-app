export interface ICotacao {
    dataHora: string,
    sigla: string,
    tipo: string,
    valor: number
}

export class MCotacao implements ICotacao {
    dataHora!: string;
    sigla!: string;
    tipo!: string;
    valor!: number;

    constructor(){}
}