#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const chalk_1 = __importDefault(require("chalk"));
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const program = new commander_1.Command();
const TEMPLATES_DIR = path.join(__dirname, '../templates');
function getTargetPath(platform, isGlobal) {
    if (isGlobal && platform === 'antigravity') {
        return path.join(require('os').homedir(), '.gemini/antigravity/bmad'); // Just an example global path
    }
    const cwd = process.cwd();
    switch (platform) {
        case 'cursor': return path.join(cwd, '.cursor/rules');
        case 'claude': return path.join(cwd, '.claude');
        case 'codex': return path.join(cwd, '.codex');
        case 'antigravity':
        default:
            return path.join(cwd, '.agent');
    }
}
async function installModule(sourcePath, destPath) {
    if (!fs.existsSync(sourcePath)) {
        console.error(chalk_1.default.red(`Error: Module not found at ${sourcePath}`));
        process.exit(1);
    }
    await fs.copy(sourcePath, destPath, {
        filter: (src) => !src.includes('.DS_Store')
    });
}
program
    .name('bmad-db')
    .description('BMAD-DragonBall CLI to initialize and add AI agents/skills into your project')
    .version('1.0.0');
program
    .command('init')
    .description('Initialize BMAD-DragonBall core agents and workflows')
    .option('-p, --platform <type>', 'target platform format (antigravity, cursor, claude, codex)', 'antigravity')
    .option('-g, --global', 'Install to global knowledge directory (e.g., ~/.gemini/antigravity)', false)
    .action(async (options) => {
    console.log(chalk_1.default.blue(`[BMAD-DragonBall] Initializing Core System for platform: ${options.platform}...`));
    const targetDir = getTargetPath(options.platform, options.global);
    const coreDir = path.join(TEMPLATES_DIR, 'core');
    try {
        await fs.ensureDir(targetDir);
        await installModule(coreDir, targetDir);
        console.log(chalk_1.default.green(`\nSuccess! Core BMAD-DragonBall initialized at ${targetDir}`));
        console.log(chalk_1.default.yellow(`\nGrand-Priest, King-Kai, Bulma and the team are ready!`));
    }
    catch (err) {
        console.error(chalk_1.default.red(`Failed to initialize: ${err}`));
    }
});
program
    .command('add')
    .description('Add an extension pack (e.g. ai-pack, marketing-pack)')
    .argument('<pack>', 'The pack to install (e.g. ai-pack, frontend-pack)')
    .option('-p, --platform <type>', 'target platform format', 'antigravity')
    .action(async (pack, options) => {
    console.log(chalk_1.default.blue(`[BMAD-DragonBall] Summoning ${pack}...`));
    const targetDir = getTargetPath(options.platform, false);
    const packDir = path.join(TEMPLATES_DIR, 'library', pack);
    try {
        if (!fs.existsSync(packDir)) {
            console.error(chalk_1.default.red(`Pack '${pack}' not found in library.`));
            const packs = fs.readdirSync(path.join(TEMPLATES_DIR, 'library')).filter(f => !f.startsWith('.'));
            console.log(`Available packs: ${packs.join(', ')}`);
            return;
        }
        await fs.ensureDir(targetDir);
        await installModule(packDir, targetDir);
        console.log(chalk_1.default.green(`\nSuccess! Pack ${pack} has been added to ${targetDir}`));
    }
    catch (err) {
        console.error(chalk_1.default.red(`Failed to add pack: ${err}`));
    }
});
program.parse();
