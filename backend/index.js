const express = require("express");
const Moralis = require("moralis").default;
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/getTokens", async (req, res) => {

  const { userAddress, chain } = req.query;

  const tokens = await Moralis.EvmApi.token.getWalletTokenBalances({
    chain: chain,
    address: userAddress,
  });

  // const nfts = await Moralis.EvmApi.nft.getWalletNFTs({
  //   chain: chain,
  //   address: userAddress,
  //   mediaItems: true,
  // });

  // const myNfts = nfts.raw.result.map((e, i) => {
  //   if (e?.media?.media_collection?.high?.url && !e.possible_spam && (e?.media?.category !== "video") ) {
  //     return e["media"]["media_collection"]["high"]["url"];
  //   }
  // })

  const balance = await Moralis.EvmApi.balance.getNativeBalance({
    chain: chain,
    address: userAddress
  });

  const jsonResponse = {
    tokens: tokens.raw,
    // nfts: myNfts,
    balance: balance.raw.balance / (10 ** 18)
  }


  return res.status(200).json(jsonResponse);
});

Moralis.start({
  apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImZlZDgyY2ExLTA4MWItNGY2Mi04MGFlLTVjMGRhYmNjZDIwNyIsIm9yZ0lkIjoiMzgyNDU0IiwidXNlcklkIjoiMzkyOTc2IiwidHlwZUlkIjoiMDMyOWI0ZjItZGU1My00ZTk3LWI4NjAtNDk5YzFlZDAwZjJhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTAyNTMxMDcsImV4cCI6NDg2NjAxMzEwN30.wtgPZP_U5_lc4yJdNxy-LdLiLVesSIXvsAQzgCF2sT4",
}).then(() => {
  app.listen(port, () => {
    console.log(`Listening for API Calls`);
  });
});
