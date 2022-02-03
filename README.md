# Truewallet-Voucher-Topup
Simple Truewallet Voucher Topup!

![npm](https://img.shields.io/npm/v/truewallet-2022?style=flat-square&label=npm%20Version)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Deekit0904/Truewallet-Voucher-Topup?label=Github%20Version&style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/truewallet-2022?style=flat-square)
![npm](https://img.shields.io/npm/dy/truewallet-2022?style=flat-square)
![NPM](https://img.shields.io/npm/l/truewallet-2022?style=flat-square)

About IT
============

Node.js Class to Topup Truewallet-Voucher

Made For Educational Purpose Only (By Deekit Wiseschu)

Install
============
We dont need to install 3nd party module
```javascript
var topup = require('truewallet-2022')
```

Usage
============
```javascript
var topup = require('truewallet-2022')

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
[![Discord](https://img.shields.io/discord/699832081643077662?label=หจก.SycerNetwork&style=flat-square)](https://discord.gg/hGZ3HxCJER)
