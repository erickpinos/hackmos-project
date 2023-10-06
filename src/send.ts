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

const address1 = process.env.ADDRESS_1!
const address2 = process.env.ADDRESS_2!

const mnemonic = process.env.SEED_PHRASE_1
const signer = await newSignerFromMnemonic(mnemonic!)
const signingClient = await NibiruSigningClient.connectWithSigner(
  TEST_CHAIN.endptTm,
  signer
)

const [{ address: fromAddr }] = await signer.getAccounts()

const tokens: Coin[] = newCoins(1, "unibi")
const toAddr: string = address2 // bech32 address
const gasFee = 2
const txResp = await signingClient.sendTokens(
  fromAddr,
  toAddr,
  tokens,
  gasFee, 
  "auto"
)

console.log("\n txResp: %o", txResp)