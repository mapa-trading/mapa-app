export interface IUser {
    id: string,
    nome: string,
    email: string,
    receberNotificacoesEmail: boolean,
    receberNotificacoesWhatsapp: boolean,
    receberNotificacoesDispositivo: boolean
}

export class MUser implements IUser {
    id!: string;
    nome!: string;
    email!: string;
    receberNotificacoesEmail!: boolean;
    receberNotificacoesWhatsapp!: boolean;
    receberNotificacoesDispositivo!: boolean;

    constructor(){}
}