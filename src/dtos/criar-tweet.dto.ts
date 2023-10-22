import { TipoTweetDTO } from "./tipo-tweet.dto"

export interface CriarTweetDTO {
    conteudo: string
    tipo: TipoTweetDTO
    idUsuario: string
}