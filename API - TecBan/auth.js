import request from "request-promise";
import fs from "fs";


global.key = fs.readFileSync(process.cwd()+"/certificados/banco_1/certs/key.key");
global.cert = fs.readFileSync(process.cwd()+"/certificados/banco_1/certs/cert.crt");

async function getAuth(scope) {
  //parametros aceitos:  "accounts openid" / "payments openid"

  let res = await request.post({
    uri: "https://as1.tecban-sandbox.o3bank.co.uk/token",
    key: global.key,
    cert: global.cert,
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
  return await JSON.parse(res);
}




async function getLinkAuthAccount(consentId, key, cert) {
  let res = await request.get({
    key: key,
    cert: cert,
    url: `https://rs1.tecban-sandbox.o3bank.co.uk/ozone/v1.0/auth-code-url/${consentId}?scope=accounts&alg=none`,
    rejectUnauthorized: false,
    headers: {
      Authorization:
        "Basic ZTA4OTY0NGQtODA4NC00NzA1LWJhM2ItNzZkNmRkOWJlMTQzOjc5MzFjMzRkLTViOTMtNDM3NC1iMzc1LTRhNTA4MDhjMmQ4ZQ==",
    },
  });

  return res;
}


async function getTokenAccess(key, cert, code) {  
  let res = await request.post({
    url: "https://as1.tecban-sandbox.o3bank.co.uk/token",
    key: key,
    cert: cert,
    rejectUnauthorized: false,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic ZTA4OTY0NGQtODA4NC00NzA1LWJhM2ItNzZkNmRkOWJlMTQzOjc5MzFjMzRkLTViOTMtNDM3NC1iMzc1LTRhNTA4MDhjMmQ4ZQ==",
    },
    form: {
      grant_type: "authorization_code",
      scope: "accounts",
      code: code,
      redirect_uri: 'http://www.google.co.uk'
    },
  });

  return await JSON.parse(res);
}

export { getAuth, getLinkAuthAccount, getTokenAccess};
