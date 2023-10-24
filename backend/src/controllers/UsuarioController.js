import UsuarioDao from "../database/UsuarioDao.js";
import Usuario from "../model/Usuario.js";

export default class UsuarioController {
  constructor() {}

  async salvarUsuario(req, res) {
    try {
      const { nome, idade, sexo, cpf, email, telefone, cidade, estado } =
        req.body;

      const usuario = new Usuario(
        nome,
        idade,
        sexo,
        cpf,
        email,
        telefone,
        cidade,
        estado
      );

      console.log(usuario);

      const response = await UsuarioDao.create(usuario);

      console.log(response);

      res.json({ sucesso: `${usuario.nome} salvo com sucesso ` });
    } catch (error) {
      res.json({ erro: `Erro ao salvar dados do usuario` });

      console.log(error);
    }
  }

  async buscarUsuarioID(req, res) {
    try {
      const id = req.params.id;

      const usuario = await UsuarioDao.findById({ _id: id });

      res.json(usuario);
      
    } catch (error) {
      res.json({ error: `Erro ao buscar usuario` });
    }
  }

  async editarUsuario(req, res) {
    try {
      const id = req.params.id;

      const { nome, idade, sexo, cpf, email, telefone, cidade, estado } =
        req.body;

      const usuario = new Usuario(
        nome,
        idade,
        sexo,
        cpf,
        email,
        telefone,
        cidade,
        estado
      );

      console.log(usuario);

      const response = await UsuarioDao.findByIdAndUpdate(id, usuario, {
        new: true,
      });

      console.log(response);

      res.json({ sucesso: `${usuario.nome} atualizado com sucesso ` });
    } catch (error) {
      res.json({ erro: `Erro ao atualizar dados do usuario` });

      console.log(error);
    }
  }
}
