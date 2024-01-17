
export class Seguidor {
    constructor (
        private _id: string,
        private _idUsuario: string, // seguido
        private _idSeguidor: string // segue
    ) {}

    get id(): string {
        return this._id
    }

    get idUsuario(): string {
        return this._idUsuario
    }

    get idSeguidor(): string {
        return this._idSeguidor
    }

    public toJSON() {
        return {
            id: this._id,
            idUsuario: this._idUsuario,
            idSeguidor: this._idSeguidor
        }
    }
    
}