# Readme file for TPP238 

## Client Details 
 clientID=e089644d-8084-4705-ba3b-76d6dd9be143 
 clientSecret=7931c34d-5b93-4374-b375-4a50808c2d8e 

## Organisation Details 
 orgName=TPP238 
 orgID=ca7abe6a-d4cf-4723-ab28-4d0ca169a7f0 

## Software Details 
 softwareName=TPP238 
 softwareID=84fd1441-f412-4537-b6b1-252bf498e41a 

## Cert KID Details 
 transportKID=1tABjZTN97aQWzsm6kbCoJ4mhO9h17JUPbJWGFvre3o 
 signingKID=6YIcG4LRcq48ezbyCGIsMkU3Gj_f4pJRecww-jjpj0Q 

## Cert Pem Details 
 transportPEM=https://tecban-uat-us-east-1-keystore.s3.amazonaws.com/ca7abe6a-d4cf-4723-ab28-4d0ca169a7f0/84fd1441-f412-4537-b6b1-252bf498e41a/1tABjZTN97aQWzsm6kbCoJ4mhO9h17JUPbJWGFvre3o.pem 
 signingPEM=https://tecban-uat-us-east-1-keystore.s3.amazonaws.com/ca7abe6a-d4cf-4723-ab28-4d0ca169a7f0/84fd1441-f412-4537-b6b1-252bf498e41a/6YIcG4LRcq48ezbyCGIsMkU3Gj_f4pJRecww-jjpj0Q.pem 

## Server Details 
 Well Known Endpoint=https://auth1.tecban-sandbox.o3bank.co.uk/.well-known/openid-configuration 
 Token Endpoint=https://as1.tecban-sandbox.o3bank.co.uk/token 
 Resource Endpoint=https://rs1.tecban-sandbox.o3bank.co.uk 
 Auth Endpoint=https://auth1.tecban-sandbox.o3bank.co.uk/auth 

 ## User & Account Details 
 [
  {
    "username": "team238b1u1",
    "password": "555554",
    "accounts": [
      {
        "accountNumber": "01238001001"
      },
      {
        "accountNumber": "01238001002"
      },
      {
        "accountNumber": "01238001003"
      }
    ]
  },
  {
    "username": "team238b1u2",
    "password": "920908",
    "accounts": [
      {
        "accountNumber": "01238002001"
      },
      {
        "accountNumber": "01238002002"
      },
      {
        "accountNumber": "01238002003"
      }
    ]
  },
  {
    "username": "team238b1u3",
    "password": "236482",
    "accounts": [
      {
        "accountNumber": "01238003001"
      },
      {
        "accountNumber": "01238003002"
      },
      {
        "accountNumber": "01238003003"
      }
    ]
  },
  {
    "username": "team238b1u4",
    "password": "110153",
    "accounts": [
      {
        "accountNumber": "01238004001"
      },
      {
        "accountNumber": "01238004002"
      },
      {
        "accountNumber": "01238004003"
      }
    ]
  },
  {
    "username": "team238b1u5",
    "password": "402420",
    "accounts": [
      {
        "accountNumber": "01238005001"
      },
      {
        "accountNumber": "01238005002"
      },
      {
        "accountNumber": "01238005003"
      }
    ]
  }
] 

## Tip for testing in postman 
 In postman settings - certificates tab - add the transport cert and key for the rs and token endpoints 

