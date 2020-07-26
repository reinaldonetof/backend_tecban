import express from "express";
import {
  getAuth,
  getToken,
  getAllAccounts,
  getSpecificAccount,
  getBalances,
  getBalance,
  getStatusConfirmation,
} from "../controllers/accountController.js";

const app = express();

app.get("/account/balances", getBalances);
app.get("/account/auth", getAuth);
app.get("/account/authstatus", getStatusConfirmation);
app.get("/account/confirmAuth", getToken);
app.get("/account/accounts", getAllAccounts);
app.get("/account/:id", getSpecificAccount);
app.get("/account/:id/balance", getBalance);

// app.get('/grade/:id', controller.findOne);
// app.put('/grade/:id', controller.update);
// app.delete('/grade/:id', controller.remove);
// app.delete('/grade/', controller.removeAll);

export { app as accountRouter };
