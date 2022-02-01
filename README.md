# Truewallet-Voucher-Topup
Simple Truewallet Voucher Topup!

Truewallet Voucher Topup
============

Node.js Class to Topup Truewallet-Voucher

Made For Educational Purpose Only (By Deekit Wiseschu)

Install
============
We dont need to install 3nd party module
```javascript
var topup = require('./truewallet-class')
```

Usage
============
```javascript
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

## Any problems?
* [Discord](https://discord.gg/hGZ3HxCJER)
