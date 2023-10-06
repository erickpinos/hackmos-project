import {
    IncentivizedTestnet,
    NibiruQueryClient,
    NibiruSigningClient,
    Coin,
    newCoins,
    newSignerFromMnemonic
  } from "@nibiruchain/nibijs"


import dotenv from 'dotenv';
dotenv.config();

const TEST_CHAIN = IncentivizedTestnet(3)
const queryClient = await NibiruQueryClient.connect(TEST_CHAIN.endptTm)

const signingClient = await NibiruSigningClient.connect(TEST_CHAIN.endptTm)

const address1 = process.env.ADDRESS_1!
const address2 = process.env.ADDRESS_2!

const allBalances1 = await signingClient.getAllBalances(address1)
const allBalances2 = await signingClient.getAllBalances(address2)
console.log("\n allBalances1: %o", allBalances1)
console.log("\n allBalances2: %o", allBalances2)