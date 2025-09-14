# Carbono — Membresía verde on-chain (MVP)

**Carbono** es un experimento educativo de membresías apoyadas en tecnología blockchain.  
Cualquiera puede comprar la membresía (token **CBO**, ERC-20), pero la **reputación** y los **mejores beneficios** se ganan con acciones que favorecen al planeta (NFT **Experience**, ERC-721).

- Demo: https://v0-dapp-next-js-wagmi.vercel.app/
- Red: **Sepolia (testnet)** — solo fines educativos.
- Estado: **MVP** (en construcción).

---

## 🧭 Visión en 30 segundos

- **CBO (ERC-20):** se compra con sepoliaETH a un precio fijo configurable (p. ej. `0.001 ETH` por CBO). Útil como “llave” de acceso básico.
- **Experience (ERC-721):** NFT ligado a acciones pro-ambiente; sirve para reputación, niveles y beneficios.
- **Front:** Next.js + TypeScript, UI minimal.
- **Infra:** RPC EVM (Infura u otro), almacenamiento en **IPFS** (Pinata), despliegue en **Vercel**.

> **Advertencia:** No es consejo financiero. No usar en mainnet. Código y contratos sin auditoría.

---

## 🏗️ Arquitectura (resumen)
Wallet (MetaMask)
│
▼
RPC EVM (Infura/Alchemy/otro) ── Sepolia (Contratos CBO y EXP)
│
▼
Frontend Next.js (Vercel) ──► Lectura/tx on-chain (ethers/viem)
│
└──► IPFS (Pinata) para assets/metadata del NFT


Recursos útiles:
- MetaMask: https://metamask.io/download
- Infura (Ethereum / IPFS): https://www.infura.io/product/ethereum
- Pinata (IPFS): https://docs.pinata.cloud/
- OpenZeppelin (ERC-20/721): https://docs.openzeppelin.com/contracts/4.x/
- Faucets Sepolia: https://faucets.chain.link/sepolia

---

## 🧰 Stack

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (y componentes tipo shadcn ui)
- **Web3:** (según config del proyecto) ethers/viem + proveedor RPC
- **Infra:** Vercel (hosting), RPC (Infura/otro), Pinata (IPFS)

> Si usas otra librería Web3, aclárala aquí.

---

## 📦 Requisitos

- **Node.js 18+ (recomendado 20/22)**
- Gestor de paquetes: `npm` o `pnpm` (no mezclar locks)
- Wallet EVM (MetaMask) configurada en **Sepolia**

---

## ⚙️ Variables de entorno

Crea un archivo `.env.local` en la raíz con, por ejemplo:

# Red / RPC
NEXT_PUBLIC_CHAIN_ID=11155111

NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/TU_INFURA_KEY

# Contratos (Sepolia)
NEXT_PUBLIC_CARBONO=0xaf9cc0235EEf4976AB42f5f353F17cB4BCdE7F04   # dirección del ERC-20 CBO
NEXT_PUBLIC_EXPERIENCIA=0x00D7De742A7951f0CB2Ff9dD26722cF4C51162D3 #dirección del ERC-721 Experience

# IPFS / Pinata (opcional según uso en front)
NEXT_PUBLIC_PINATA_GATEWAY=https://<tu-gateway>.mypinata.cloud/ipfs ```

---

Mantén claves privadas fuera del front. Variables NEXT_PUBLIC_* quedan expuestas en el navegador.

Desarrollo local
