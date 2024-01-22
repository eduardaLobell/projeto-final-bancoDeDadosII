import { Request, Response } from "express"
import { SeguidoresService } from "../services/seguidores.service"


export class SeguidoresController {

    public async listar(req: Request, res: Response) {
        const { idSeguidor } = req.body
        const service = new SeguidoresService()
        const resultado = await service.listarSeguidores(idSeguidor)

        return res.status(resultado.code).send(resultado)
    }

    public async seguir (req: Request, res: Response ) {
        const { idUsuario } = req.body

        try {

        } catch(error: any) {
            return res.status(500).json({
                code: 500,
                ok: false,
                mensagem: error.toString()
            })
        }
    } 

    public async desseguir (req: Request, res: Response) {
        const { idUsuario } = req.body

        try {

        } catch(error: any) {
            return res.status(500).json({
                code: 500,
                ok: false,
                mensagem: error.toString()
            })
        }
    } 
}