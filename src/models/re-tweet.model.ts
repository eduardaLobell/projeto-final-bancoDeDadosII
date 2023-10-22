
export class ReTweet {
    constructor (
        private _idTweet: string, // tweet que foi retuitado
        private _idReTweet: string
    ) {}

    get idTweet(): string {
        return this._idTweet
    }

    get idReTweet(): string {
        return this._idReTweet
    }

    public toJSON() {
        return {
            idTweet: this._idTweet,
            idReTweet: this._idReTweet
        }
    }
}