# Turbin3 Prerequisite Tutorial (Solana Devnet - TypeScript)

This project is a step-by-step implementation of the Turbin3 Builders Cohort prerequisites. It demonstrates key Solana development skills using TypeScript and Anchor on the Devnet.

---

## 📁 Project Structure

- `keygen.ts`: Generates a new Solana keypair and saves the secret key.
- `airdrop.ts`: Requests 2 SOL from the devnet faucet.
- `transfer.ts`: Sends 0.1 SOL to the Turbin3 wallet address.
- `enroll.ts`: Initializes the on-chain account and submits completion using the Turbin3 program.
- `programs/Turbin3_prereq.ts`: Contains the IDL and type definition for the Turbin3 Anchor program.
- `dev-wallet.json`: Contains the keypair used for development.
- `Turbin3-wallet.json`: The wallet used for the Turbin3 submission.

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
