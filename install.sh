#!/bin/bash
# BMAD-DragonBall (Golden Auto-Chain) 1-Click Installer
# Run: curl -sL https://raw.githubusercontent.com/.../install.sh | bash

set -e

REPO_URL="https://github.com/YourName/bmad-dragonball-core.git"
TARGET_DIR=$(pwd)
TEMP_DIR="/tmp/bmad-dragonball-install"

echo "=========================================================="
echo "🐉 Bắt đầu cài đặt Hệ sinh thái BMAD-DragonBall 🐉"
echo "=========================================================="
echo "Thư mục hiện tại: $TARGET_DIR"

if [ -d "$TARGET_DIR/.agent" ] || [ -d "$TARGET_DIR/_bmad" ]; then
    echo "⚠️ Phát hiện phiên bản BMAD cũ, tiến hành backup..."
    BACKUP_DIR="$TARGET_DIR/_bmad_backup_$(date +%s)"
    mkdir -p "$BACKUP_DIR"
    [ -d "$TARGET_DIR/.agent" ] && mv "$TARGET_DIR/.agent" "$BACKUP_DIR/"
    [ -d "$TARGET_DIR/templates" ] && mv "$TARGET_DIR/templates" "$BACKUP_DIR/"
    [ -d "$TARGET_DIR/scripts" ] && mv "$TARGET_DIR/scripts" "$BACKUP_DIR/"
    [ -d "$TARGET_DIR/_bmad" ] && cp -R "$TARGET_DIR/_bmad" "$BACKUP_DIR/"
    echo "✅ Đã backup cấu hình cũ tại: $BACKUP_DIR"
fi

echo "⬇️ Đang tải mã nguồn từ Github..."
rm -rf "$TEMP_DIR"
git clone "$REPO_URL" "$TEMP_DIR" --depth=1 --quiet

echo "📦 Đang bung Core Injection (19 Personas & Golden Auto-Chain)..."
rsync -avq "$TEMP_DIR/.agent/" "$TARGET_DIR/.agent/"
rsync -avq "$TEMP_DIR/templates/" "$TARGET_DIR/templates/"
rsync -avq "$TEMP_DIR/scripts/" "$TARGET_DIR/scripts/"
rsync -avq "$TEMP_DIR/_bmad/" "$TARGET_DIR/_bmad/"

echo "🔧 Khởi tạo file cấu hình cho dự án của bạn..."
if [ ! -f "$TARGET_DIR/_bmad/bmm/config.yaml" ]; then
    cp "$TARGET_DIR/_bmad/bmm/config.example.yaml" "$TARGET_DIR/_bmad/bmm/config.yaml"
    echo "   [INFO] Đã tạo _bmad/bmm/config.yaml (Hãy mở file này ra và điền tên của bạn!)"
fi

echo "🔑 Chấp cấp quyền thực thi cho các kịch bản Code Intelligence..."
chmod +x "$TARGET_DIR/scripts/"*.sh 2>/dev/null || true

# Dọn rác
rm -rf "$TEMP_DIR"

echo "=========================================================="
echo "🎯 CÀI ĐẶT THÀNH CÔNG!"
echo "BMAD-DragonBall đã được tích hợp vào source code của bạn."
echo "⚠️ LƯU Ý BẮT BUỘC:"
echo "Hãy cài đặt các MCP Server thiết kế (Figma MCP, Stitch MCP, Penpot MCP...) và github-mcp-server vào AI Client (Cursor/Antigravity) của bạn để phát huy tối đa sức mạnh phân tích UX & Kiến trúc!"
echo "=========================================================="
