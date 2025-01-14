require("dotenv").config();

require("@nomiclabs/hardhat-waffle");

const HARMONY_PRIVATE_KEY =
    process.env.HARMONY_PRIVATE_KEY ||
    "";
    
const AURORA_PRIVATE_KEY =
    process.env.AURORA_PRIVATE_KEY ||
    "";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [{ version: "0.8.6", settings: {} }],
    },
    networks: {
        hardhat: {
            initialBaseFeePerGas: 0, //https://github.com/sc-forks/solidity-coverage/issues/652
        },
        localhost: {},
       /* mainnet: {
            url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [MAINNET_PRIVATE_KEY],
        },
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [RINKEBY_PRIVATE_KEY],
        },*/
        testnet: {
            url: `https://api.s0.b.hmny.io`,
            accounts: [`0x${HARMONY_PRIVATE_KEY}`]
        },
        harmony: {
            url: `https://api.s0.t.hmny.io`,
            accounts: [`0x${HARMONY_PRIVATE_KEY}`]
        },
        auroratestnet: {
          url: 'https://testnet.aurora.dev',
          //gasPrice: 120 * 1000000000,
          chainId: 1313161555,
          accounts: [`${AURORA_PRIVATE_KEY}`],
          saveDeployments: true,
        },          
        coverage: {
            url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
        },
    },
};
