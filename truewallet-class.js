/*
#####################################

    Developed By Deekit.Wiseschu
      For Educational Purpose

#####################################
*/

const url = require('url');
const https = require('https')

class RedeemCard {
    constructor(link,tel){
        return new Promise(async (resolve,reject) => {
            if (url.parse(link).hostname.includes("gift.truemoney.com") && url.parse(link)["protocol"].includes("https:")){

                if (String(tel) && String(tel).startsWith(0)) {
                    this.tel = tel
                    this.redeemlink = link;
                    this.voucherid = String(url.parse(this.redeemlink)["query"]).split("v=")[1];
                    
                    await this.Checking();

                    const returnval = await this.RedeemCard();

                    return resolve(returnval)
                } else {
                    return reject(new Error('[TrueWalletAPI] Truewallet-ID (Moblie-Phone Number) Invalid'))
                }
    
            } else {
                return reject(new Error('[TrueWalletAPI] Voucher Invalid'))
            }
        })
    }

    RedeemCard(){
        return new Promise(async (resolve,reject) => {
            const rres = await this.httpsPost({
                "mobile":String(this.tel),
                "voucher_hash":String(this.voucherid)
            });

            if (String(JSON.parse(rres)["status"].code).toUpperCase() !== "SUCCESS") return reject(new Error(`[TrueWalletAPI] Voucher Invalid Cannot Redeem (${String(JSON.parse(rres)["status"].code).toUpperCase()})`))

            return resolve({
                "status":JSON.parse(rres)["status"],
                "info":{
                    "voucher":JSON.parse(rres)["data"].voucher,
                    "owner_profile":JSON.parse(rres)["data"].owner_profile,
                    "redeemer":JSON.parse(rres)["data"].redeemer_profile,
                }
            });
        });
    }

    Checking(){
        return new Promise(async (resolve,reject) => {
            const rres = await this.httpsGet(String(`https://gift.truemoney.com/campaign/vouchers/${this.voucherid}/verify?mobile=${this.tel}`));
            const checkingvoucher = String(JSON.parse(rres)["status"].code).toUpperCase()

            if (checkingvoucher !== "SUCCESS") return reject(new Error(`[TrueWalletAPI] Voucher Invalid Cannot Redeem (${checkingvoucher})`))
            
            return resolve(rres);
        });
    }

    httpsGet(turl) {
        return new Promise((resolve, reject) => {
            https.get(turl, (res) => {
                res.setEncoding('utf8');
                let body = ''; 
                res.on('data', chunk => body += chunk);
                res.on('end', () => resolve(body));
            }).on('error', reject);
        });
    };

    httpsPost(postdata) {
        return new Promise((resolve, reject) => {
            let postreq = https.request({
                hostname: 'gift.truemoney.com',
                port: '443',
                path: `/campaign/vouchers/${this.voucherid}/redeem`,
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
            }, (res) => {
                res.setEncoding('utf8');
                let body = ''; 
                res.on('data', chunk => body += chunk);
                res.on('end', () => resolve(body));
            }).on('error', reject);
            postreq.write(JSON.stringify(postdata))
            postreq.end();
        });
    };
}

module.exports = RedeemCard;
