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

const address1 = "nibi17qgdh87ln2wf6a6zzae25tkze6yfa2jdsywawn"
const address2 = "nibi1alcpzkv88p8ga5n2evvkj3d49nmzpsff4nehfg"

const allBalances1 = await signingClient.getAllBalances(address1)
const allBalances2 = await signingClient.getAllBalances(address2)
console.log("\n allBalances1: %o", allBalances1)
console.log("\n allBalances2: %o", allBalances2)