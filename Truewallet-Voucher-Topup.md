# Truewallet\-Voucher\-Topup

Node.js Class to Topup Truewallet-Voucher

Made For Educational Purpose Only (By Deekit Wiseschu)

  

# Install

We dont need to install 3nd party module  

  

```
var topup = require('./truewallet-class')

```

  

# Usage

  

```
var topup = require('./truewallet-class')

(async () => {
  try {
    var redeem = await new topup("VOUCHER_URL_LINK","PHONENUM")
    console.log(redeem)

    /*
      {
        "status":{
          "message":"success",
          "code":"SUCCESS"
        },
        "info":{
          "voucher":{
              "voucher_id":xxxxxxx,
              "amount_baht":"xx.00",
              "redeemed_amount_baht":"xx.00",
              "member":xx,
              "status":"active",
              "link":"mSuxxxxxxcijxxxxx",
              "detail":"test",
              "expire_date":xxxxxxxxxxxxxx,
              "redeemed":x,
              "available":x
          },
          "owner_profile":{
              "full_name":"xxxxx ***"
          },
          "redeemer":{
            "mobile_number":"08xxxxxxxx"
          },
        }
      }
    */
  } catch (error) {
    console.log(error);
  }
})()
```