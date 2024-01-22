import repository from "../database/prisma.connection";
import { ResponseDTO, SeguirDTO } from "../dtos";


export class SeguidoresService {

    public async listarSeguidores(idSeguidor: string): Promise<ResponseDTO> {

        const dados = await repository.seguidor.findMany({ where: { idSeguidor: idSeguidor } })
        // está variável vai trazer todos os seguidores que o 'idSeguidor' segue
        // where é o parâmetro utilizado para buscar na lista de seguidores do banco de dados


        return {
            ok: true,
            code: 200, 
            mensagem: "Listagem de seguidores concluída",
            dados: dados
        }
    }

    public async seguir(dados: SeguirDTO): Promise<ResponseDTO> {
        
    }
    
}