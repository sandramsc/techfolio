const hre = require('hardhat')

 async function main() {
  const profileImageFactory = await hre.ethers.getContractFactory(
    'ProfileImageNFTs',
  )
  const profileImageContract = await profileImageFactory.deploy()

  await profileImageContract.deployed()

  console.log('Profile Image Minter deployed to:', profileImageContract.address)
};

(async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()