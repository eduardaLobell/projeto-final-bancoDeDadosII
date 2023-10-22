import { TipoTweetDTO } from "../dtos"


export class Tweet {
    constructor(
        private _id: string,
        private _conteudo: string,
        private _tipo: TipoTweetDTO,
        private _idUsuario: string // dono do tweet/retweet
    ) {}

    public get id(): string {
        return this._id
    }

    public get conteudo(): string {
        return this._conteudo
    }

    public get tipo(): TipoTweetDTO {
        return this._tipo
    }

    public get idUsuario(): string {
        return this._idUsuario
    }

    public toJSON() {
        return {
            id: this._id,
            conteudo: this._conteudo,
            tipo: this._tipo,
            idUsuario: this._idUsuario
        }
    }
    
}