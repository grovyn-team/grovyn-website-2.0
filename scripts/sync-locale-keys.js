#!/usr/bin/env node
/**
 * Sync missing keys from en.json into all other locale files.
 * Only adds keys that are missing; never overwrites existing locale values.
 */
const fs = require("fs");
const path = require("path");

const messagesDir = path.join(__dirname, "..", "messages");
const enPath = path.join(messagesDir, "en.json");
const locales = ["fr", "de", "es", "pt", "ar", "hi", "zh"];

function deepMergeMissing(target, source) {
  const out = { ...target };
  for (const key of Object.keys(source)) {
    if (!(key in out)) {
      out[key] = source[key];
    } else if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key]) &&
      typeof source[key] !== "string"
    ) {
      out[key] = deepMergeMissing(
        typeof target[key] === "object" && target[key] !== null && !Array.isArray(target[key])
          ? target[key]
          : {},
        source[key]
      );
    }
  }
  return out;
}

const en = JSON.parse(fs.readFileSync(enPath, "utf8"));

for (const locale of locales) {
  const localePath = path.join(messagesDir, `${locale}.json`);
  if (!fs.existsSync(localePath)) continue;
  const localeData = JSON.parse(fs.readFileSync(localePath, "utf8"));
  const merged = deepMergeMissing(localeData, en);
  fs.writeFileSync(
    localePath,
    JSON.stringify(merged, null, 2) + "\n",
    "utf8"
  );
  console.log(`Synced missing keys into ${locale}.json`);
}

console.log("Done.");
