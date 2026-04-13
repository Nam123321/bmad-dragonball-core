#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const targetDir = process.cwd();
const sourceDir = path.join(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0];

if (command !== 'install') {
    console.log(`Usage: npx bmad-dragonball install`);
    process.exit(1);
}

console.log('==========================================================');
console.log('🐉 Khởi tạo hệ sinh thái BMAD-DragonBall (Golden Auto-Chain)');
console.log('==========================================================\n');

const dirsToCopy = ['.agent', 'templates', 'scripts', '_bmad'];

dirsToCopy.forEach(dir => {
    const srcPath = path.join(sourceDir, dir);
    const destPath = path.join(targetDir, dir);

    if (fs.existsSync(srcPath)) {
        console.log(`📦 Đang giải nén và cấu hình ${dir}...`);
        try {
            // Using rsync or cp -R to copy directories recursively on native OS
            execSync(`cp -R "${srcPath}" "${targetDir}/"`);
        } catch (e) {
            console.error(`❌ Lỗi khi tải ${dir}:`, e.message);
        }
    }
});

const configTemplate = path.join(targetDir, '_bmad', 'bmm', 'config.example.yaml');
const configDest = path.join(targetDir, '_bmad', 'bmm', 'config.yaml');

if (fs.existsSync(configTemplate) && !fs.existsSync(configDest)) {
    try {
        fs.copyFileSync(configTemplate, configDest);
        console.log('\n🔧 Đã trích xuất file cấu hình mặc định (config.yaml).');
    } catch (e) { }
}

try {
    execSync(`chmod +x "${targetDir}/scripts/"*.sh 2>/dev/null`);
} catch (e) { }

console.log('\n✅ CÀI ĐẶT THÀNH CÔNG!');
console.log('🚀 Mở Cursor/Antigravity và chạy lệnh /sprint-runner để kích hoạt Golden Auto-Chain!\n');

console.log(`
  🌟 100% free. 100% open source. Always.
  │     No paywalls. No gated content. Knowledge shared, not sold.
  │
  │  🌐 CONNECT:
  │    Website:   https://bmadcode.com/
  │    Discord:   https://discord.gg/gk8jAdXWmj
  │    YouTube:   https://www.youtube.com/@BMadCode
  │    X:         https://x.com/BMadCode
  │    Facebook:  https://facebook.com/@BMadCode
  │
  │  ⭐ SUPPORT THE PROJECT:
  │    Star us:   https://github.com/bmad-code-org/BMAD-METHOD/
  │    Donate:    https://buymeacoffee.com/bmad
  │    Corporate sponsorship and speaking inquiries: contact@bmadcode.com
  │
  │  Docs, blog, and latest updates: https://bmadcode.com/
  │
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

