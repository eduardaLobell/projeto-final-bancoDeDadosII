import { Tweet as TweetPrisma } from "@prisma/client";
import repository from "../database/prisma.connection";
import { CriarTweetDTO, ResponseDTO } from "../dtos";
import { Tweet } from "../models";

export class TweetService {
    public async criarTweet(dados: CriarTweetDTO): Promise<ResponseDTO> {
        const usuarioExiste = await repository.tweet.findUnique ({
            where: { idUsuario : dados.idUsuario }
        })

        if(!usuarioExiste) {
            return {
                code: 400,
                ok: false,
                mensagem: 'ID de usuário inválido!'
            }
        }


        const tweetDB = await repository.tweet.create ({
            data: {
                conteudo: dados.conteudo,
                tipo: dados.tipo,
                idUsuario: dados.idUsuario
            }
        })

        return {
            code: 201,
            ok: true,
            mensagem: 'Tuitado com sucesso!',
            dados: this.mapToModel(tweetDB)
        }

    }

    private mapToModel(tweet: TweetPrisma): Tweet {
        return new Tweet (
            tweet.id, 
            tweet.conteudo,
            tweet.tipo,
            tweet.idUsuario            
        )
    }
}