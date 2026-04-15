#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import * as fs from 'fs-extra';
import * as path from 'path';

const program = new Command();
const TEMPLATES_DIR = path.join(__dirname, '../templates');

function getTargetPath(platform: string, isGlobal: boolean): string {
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

async function installModule(sourcePath: string, destPath: string) {
  if (!fs.existsSync(sourcePath)) {
    console.error(chalk.red(`Error: Module not found at ${sourcePath}`));
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
    console.log(chalk.blue(`[BMAD-DragonBall] Initializing Core System for platform: ${options.platform}...`));
    
    const targetDir = getTargetPath(options.platform, options.global);
    const coreDir = path.join(TEMPLATES_DIR, 'core');
    
    try {
      await fs.ensureDir(targetDir);
      await installModule(coreDir, targetDir);
      console.log(chalk.green(`\nSuccess! Core BMAD-DragonBall initialized at ${targetDir}`));
      console.log(chalk.yellow(`\nGrand-Priest, King-Kai, Bulma and the team are ready!`));
    } catch (err) {
      console.error(chalk.red(`Failed to initialize: ${err}`));
    }
  });

program
  .command('add')
  .description('Add an extension pack (e.g. ai-pack, marketing-pack)')
  .argument('<pack>', 'The pack to install (e.g. ai-pack, frontend-pack)')
  .option('-p, --platform <type>', 'target platform format', 'antigravity')
  .action(async (pack, options) => {
    console.log(chalk.blue(`[BMAD-DragonBall] Summoning ${pack}...`));
    
    const targetDir = getTargetPath(options.platform, false);
    const packDir = path.join(TEMPLATES_DIR, 'library', pack);
    
    try {
      if (!fs.existsSync(packDir)) {
        console.error(chalk.red(`Pack '${pack}' not found in library.`));
        const packs = fs.readdirSync(path.join(TEMPLATES_DIR, 'library')).filter(f => !f.startsWith('.'));
        console.log(`Available packs: ${packs.join(', ')}`);
        return;
      }
      
      await fs.ensureDir(targetDir);
      await installModule(packDir, targetDir);
      console.log(chalk.green(`\nSuccess! Pack ${pack} has been added to ${targetDir}`));
    } catch (err) {
      console.error(chalk.red(`Failed to add pack: ${err}`));
    }
  });

program.parse();
