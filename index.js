const print = require('./print');
const axios = require('axios');
require('dotenv').config();

const TOKEN = process.env.AUTH;

process.removeAllListeners('warning');

process.on("unhandledRejection", async (reason, promise) => {
    return print.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (err) => {
    return print.error("Uncaught Exception:", err);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
    return print.error("Uncaught Exception Monitor:", err, origin);
});

(async () => {

    // Click.

    setInterval(async () => {

        const currentTimestamp = (new Date()).getTime();

        const getAccountData = await axios({
            method: 'POST',
            url: 'https://api.hamsterkombatgame.io/clicker/sync',
            headers: {
                'Authorization': TOKEN,
                'Content-Type': 'application/json'
            }
        })

        const availableTaps = getAccountData.data.clickerUser.availableTaps;
        const coins = getAccountData.data.clickerUser.balanceCoins;

        try {
            await axios({
                method: 'POST',
                url: 'https://api.hamsterkombatgame.io/clicker/tap',
                headers: {
                    'Authorization': TOKEN,
                    'Content-Type': 'application/json'
                },
                data: {
                    "count": availableTaps,
                    "availableTaps": 0,
                    "timestamp": currentTimestamp
                }
            })

            print.success(`Clicked \x1b[1m${availableTaps}\x1b[0m times at hamster. [ \x1b[33m🪙  ${String(Math.floor(coins)).replace(/(.)(?=(\d{3})+$)/g, '$1.')} coins\x1b[0m ]`)

        } catch (err) {
            print.error(err.message)
        }

    }, 60_000)

    // Buy energy.

    setInterval(async () => {

        const currentTimestamp = (new Date()).getTime();

        try {
            await axios({
                method: 'POST',
                url: 'https://api.hamsterkombatgame.io/clicker/buy-boost',
                headers: {
                    'Authorization': TOKEN,
                    'Content-Type': 'application/json'
                },
                data: {
                    "boostId": "BoostFullAvailableTaps",
                    "timestamp": currentTimestamp
                }
            })

            print.bonus(`Claimed free energy fill-up.`)
        } catch (err) {
            if (err.response.data.error_code === "BOOST_MAX_LEVEL") { }
            else if (err.response.data.error_code === "BOOST_COOLDOWN") { }
            else console.log(err)
        }
    }, 3_600_000)

})().then(() => {
    print.debug(`Hamster Kombat Coin Farmer is \x1b[1mON\x1b[0m.`)
})