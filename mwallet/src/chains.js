const Binance = {
    hex: '0x38',
    name: 'Binance Smart Chain',
    rpcUrl: 'https://bsc.getblock.io/bd2c294b-6e58-41e8-a266-78b8cbebc369/mainnet/',
    ticker: "BNB"
};

const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: 'https://mainnet.infura.io/v3/7b62ab719c7640c98a58d7604905aae7',
    ticker: "ETH"
};

const MumbaiTestnet = {
    hex: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: '',
    ticker: "MATIC"
};

export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0x13881": MumbaiTestnet,
    "0x38" : Binance
};