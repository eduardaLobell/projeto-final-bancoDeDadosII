import { Request, Response } from 'express';
import { UsuarioService } from '../services';

export class UsuarioController {
    public async criar (req: Request, res: Response) {
        const { nome, email, username, senha } = req.body
         
        try {
            const service = new UsuarioService()
            const response = await service.cadastrar({
                nome: nome,
                email: email,
                username: username,
                senha: senha
            })
            
            return res.status(response.code).json(response)


        } catch(error: any) {
            return res.status(500).json({
                code: 500,
                ok: false,
                mensagem: error.toString()
            })
        }        
    }

    public async login(req: Request, res: Response) {
		try {
			const { email, senha } = req.body;

			const service = new UsuarioService();

			const response = await service.login({ email, senha });

			return res.status(response.code).json(response);
		} catch (error: any) {
			return res.status(500).json({
				code: 500,
				ok: false,
				mensagem: error.toString(),
			});
		}
	}

}