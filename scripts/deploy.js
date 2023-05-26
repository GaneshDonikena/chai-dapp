const hre = require("hardhat");

async function main() {
  const Chai = await hre.ethers.getContractFactory("chai");
  const chai = await Chai.deploy();

  await chai.deployed();

  console.log("Deployed contract address:", `${chai.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
