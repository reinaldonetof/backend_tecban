import request from "request-promise";
import fs from "fs";
import dotenv from 'dotenv';


global.key = fs.readFileSync("./certificados/banco_1/certs/key.key");
global.cert = fs.readFileSync("./certificados/banco_1/certs/cert.crt");

dotenv.config();

// async function getAuthAccount(key,cert) {
//   var request = require("request");
//   var options = {
//     method: "GET",
//     url:
//       "https://rs1.tecban-sandbox.o3bank.co.uk/ozone/v1.0/auth-code-url/aac-545fe7a0-4fbe-4a31-b85d-517652160b63?scope=accounts&alg=none",
//     headers: {
//       Authorization:
//         "Basic ZTA4OTY0NGQtODA4NC00NzA1LWJhM2ItNzZkNmRkOWJlMTQzOjc5MzFjMzRkLTViOTMtNDM3NC1iMzc1LTRhNTA4MDhjMmQ4ZQ==",
//     },
//   };
//   request(options, function (error, response) {
//     if (error) throw new Error(error);
//     console.log(response.body);
//   });
// }

async function accountConsents(accessToken, key, cert) {
  let res = await request.post({
    uri:
      "https://rs1.tecban-sandbox.o3bank.co.uk/open-banking/v3.1/aisp/account-access-consents",
    key: key,
    cert: cert,
    headers: {
      "Content-Type": "application/json",
      "x-fapi-financial-id": "c3c937c4-ab71-427f-9b59-4099b7c680ab",
      "x-fapi-interaction-id": "41747b48-efd5-45d0-8cf3-c8fd31f59038",
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

async function getAuth(scope) {
  //parametros aceitos:  "accounts openid" / "payments openid"
  
  let res = await request.post({
    uri: "https://as1.tecban-sandbox.o3bank.co.uk/token",
    key: global.key ,
    cert: global.cert ,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Basic ZTA4OTY0NGQtODA4NC00NzA1LWJhM2ItNzZkNmRkOWJlMTQzOjc5MzFjMzRkLTViOTMtNDM3NC1iMzc1LTRhNTA4MDhjMmQ4ZQ==",
    },
    form: {
      grant_type: "client_credentials",
      scope: scope,
    },
    rejectUnauthorized: false,
  });
  let { access_token } = JSON.parse(res);
  let consent = await accountConsents(access_token, global.key , global.cert);
  console.log(access_token);
  console.log(consent);
  return await JSON.parse(res);
}

getAuth("accounts openid");

//export { getAuth };
