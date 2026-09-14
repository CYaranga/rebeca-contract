// Genera mocks/handlers.ts (MSW v2) desde openapi.yaml: un handler por operación que devuelve el
// `example` del 200 si existe, o {} . Regenerar con `npm run build:mocks`; no editar a mano.
import { readFileSync, writeFileSync } from "node:fs";
import { parse } from "yaml";

const doc = parse(readFileSync("openapi.yaml", "utf8"));
const lines = [
  "// GENERADO por scripts/gen-mocks.mjs desde openapi.yaml. No editar a mano.",
  'import { http, HttpResponse } from "msw";',
  "",
  "export const handlers = [",
];
for (const [path, ops] of Object.entries(doc.paths ?? {})) {
  const mswPath = path.replace(/\{([^}]+)\}/g, ":$1");
  for (const [method, op] of Object.entries(ops)) {
    if (!["get", "post", "put", "patch", "delete"].includes(method)) continue;
    const ok = op.responses?.["200"] ?? op.responses?.["201"];
    const json = ok?.content?.["application/json"];
    const body = json?.example ?? json?.schema?.example ?? {};
    lines.push(`  // ${op.operationId ?? ""}`.trimEnd());
    lines.push(`  http.${method}("*${mswPath}", () => HttpResponse.json(${JSON.stringify(body)})),`);
  }
}
lines.push("];", "");
writeFileSync("mocks/handlers.ts", lines.join("\n"));
console.log(`mocks/handlers.ts: ${lines.filter((l) => l.startsWith("  http.")).length} handlers`);
