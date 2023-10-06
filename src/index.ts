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
  
const address = "nibi17qgdh87ln2wf6a6zzae25tkze6yfa2jdsywawn"

//console.log("\n perpFunctions: %o", queryClient.nibiruExtensions.perp)
//console.log("\n perpPositions: %o", await queryClient.nibiruExtensions.perp.positions({trader: address}))
//console.log("\n allMarkets: %o", await queryClient.nibiruExtensions.perp.markets())

//const signingClient = await NibiruSigningClient.connect(TEST_CHAIN.endptTm)
//const allBalances = await signingClient.getAllBalances(address)
//console.log("allBalances: %o", allBalances)

//  const perpParamsResp = await queryClient.nibiruExtensions.perp.params()
//  console.log("perpParams: %o", perpParamsResp)
  
//  const allMarkets = await queryClient.nibiruExtensions.perp.markets({
//    pair: "ueth:unusd",
//  })
//  console.log("allMarkets: %o", allMarkets)
  
//const blockHeight = 150000
//const block = await queryClient.getBlock(blockHeight)
//console.log("\n block: %o", block)

const mnemonic = process.env.SEED_PHRASE
const signer = await newSignerFromMnemonic(mnemonic!)
const signingClient = await NibiruSigningClient.connectWithSigner(
  TEST_CHAIN.endptTm,
  signer
)

const allBalances = await signingClient.getAllBalances(address)
console.log("allBalances: %o", allBalances)

const [{ address: fromAddr }] = await signer.getAccounts()

const tokens: Coin[] = newCoins(1, "unibi")
const toAddr: string = "nibi1alcpzkv88p8ga5n2evvkj3d49nmzpsff4nehfg" // bech32 address of the receiving party
const txResp = await signingClient.sendTokens(
  fromAddr,
  toAddr,
  tokens,
  "auto"
)
console.log("txResp: %o", txResp)