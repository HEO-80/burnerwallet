const { ethers } = require("ethers");

console.log("\n════════════════════════════════════════");
console.log("   🔥 EVM Burner Wallet Generator");
console.log("   BSC · Ethereum · Polygon");
console.log("════════════════════════════════════════\n");

const wallet = ethers.Wallet.createRandom();

console.log("Address:    ", wallet.address);
console.log("Private Key:", wallet.privateKey);
console.log("Mnemonic:   ", wallet.mnemonic.phrase);

console.log("\n────────────────────────────────────────");
console.log("  ⚠️  Save these credentials offline.");
console.log("  Never share your private key.");
console.log("  Never commit this output to Git.");
console.log("────────────────────────────────────────\n");