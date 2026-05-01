# 🧭 Step by Step — Burner Wallet Setup

Complete guide to generate, secure, and use your burner wallets.

---

## 📦 Step 1 — Clone & Install

```bash
git clone https://github.com/HEO-80/burnerwallet.git
cd burnerwallet
npm install
```

---

## 🔥 Step 2 — Generate EVM Wallet (BSC / Ethereum / Polygon)

For trading bots and DeFi interactions.

```bash
npm run evm
# or
node generate-evm.js
```

Output in terminal:
Address:     0xAbc123...
Private Key: 0x4f3c...
Mnemonic:    word1 word2 word3 ... word12

**What to do immediately:**

| Data | Action |
|------|--------|
| `Address` | Save it — it's public, use it anywhere |
| `Private Key` | Paste into your bot's `.env` (without the `0x`) |
| `Mnemonic` | Write on paper + store physically. This recovers the wallet |

Plug into your bot:
```env
PRIVATE_KEY=4f3c...        # Without 0x prefix
SNIPER_ADDRESS=0xAbc123...
```

---

## ₿ Step 3 — Generate Bitcoin Wallet (SegWit)

For P2P purchases (Bisq, HodlHodl) and BTC accumulation.

```bash
npm run btc
# or
node generate-btc.js
```

Output in terminal:
Bitcoin Address (SegWit):  bc1q...
Private Key (WIF):         KwDi...

**What to do immediately:**

| Data | Action |
|------|--------|
| `Address` | Share it to receive BTC |
| `Private Key (WIF)` | Import into BlueWallet or Trust Wallet |

---

## 🔐 Step 4 — Secure your keys

The script **does not save anything**. Output appears once in the terminal and is gone.
✅ Write the Mnemonic on paper
✅ Store it physically — not in photos, not in cloud
✅ Paste Private Key into .env only
✅ Never commit .env to GitHub
✅ Fund the burner with only what the bot needs

> For significant capital — engrave the mnemonic on a steel plate.
> Fireproof, waterproof, permanent.

---

## 🗺️ Step 5 — Wallet Architecture
Trading bot  ──▶  Burner Wallet (EVM)  ──▶  profits  ──▶  Rabby Wallet
P2P Bitcoin  ──▶  Burner Wallet (BTC)  ──▶  savings  ──▶  BlueWallet / Trust Wallet
Fiat         ──▶  Exchange (Binance)   ──▶  on/off ramp only

One wallet per purpose. One exposure per failure point.

---

## ⚠️ Security Rules

| Rule | Why |
|------|-----|
| Burner holds only operating capital | If compromised, loss is isolated |
| Never reuse a burner across projects | Cross-contamination of exposure |
| Mnemonic offline only | Cloud = third party = risk |
| Generate offline for large amounts | No network = no interception |

Son wallets reales y funcionales desde el momento en que las generas.
La EVM (0x...) — puedes usarla en BSC, Ethereum, Polygon, cualquier red EVM. Para meter fondos simplemente envías BNB/ETH/tokens a esa dirección. Para verla en BSC: bscscan.com y buscas la address.
La Bitcoin (bc1q...) — wallet SegWit real de Bitcoin. Para usarla importa la Private Key (WIF) en BlueWallet o Trust Wallet y ya aparece como una wallet tuya. Puedes recibir BTC directamente en esa dirección.
Lo que tienes que hacer ahora:

La EVM → mete la private key en el .env del Bot 14 y quita la de MetaMask
La Bitcoin → importa la WIF en BlueWallet/Trust Wallet para poder ver el saldo y mover fondos

Y recuerda — si no guardaste la mnemonic/WIF en papel ya, hazlo ahora antes de cerrar el terminal o cualquier sitio donde la tengas copiada.