# Readme file for TPP238 

## Client Details 
 clientID=c1278ed9-83c6-41aa-ab77-89839c6d10c9 
 clientSecret=82d7966a-705c-49b7-8a9d-03f36f28517e 

## Organisation Details 
 orgName=TPP238 
 orgID=e670d3f2-a0a7-4789-adea-270a0f01104a 

## Software Details 
 softwareName=TPP238 
 softwareID=8e99c57a-065d-4b9a-995f-1c66b745a417 

## Cert KID Details 
 transportKID=tVmMEgXxt0RQJNzVCx4yJprSLOPxyQ1OKNgwovHiubo 
 signingKID=MP3U9XWbX-2yRS7vYRiMn-2ErXF_J6VpQeibPn8E7kY 

## Cert Pem Details 
 transportPEM=https://tecban-uat-us-east-1-keystore.s3.amazonaws.com/e670d3f2-a0a7-4789-adea-270a0f01104a/8e99c57a-065d-4b9a-995f-1c66b745a417/tVmMEgXxt0RQJNzVCx4yJprSLOPxyQ1OKNgwovHiubo.pem 
 signingPEM=https://tecban-uat-us-east-1-keystore.s3.amazonaws.com/e670d3f2-a0a7-4789-adea-270a0f01104a/8e99c57a-065d-4b9a-995f-1c66b745a417/MP3U9XWbX-2yRS7vYRiMn-2ErXF_J6VpQeibPn8E7kY.pem 

## Server Details 
 Well Known Endpoint=https://auth2.tecban-sandbox.o3bank.co.uk/.well-known/openid-configuration 
 Token Endpoint=https://as2.tecban-sandbox.o3bank.co.uk/token 
 Resource Endpoint=https://rs2.tecban-sandbox.o3bank.co.uk 
 Auth Endpoint=https://auth2.tecban-sandbox.o3bank.co.uk/auth 

 ## User & Account Details 
 [
  {
    "username": "team238b2u1",
    "password": "548890",
    "accounts": [
      {
        "accountNumber": "02238001001"
      },
      {
        "accountNumber": "02238001002"
      },
      {
        "accountNumber": "02238001003"
      }
    ]
  },
  {
    "username": "team238b2u2",
    "password": "500485",
    "accounts": [
      {
        "accountNumber": "02238002001"
      },
      {
        "accountNumber": "02238002002"
      },
      {
        "accountNumber": "02238002003"
      }
    ]
  },
  {
    "username": "team238b2u3",
    "password": "454567",
    "accounts": [
      {
        "accountNumber": "02238003001"
      },
      {
        "accountNumber": "02238003002"
      },
      {
        "accountNumber": "02238003003"
      }
    ]
  },
  {
    "username": "team238b2u4",
    "password": "299855",
    "accounts": [
      {
        "accountNumber": "02238004001"
      },
      {
        "accountNumber": "02238004002"
      },
      {
        "accountNumber": "02238004003"
      }
    ]
  },
  {
    "username": "team238b2u5",
    "password": "398693",
    "accounts": [
      {
        "accountNumber": "02238005001"
      },
      {
        "accountNumber": "02238005002"
      },
      {
        "accountNumber": "02238005003"
      }
    ]
  }
] 

## Tip for testing in postman 
 In postman settings - certificates tab - add the transport cert and key for the rs and token endpoints 

