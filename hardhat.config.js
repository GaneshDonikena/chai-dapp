require("@nomicfoundation/hardhat-toolbox")

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL =
    process.env.GOERLI_URL ||
    "https://eth-goerli.g.alchemy.com/v2/3nWGNqrq-lf8zXD2mm1kxcoe_2dLcMVG"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "952d2dae956dfb28ba1dd51731915f6a7132477283e33dcac4f28ad29d2a3e03"

module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: GOERLI_URL,
            accounts: [PRIVATE_KEY],
        },
    },
}

//0x089D2629434e66B554b5Df23f643beD04C420dd0
