# Carbono — Membresía verde on-chain (MVP)

**Carbono** es un experimento educativo de membresías apoyadas en tecnología *blockchain*.
Cualquiera puede comprar la membresía (token **CBO**, ERC‑20), pero la **reputación** y los **mejores beneficios**
se ganan con acciones que favorecen al planeta (NFT **Experience**, ERC‑721).

- Demo: https://v0-dapp-next-js-wagmi.vercel.app/
- Red: **Sepolia (testnet)** — solo fines educativos.
- Estado: **MVP** (en construcción).

> **Advertencia:** No es consejo financiero. No usar en mainnet. Código y contratos sin auditoría.

---

## 🧭 Visión en 30 segundos

- **CBO (ERC‑20):** se compra con ETH a un precio fijo configurable (p. ej. `0.001 ETH` por CBO). Útil como “llave” de acceso básico.
- **Experience (ERC‑721):** NFT ligado a acciones pro‑ambiente; sirve para reputación, niveles y beneficios.
- **Front:** Next.js + TypeScript, UI minimal.
- **Infra:** Proveedor RPC (Infura/otro), almacenamiento en **IPFS** (Pinata), despliegue en **Vercel**.

---

## 🏗️ Arquitectura (resumen)

```
Wallet (MetaMask)
        │
        ▼
RPC EVM (Infura/Alchemy/otro) ── Sepolia (Contratos CBO y EXP)
        │
        ▼
Frontend Next.js (Vercel) ──► Lectura/tx on-chain (ethers/viem)
        │
        └──► IPFS (Pinata) para assets/metadata del NFT
```

**Recursos útiles (verificación/instalación):**  
MetaMask: https://metamask.io/download  
Infura (Ethereum/IPFS): https://www.infura.io/ 
Pinata (IPFS): https://docs.pinata.cloud/  
OpenZeppelin (ERC‑20/721): https://docs.openzeppelin.com/contracts/4.x/  
Faucets Sepolia: https://faucets.chain.link/sepolia

---

## 🧰 Stack

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (+ shadcn/ui si aplica)
- **Web3:** ethers o viem (según configuración)
- **Infra:** Vercel (hosting), RPC (Infura/otro), Pinata (IPFS)

---

## 📦 Requisitos

- **Node.js 18+ (recomendado 20/22)**
- Gestor de paquetes: `npm` o `pnpm` (no mezclar *lockfiles*)
- Wallet EVM (MetaMask) configurada en **Sepolia**

---

## ⚙️ Variables de entorno

Crea un archivo `.env.local` en la raíz con, por ejemplo:

```bash
# Red / RPC
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/TU_INFURA_KEY

# Contratos (Sepolia)
NEXT_PUBLIC_CARBONO=0xaf9cc0235EEf4976AB42f5f353F17cB4BCdE7F04   # dirección del ERC-20 CBO
NEXT_PUBLIC_EXPERIENCIA=0x00D7De742A7951f0CB2Ff9dD26722cF4C51162D3 # dirección del ERC-721 Experience

# IPFS / Pinata (opcional)
NEXT_PUBLIC_PINATA_GATEWAY=https://<tu-gateway>.mypinata.cloud/ipfs
```

> Mantén **claves privadas** fuera del front. Las variables `NEXT_PUBLIC_*` quedan expuestas en el navegador.

---

## 🖥️ Desarrollo local

```bash
# 1) Clonar
git clone https://github.com/villawolfpy/carbono.git
cd carbono

# 2) Instalar dependencias
npm install
# o
pnpm install

# 3) Variables
# (recomendado agregar al repo un .env.local.example)
cp .env.local.example .env.local  # si existe el ejemplo
# (rellena valores)

# 4) Arrancar
npm run dev
# luego abre http://localhost:3000
```

**Scripts típicos** (ajusta a tu `package.json`):
```bash
npm run dev       # servidor de desarrollo
npm run build     # build de producción
npm run start     # servir producción
npm run lint      # linting
```

---

## 🗂️ Estructura del proyecto

```
app/           # rutas y UI (App Router)
components/    # componentes reutilizables
hooks/         # hooks de React (p. ej. wallet/contratos)
lib/           # config/utilidades (ABI, helpers, clients)
public/        # assets estáticos
styles/        # estilos globales
```
> Ajusta esta sección si cambias carpetas o añades `/contracts`, `/tests`, etc.

---

## 🔗 Contratos (Sepolia)

- **CBO (ERC‑20):** `0x...`  ← TODO
  - Precio por token (wei) configurable por el owner.
  - `buyCarbonoToken20()`: *mint* proporcional a `msg.value`.
  - `withdraw()`: retira ETH acumulado (solo `owner`).

- **Experience (ERC‑721):** ` 0x42e56edEA751Ba755D8c37d015f8C9bfD6ddAD8b`
  - Metadata/imagenes en IPFS (Pinata).
  - Lógica de minteo según criterios de reputación.

> https://sepolia.etherscan.io/address/0x42e56edEA751Ba755D8c37d015f8C9bfD6ddAD8b
> https://sepolia.etherscan.io/token/0x00d7de742a7951f0cb2ff9dd26722cf4c51162d3

---

## 🧪 Flujo del usuario (MVP)

1. Conectar wallet (MetaMask) en **Sepolia**.
2. Comprar **CBO** enviando ETH mediante la UI (`buyCarbonoToken20`).
3. Ver saldo CBO y estados básicos.
4. (Opcional) Mintear **NFT Experience** tras cumplir criterio (o desde panel admin).
5. Consultar metadata vía gateway IPFS (Pinata).

---

## 🔒 Seguridad y alcance

- Proyecto educativo sin auditoría. **No usar en mainnet.**
- Evitar credenciales en el repo; usar variables de entorno.
- Funciones sensibles (precio/withdraw/mint) restringidas a `owner` o roles.
- Agregar pruebas unitarias si migras a Hardhat/Foundry.

---

## 🗺️ Roadmap sugerido

- [ ] Publicar direcciones de contratos y enlazar a Etherscan (Sepolia)
- [ ] Agregar `.env.local.example` y documentación de despliegue
- [ ] Screenshots/GIF del flujo principal
- [ ] Tests (Foundry/Hardhat) + CI en GitHub Actions
- [ ] Métrica de **reputación** (on/off-chain) y página de perfil
- [ ] Página **/admin** más robusta (gestión de precio, retiros, minteo)
- [ ] i18n (ES/EN) y accesibilidad (a11y)
- [ ] Revisión de seguridad/auditoría ligera

---

## 🤝 Contribuir

1. Haz *fork* y crea tu rama: `feat/mi-feature`
2. Commits claros (Conventional Commits) y PR descriptivo (con capturas).
3. Revisa linters/formatters antes de abrir PR.

---

## 📄 Licencia

MIT © 2025 Membresía_Blockchain —  `LICENSE` .
