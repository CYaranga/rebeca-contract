# rebeca-contract

Contrato del API de Rebeca (D11 de `claude-stack/docs/herdr-setup.md`). Fuente única: `openapi.yaml`.

- `types/index.d.ts` — generado con openapi-typescript (`npm run build:types`).
- `mocks/handlers.ts` — handlers MSW v2 generados (`npm run build:mocks`). Requiere `msw` en el consumidor.
- Consumo por versión: `npm i github:CYaranga/rebeca-contract#v1.0.0` · en TS: `import type { paths } from "rebeca-contract"`.

Flujo: solo el agente `architect` lo edita, con `claude-stack/scripts/lock.sh`. Merge a `main`, tag `vX.Y.Z`, y cada app sube la versión en su `package.json`. Orden de merge: contrato → backend → frontends.
