import repository from "../database/prisma.connection";
import { ResponseDTO } from "../dtos";
import { SeguirDTO } from "../dtos/seguir.dto";


export class SeguidoresService {
    public async seguir(dados: SeguirDTO): Promise<ResponseDTO> {
        const seguidoExiste = await repository.usuario.findUnique({
            where: { idSeguido: dados.idSeguido}
        })

        if(!seguidoExiste) {
            return {
                code: 400,
                ok: false,
                mensagem: 'ID de usuário inválido!'
            }
        }


        const seguidorDB = await repository.seguidor.

    }
}