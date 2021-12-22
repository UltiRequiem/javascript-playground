import { fileURLToPath } from "node:url";
import { dirname as pathDirname } from "node:path";

export function dirname(importMeta) {
  return pathDirname(filename(importMeta));
}

export function filename(importMeta) {
  return importMeta.url ? fileURLToPath(importMeta.url) : "";
}
