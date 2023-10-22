
export class Like {
    constructor (
        private _id: string, 
        private _username: string,
        private _idTweet: string
    ) {}

    get id(): string {
        return this._id
    }
    get username(): string {
        return this._username
    }
    get idTweet(): string {
        return this._idTweet
    }
    
}