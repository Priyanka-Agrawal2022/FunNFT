const { expect } = require("chai");
const { ethers } = require("hardhat");

// require("dotenv").config();
// const API_URL = process.env.API_URL;

describe("FunNFTMarketplace", async function() {
    let deployer, addr1, addr2, funNFT, marketplace;
    let feePercent = 1;
    let URI = "Sample URI";

    beforeEach(async function() {
        // Get contract factories
        const FunNFT = await ethers.getContractFactory("FunNFT");
        const Marketplace = await ethers.getContractFactory("Marketplace");

        // const contract = require("../artifacts/contracts/FunNFT.sol/FunNFT.json");
        // const contractAddress = "0xblah";

        // const provider = new ethers.providers.JsonRpcProvider(API_URL);
        // const signer = provider.getSigner();
        // const nftContract = new ethers.Contract(contractAddress, contract.abi, signer);

        //Get signers
        [deployer, addr1, addr2] = await ethers.getSigners();

        //Deploy contracts
        funNFT = await FunNFT.deploy();
        marketplace = await Marketplace.deploy(feePercent);
    });

    describe("Deployment", function() {
        it("Should track name & symbol of the nft collection", async function() {
            expect(await funNFT.name()).to.equal("FunNFT");
            expect(await funNFT.symbol()).to.equal("FN");
        });

        it("Should track feeAccount and feePercent of the marketplace", async function() {
            expect(await marketplace.feeAccount()).to.equal(deployer.address);
            expect(await marketplace.feePercent()).to.equal(feePercent);
        });
    });

    describe("Minting NFTs", function() {
        it("Should track each minted NFT", async function() {
          // addr1 mints an nft
          await funNFT.connect(addr1).mintNFT(URI);
          expect(await funNFT.tokenCount()).to.equal(1);
          expect(await funNFT.balanceOf(addr1.address)).to.equal(1);
          expect(await funNFT.tokenURI(1)).to.equal(URI);
          // addr2 mints an nft
          await funNFT.connect(addr2).mintNFT(URI);
          expect(await funNFT.tokenCount()).to.equal(2);
          expect(await funNFT.balanceOf(addr2.address)).to.equal(1);
          expect(await funNFT.tokenURI(2)).to.equal(URI);
        });
    });

    // describe("Making marketplace items", function() {
    //     beforeEach(async function() {
    //         // addr1 mints an nft
    //         await funNFT.connect(addr1).mintNFT(URI);
    //         // addr1 approves marketplace to spend nft
    //         await funNFT.connect(addr1).setApprovalForAll(marketplace.address, true);
    //     });
    // });
});