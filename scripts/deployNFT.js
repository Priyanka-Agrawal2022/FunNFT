const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  //Get ContractFactories
  const FunNFT = await ethers.getContractFactory("FunNFT");
  const Marketplace = await ethers.getContractFactory("Marketplace");
  
  // Start deployment, returning a promise that resolves to a contract object
  const funNFT = await FunNFT.deploy();
  const marketplace = await Marketplace.deploy(1);

  // Save copies of each contract abi and address to the frontend
  // saveFrontendFiles(funNFT, "FunNFT");
  // saveFrontendFiles(marketplace , "Marketplace");

  // function saveFrontendFiles(contract, name) {
  //   const fs = require("fs");
  //   const contractsDir = __dirname + "/../../frontend/contractsData";
  
  //   if (!fs.existsSync(contractsDir)) {
  //     fs.mkdirSync(contractsDir);
  //   }
  
  //   fs.writeFileSync(
  //     contractsDir + `/${name}-address.json`,
  //     JSON.stringify({ address: contract.address }, undefined, 2)
  //   );
  
  //   const contractArtifact = artifacts.readArtifactSync(name);
  
  //   fs.writeFileSync(
  //     contractsDir + `/${name}.json`,
  //     JSON.stringify(contractArtifact, null, 2)
  //   );
  // }

  console.log("FunNFT contract deployed to address:", funNFT.address);
  console.log("Marketplace contract deployed to address:", marketplace.address);
}
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    //Contract deployed to address: 0xEc7e5f3307a01F04d4Ff86bDDE5F3EF13236D925
    //Contract deployed to address: 0x61472Dea09e6C4DcD8f8BC64a0A229Dd45894BB8
    //Contract deployed to address: 0xc3f590c23aBb2f70977AAA7feAfc614480789fD9
    //Contract deployed to address: 0xC57EA7722ed02d7a6F6a66240eF59950a0Ba21de

    //FunNFT contract deployed to address: 0x3D0d6594DDBEDE93bfB1Ce27885283f3534f81e8
    //Marketplace contract deployed to address: 0xA3e21fF58a555b8948340200C929296F19226490

// Deploying contracts with the account: 0x8D604fD29d1433C7a67066A5222E72000B245D30
// Account balance: 236162765190439904
// FunNFT contract deployed to address: 0xA0d323e56591271524B0EBC3f504eF5C0F93baf9

// Deploying contracts with the account: 0x8D604fD29d1433C7a67066A5222E72000B245D30
// Account balance: 232340490652217159
// FunNFT contract deployed to address: 0xB1452ac5c9b04557E9b07114CED70AaCc0596433
// Marketplace contract deployed to address: 0x3aBcCbE2B94A3988D1701aBb24d4A83ca7a31Afd