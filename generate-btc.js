const bitcoin = require("bitcoinjs-lib");
const { ECPairFactory } = require("ecpair");
const tinysecp = require("tiny-secp256k1");
const bip39 = require("bip39");
const { BIP32Factory } = require("bip32");
 
const ECPair = ECPairFactory(tinysecp);
const bip32 = BIP32Factory(tinysecp);
 
console.log("\n════════════════════════════════════════");
console.log("   ₿  Bitcoin Burner Wallet Generator");
console.log("   SegWit Native (bc1q...)");
console.log("════════════════════════════════════════\n");
 
// Generar mnemonic de 12 palabras
const mnemonic = bip39.generateMnemonic();
const seed    = bip39.mnemonicToSeedSync(mnemonic);
 
// Derivar keypair desde seed (path estándar BIP84 para SegWit)
const root    = bip32.fromSeed(seed);
const child   = root.derivePath("m/84'/0'/0'/0/0");
const keyPair = ECPair.fromPrivateKey(Buffer.from(child.privateKey));
 
const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey });
 
console.log("Address (SegWit):", address);
console.log("Private Key (WIF):", keyPair.toWIF());
console.log("Mnemonic (12 words):", mnemonic);
 
console.log("\n────────────────────────────────────────");
console.log("  ⚠️  Guarda las 12 palabras en papel.");
console.log("  El WIF sirve para importar en BlueWallet.");
console.log("  El mnemonic recupera la wallet completa.");
console.log("  Nunca compartas ninguna de las dos.");
console.log("────────────────────────────────────────\n");