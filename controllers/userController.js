import { userModels } from "../models/userModel.js";
import { logger } from "../config/logger.js";

const create = async (req, res) => {
  try {
    const user = new userModels(req.body);
    await user.save();
    res.status(200).send(user);
    logger.info(`POST /user - ${JSON.stringify(user)}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Algum erro ocorreu ao salvar" });
    logger.error(`POST /user - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (req, res) => {
  const name = req.query.name;

  //condicao para o filtro no findAll
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};
  try {
    const user = await userModels.find(condition);
    res.send(user);
    logger.info(`GET /user`);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || "Erro ao listar todos os documentos" });
    logger.error(`GET /user - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModels.findById(id);
    res.status(200).send(user);
    logger.info(`GET /user - ${id}`);
  } catch (error) {
    res.status(500).send({ message: "Erro ao buscar o User id: " + id });
    logger.error(`GET /user - ${JSON.stringify(error.message)}`);
  }
};

const login = async (req, res) => {
  try {
    const { login, password } = req.body;
    if (!login || !password) {
      throw new Error("É necessário informar login e senha");
    }

    const user = await userModels.find({ login: login, password: password });
    if (user.length === 0) {
      throw new Error("O login ou a senha está incorreto");
    }
    const { _id, name } = user[0];
    res.status(200).send({ _id, name, login, isAuth: true });
    logger.info(`GET /user/login - ${id} logado com sucessos`);
  } catch (error) {
    res.status(500).send({ message: error.message, isAuth: false });
    logger.error(`GET /user - ${JSON.stringify(error.message)}`);
  }
};

const update = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Dados para atualizacao vazio",
    });
  }

  const id = req.params.id;

  try {
    const user = await userModels.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res
      .status(200)
      .send({ update: user, message: "user atualizado com sucesso" });

    logger.info(`PUT /user - ${id} - ${JSON.stringify(req.body)}`);
  } catch (error) {
    res.status(500).send({ message: "Erro ao atualizar a user id: " + id });
    logger.error(`PUT /user - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await userModels.findByIdAndDelete(id);
    res.status(200).send({ message: "user excluido com sucesso" });

    logger.info(`DELETE /user - ${id}`);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Nao foi possivel deletar o user id: " + id });
    logger.error(`DELETE /user - ${JSON.stringify(error.message)}`);
  }
};

export default { create, findAll, findOne, update, remove, login };
