require("@nomicfoundation/hardhat-toolbox");
require("hardhat-circom");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",

  circom: {
    inputBasePath: "./circuits",
    ptau: "./powersOfTau28_hez_final_12.ptau",
    circuits: [
      {
        name: "ageCheck",
      },
    ],
  },
};
