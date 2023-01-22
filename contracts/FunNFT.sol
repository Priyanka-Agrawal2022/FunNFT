// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract FunNFT is ERC721URIStorage {

    uint public tokenCount;

    constructor() ERC721("FunNFT", "FN"){}

    function mintNFT(string memory _tokenURI) external returns(uint) {
        tokenCount++;

        _mint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);

        return tokenCount;
    }
}