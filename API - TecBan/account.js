import request from "request-promise";
import { getAuth, getLinkAuthAccount, getTokenAccess } from "./auth.js";
import uuid from "uuid";
const uuidv4 = uuid.v4;
const key = global.key;
const cert = global.cert;

async function accountConsents(accessToken, key, cert) {
  const interactionId = uuidv4();
  let res = await request.post({
    uri:
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/account-access-consents",
    key: key,
    cert: cert,
    headers: {
      "Content-Type": "application/json",
      "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
      "x-fapi-interaction-id": interactionId,
      Authorization: "Bearer " + accessToken,
    },
    rejectUnauthorized: false,
    body: JSON.stringify({
      Data: {
        Permissions: [
          "ReadAccountsBasic",
          "ReadAccountsDetail",
          "ReadBalances",
          "ReadBeneficiariesBasic",
          "ReadBeneficiariesDetail",
          "ReadDirectDebits",
          "ReadTransactionsBasic",
          "ReadTransactionsCredits",
          "ReadTransactionsDebits",
          "ReadTransactionsDetail",
          "ReadProducts",
          "ReadStandingOrdersDetail",
          "ReadProducts",
          "ReadStandingOrdersDetail",
          "ReadStatementsDetail",
          "ReadParty",
          "ReadOffers",
          "ReadScheduledPaymentsBasic",
          "ReadScheduledPaymentsDetail",
          "ReadPartyPSU",
        ],
      },
      Risk: {},
    }),
  });
  return await JSON.parse(res);
}

async function getAuthAccount() {
  let scope = "accounts openid";
  try {
    let { access_token } = await getAuth(scope);
    let { Data } = await accountConsents(access_token, key, cert);
    let { ConsentId } = Data;
    let link = await getLinkAuthAccount(ConsentId, key, cert);
    return link;
  } catch (err) {
    throw err;
  }
}

async function confirmAuthAccount(code) {
  try {
    let res = await getTokenAccess(key, cert, code);
    return res;
  } catch (err) {
    throw err;
  }
}

async function getAccounts(token) {
  const interactionId = uuidv4();
  try {
    let res = await request.get({
      url:
        "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts",
      key: key,
      cert: cert,
      rejectUnauthorized: false,
      headers: {
        "Content-Type": "application/json",
        "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
        "x-fapi-interaction-id": interactionId,
        Authorization: "Bearer " + token,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
}

async function getAccount(token, accountId) {
  const interactionId = uuidv4();
  try {
    let res = await request.get({
      url:
        "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/" +
        accountId,
      key: key,
      cert: cert,
      rejectUnauthorized: false,
      headers: {
        "Content-Type": "application/json",
        "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
        "x-fapi-interaction-id": interactionId,
        Authorization: "Bearer " + token,
      },
    });
    return await JSON.parse(res);
  } catch (err) {
    throw err;
  }
}

async function getBalancesAccounts(token) {
  const interactionId = uuidv4();
  let res = await request.get({
    url:
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/balances",
    key: key,
    cert: cert,
    rejectUnauthorized: false,
    headers: {
      "Content-Type": "application/json",
      "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
      "x-fapi-interaction-id": interactionId,
      Authorization: "Bearer " + token,
    },
  });
  return await JSON.parse(res);
}

async function getBalanceAccount(token, accountId) {
  const interactionId = uuidv4();
  try {
    let res = await request.get({
      url: `https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/accounts/${accountId}/balances`,
      key: key,
      cert: cert,
      rejectUnauthorized: false,
      headers: {
        "Content-Type": "application/json",
        "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
        "x-fapi-interaction-id": interactionId,
        Authorization: "Bearer " + token,
      },
    });
    return await JSON.parse(res);
  } catch (err) {
    throw err;
  }
}

export {
  getAuthAccount,
  confirmAuthAccount,
  getAccounts,
  getAccount,
  getBalancesAccounts,
  getBalanceAccount,
};
