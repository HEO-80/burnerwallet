const bitcoin = require("bitcoinjs-lib");
const { ECPairFactory } = require("ecpair");
const tinysecp = require("tiny-secp256k1");

const ECPair = ECPairFactory(tinysecp);

console.log("\n════════════════════════════════════════");
console.log("   ₿  Bitcoin Burner Wallet Generator");
console.log("   SegWit Native (bc1q...)");
console.log("════════════════════════════════════════\n");

const keyPair = ECPair.makeRandom();
const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey });

console.log("Address (SegWit):", address);
console.log("Private Key (WIF):", keyPair.toWIF());

console.log("\n────────────────────────────────────────");
console.log("  ⚠️  Import WIF key into BlueWallet");
console.log("  or Trust Wallet to access funds.");
console.log("  Never share your private key.");
console.log("────────────────────────────────────────\n");