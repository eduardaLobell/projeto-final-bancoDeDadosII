import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

export class Auth {
	public async validar(req: Request, res: Response, next: NextFunction) {
		const token = req.headers.authorization;

		if (!token) {
			return res.status(401).json({
				code: 401,
				ok: false,
				mensagem: 'Autorização falhou.',
			});
		}

		const decoded = token.split(" ")[1]
		const verificacao = jwt.verify(decoded, process.env.SECRET_WORD || "")

		req.authUser = verificacao as {
			id: string;
			name: string;
			username: string;
			avatar: string;
			email: string
		}

		return next();
	}
}

// try {
// 	const authorization = req.headers.authorization

// 	if (!authorization) {
// 		return res.status(401).send({
// 			code: 401,
// 			message: "Autenticação do token falhou"
// 		})
// 	}

// 	const decoded = authorization.split(" ")[1]
// 	const verify = jwt.verify(decoded, process.env.SECRET_WORD || "")

// 	req.authUser = verify as {
// 		id: string;
// 		name: string;
// 		username: string;
// 		avatar: string;
// 		email: string
// 	}
// 	next()
// } catch (error: any) {
// 	return res.status(500).send({
// 		message: error.toString()
// 	})
// }
