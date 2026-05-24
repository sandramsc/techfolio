/* By Sandra Ashipala <https://github.com/sajustsmile> 27.03.2022*/
/* @type import('hardhat/config').HardhatUserConfig
	*/
require('dotenv').config();
require('@nomiclabs/hardhat-waffle')
require("@nomiclabs/hardhat-ethers");
const { ALCHEMY_API_URL, METAMASK_PRIVATE_KEY } = process.env;
module.exports = {
solidity: "0.8.7",
   defaultNetwork: "rinkeby",
	   networks: {
	      hardhat: {},
	      rinkeby: {
	         url: ALCHEMY_API_URL,
	         accounts: [`${METAMASK_PRIVATE_KEY}`]
	      }
	   },
	}
