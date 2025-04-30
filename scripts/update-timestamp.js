#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to config.ts
const configPath = path.join(__dirname, '..', 'src', 'config.ts');

// Read the current config file
const config = fs.readFileSync(configPath, 'utf8');

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Replace the LAST_UPDATED date with today's date
const updatedConfig = config.replace(
  /export const LAST_UPDATED = "(.*)"/,
  `export const LAST_UPDATED = "${today}"`
);

// Write back to the file
fs.writeFileSync(configPath, updatedConfig, 'utf8');

console.log(`Updated LAST_UPDATED to ${today} in config.ts`); 