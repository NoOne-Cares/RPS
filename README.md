# RSP : Rock Paper Scissors Lizard Spock on Ethereum

RSP is a decentralized Rock-Paper-Scissors-Lizard-Spock game built on the Ethereum blockchain. It combines smart contract logic with a full-stack monorepo application for a secure, real-time PvP experience using crypto stakes.

---

## Features

- Play RPSLS with friends using on-chain game logic  
- Commit-reveal scheme to ensure fairness  
- Real-time updates using WebSockets  
- Stake ETH and win based on smart contract outcome  
- Full-stack architecture powered by Turborepo  

---

## Tech Stack

| Layer                | Stack                                                                 |
|----------------------|-----------------------------------------------------------------------|
| Smart Contracts      | Solidity (EVM-compatible) |
| Frontend             | React + TypeScript |
| Blockchain Interaction | Viem, Wagmi, RainbowKit |
| Backend              | Node.js, Express, WebSocket (Socket.IO) |
| Database             | MongoDB with Mongoose |
| Styling              | Tailwind CSS |
| Authentication       | SIWE (Sign-In With Ethereum) |
| Monorepo Tooling     | Turborepo |

---

## Installation

### Prerequisites

- Node.js >=18
- MongoDB (local or cloud)
- Wallet (e.g. MetaMask or RainbowKit-compatible)
- Local Ethereum RPC for development

---

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/rsp.git
cd rsp
```

### 2. Install dependencies with Turborepo

```bash
pnpm install
# or
npm install
```

---

## Development

### Start All Apps (Turbo)

```bash
pnpm dev
```

Or manually:

### Start Backend

```bash
cd apps/backend
cp .env.example .env
npm run dev
```

### Start Frontend

```bash
cd apps/frontend
npm run dev
```

---

## Environment Variables

Backend `.env`:

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/yourDBName
FRONTEND_URL = http://localhost:5173
```


---

## Gameplay Flow

1. Player 1 commits to a move by hashing (keccak256) their move + salt.
2. Player 2 submits their move directly.
3. Player 1 reveals their move and salt.
4. Contract determines winner based on parity and magnitude rules.
5. Winner can claim the ETH stake.

---

## Real-Time Features

- Live game updates using Socket.IO
- Events broadcast to both players instantly
- No need to refresh to see opponent's move or result

---

## Folder Structure (Turborepo)

```
rsp/
├── apps/
│   ├── frontend/     # Frontend app
│   └── backend/       # Backend API and socket serve
├── packages/         # Shared utils, types, config
└── turbo.json        # Turborepo config
```

---

## To Do
  
- [ ] Deploy to a testnet (e.g. Sepolia)  
- [ ] Improve error handling and edge cases  
- [ ] Add unit and integration tests  

---

## Security Notes

- Uses commit-reveal to prevent front-running  
- All ETH is locked via smart contract  
- Backend validates moves and handles reveal logic  

