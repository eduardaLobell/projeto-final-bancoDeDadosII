export class Usuario {
    constructor (
        private _id: string,
        private _nome: string,
        private _email: string,
        private _username: string,
        private _senha: string
    ) {}

    public get id(): string{
        return this._id
    }
    public get nome(): string{
        return this._nome
    }
    public get email(): string{
        return this._email
    }
    public get username(): string{
        return this._username
    }

    public get senha(): string {
        return this._senha
    }

    public toJSON() {
        return {
            id: this._id,
            nome: this._nome,
            email: this._email,
            username: this._username,
        }
    }
}