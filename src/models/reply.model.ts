

export class Reply {
    constructor(
        private _id: string, // id do reply
        private _idUsuario: string, // dono do reply
        private _mensagem: string,
        private _idTweet: string // id do Tweet que deu reply
    ) {}

    public get id(): string {
        return this._id
    }
    public get idUsuario(): string {
        return this._idUsuario
    }
    public get mensagem(): string {
        return this._mensagem
    }
    public get idTweet(): string {
        return this._idTweet
    }

    public toJSON() {
        return {
            id: this._id,
            idUsuario: this._idUsuario,
            mensagem: this._mensagem,
            idTweet: this._idTweet
        }
    }
}