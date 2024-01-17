import { Request, Response } from "express"


export class SeguidoresController {
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