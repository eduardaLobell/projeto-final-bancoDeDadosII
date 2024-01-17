import jwt from "jsonwebtoken";

export class JWTAdapter {
  constructor(private _secret: string, private _expireIn: string) {}

  public gerarToken(dado: any): string {
    const token = jwt.sign(dado, this._secret, { expiresIn: this._expireIn });
    return token;
  }

  public decodeToken(token: string): any {
    const dado = jwt.verify(token, this._secret);

    if (!dado) return undefined;

    return dado;
  }
}
