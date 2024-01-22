import { Usuario as UsuarioPrisma } from "@prisma/client";
import repository from "../database/prisma.connection";
import { CadastrarUsuarioDTO, ResponseDTO, LoginDTO } from "../dtos";
import { Usuario } from "../models";
import { randomUUID } from "crypto";
import { JWTAdapter } from "../adapters/jwt.adapter";
import "dotenv/config"

export class UsuarioService {
    public async cadastrar (dados: CadastrarUsuarioDTO): Promise<ResponseDTO>{
        const usuarioExiste = await repository.usuario.findFirst({
            where: { OR: [{email: dados.email}, {username: dados.username}] }
        })

        if(usuarioExiste) {
            return {
                code: 400,
                ok: false,
                mensagem: 'E-mail e/ou username já cadastrado'
            }
        }

        const usuarioDB = await repository.usuario.create ({
            data: {
                nome: dados.nome,
                email: dados.email,
                username: dados.username,
                senha: dados.senha
            }
        })
        
        return {
            code: 201,
            ok: true,
            mensagem: 'Usuário criado com sucesso!',
            dados: this.mapToModel(usuarioDB)
        }
    }
    
    public async validarToken(token: string): Promise<string | null> {
		const usuarioEncontrado = await repository.usuario.findFirst({
			where: { authToken: token },
		});

		if (!usuarioEncontrado) return null;

		return usuarioEncontrado.id;
	}

    public async login(dados: LoginDTO): Promise<ResponseDTO> {
    const usuarioEncontrado = await repository.usuario.findFirst({
      where: { AND: [{email: dados.email}, {senha: dados.senha}] }
    });

    if (!usuarioEncontrado) {
      return {
        code: 401,
        ok: false,
        mensagem: "Credenciais inválidas",
      };
    }

    // const token = randomUUID();

    const alunoModel = this.mapToModel({ ...usuarioEncontrado});

    const jwt = new JWTAdapter(process.env.JWT_SECRET_KEY as string , process.env.JWT_EXPIRE_IN as string );
    const token = jwt.gerarToken(alunoModel.toJSON());

    await repository.usuario.update({
       where: { id: usuarioEncontrado.id },
       data: { authToken: token },
     });

    return {
      code: 200,
      ok: true,
      mensagem: "Login efetuado",
      dados: {user: alunoModel.toJSON(), token },
    };
  }


    private mapToModel(usuario: UsuarioPrisma): Usuario {
        return new Usuario (
            usuario.id, 
            usuario.nome,
            usuario.email,
            usuario.username,
            usuario.senha
        )
    }
}