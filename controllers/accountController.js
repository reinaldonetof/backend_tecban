import { logger } from "../config/logger.js";
import {
  getAuthAccount,
  confirmAuthAccount,
  getAccounts,
  getAccount,
  getBalancesAccounts,
  getBalanceAccount,
  getStatusAuth
} from "../API - TecBan/account.js";

async function getAuth(req, res) {
  try {
    let link = await getAuthAccount();
    res.status(200).send({ link: link });
  } catch (error) {
    logger.error(`POST /account/auth - ${JSON.stringify(error.message)}`);
    res
      .status(400)
      .send({
        message:
          error.message || "Ocorreu algum erro ao solicitar autenticação",
      });
  }
}

async function getToken(req, res) {
  try {
    let code = req.query.code;
    if (!code) {
      throw new Error(
        "É necessário passar o parametro code para confirmar a autenticação"
      );
    }
    let token = await confirmAuthAccount(code);
    res.status(200).send(token);
  } catch (error) {
    logger.error(
      `POST /account/confirmAuth - ${JSON.stringify(error.message)}`
    );
    res
      .status(400)
      .send({
        message:
          error.message || "Ocorreu algum erro ao confirmar a autenticação",
      });
  }
}

async function getAllAccounts(req, res) {
  try {
    let token = req.body.token;
    if (!token) {
      throw new Error("É necessário informar o token para obter as contas");
    }
    let accounts = await getAccounts(token);
    res.status(200).send(accounts);
  } catch (error) {
    logger.error(`POST /account/accounts - ${JSON.stringify(error.message)}`);
    res
      .status(400)
      .send({
        message:
          error.message || "Ocorreu algum erro na localização das contas",
      });
  }
}

async function getSpecificAccount(req, res) {
  try {
    let token = req.body.token;
    let idAccount = req.params.id;
    if (!token) {
      throw new Error("É necessário informar o token para obter as contas");
    }
    let account = await getAccount(token, idAccount);
    res.status(200).send(account);
  } catch (error) {
    logger.error(`POST /account/accounts - ${JSON.stringify(error.message)}`);
    res
      .status(400)
      .send({
        message:
          error.message || "Ocorreu algum erro na localização das contas",
      });
  }
}

async function getBalances(req, res) {
  try {
    let token = req.body.token;
    if (!token) {
      throw new Error("É necessário informar o token para obter a conta");
    }
    let account = await getBalancesAccounts(token);
    res.status(200).send(account);
  } catch (error) {
    logger.error(`POST /account/balances - ${JSON.stringify(error.message)}`);
    res
      .status(400)
      .send({
        message:
          error.message || "Ocorreu algum erro consultar do saldo das contas",
      });
  }
}

async function getBalance(req, res) {
  try {
    let token = req.body.token;
    let id = req.params.id;
    if (!token) {
      throw new Error("É necessário informar o token para obter a conta");
    }
    let account = await getBalanceAccount(token, id);
    res.status(200).send(account);
  } catch (error) {
    logger.error(`POST /account/id/balance - ${JSON.stringify(error.message)}`);
    res
      .status(400)
      .send({
        message:
          error.message || "Ocorreu algum erro ao consultar do saldo da conta",
      });
  }
}

async function getStatusConfirmation(_,res){
  try{
    let status = await getStatusAuth();
    res.status(200).send(status)
  }catch(error){
    logger.error(`POST /account/authstatus - ${JSON.stringify(error.message)}`);
    res
      .status(400)
      .send({
        message:
          error.message || "Erro ao consultar o status a autenticação",
      });
  }
}


export { getAuth, getToken, getAllAccounts, getSpecificAccount, getBalances, getBalance , getStatusConfirmation };
