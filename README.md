# 🐉 BMAD-DragonBall (Golden Auto-Chain Edition)

**The Ultimate Agentic Framework for Open Source Autonomy**

BMAD-DragonBall là phiên bản tiên tiến nhất dựa trên cấu trúc BMAD. Framework được nâng cấp lên 19 Agent Personas tích hợp cơ chế **Golden Auto-Chain**, giúp luân chuyển công việc hoàn toàn tự động bằng trí tuệ nhân tạo (từ ý tưởng → bóc tách specs → mô phỏng UI UX → Lập trình → Tự fix bug → Auto-Test) mà không cần sự gián đoạn của con người ở các bước kỹ thuật rập khuôn.

## 🚀 Tính năng Cốt lõi (Core Features)
- **19 Chuyên Gia AI (Personas):** Phân chia rõ ràng vòng đời phần mềm (Từ Business Bulma khơi gợi ý tưởng, Android-18 làm UI Spec, Vegeta code, Hit làm Edge Case Scan, đến Tien-Shinhan viết Test).
- **Golden Auto-Chain & Auto-Fix:** Vòng lặp chuyển quyền tự động 100%. Nếu Code review (`Hit`) fail hoặc Test (`Tien-Shinhan`) fail, hệ thống tự ném lỗi quay lại cho `Vegeta` sửa mà không chờ nhắc nhở.
- **Code Intelligence Hook:** Tích hợp `Analyze Codebase` và `FeatureGraph` chạy ẩn để bảo đồ họa luồng dữ liệu (Data Dependency) cho hệ thống sau mỗi lần deploy.
- **Tri-Agent LITE Scan:** Kiểm tra chéo (Data, Event AIOps, Testability) ngay từ khi story (Spec) vừa được phác thảo.
- **Design Agnosticism:** Khả năng kết nối mở rộng (Agnostic Design MCP) để cắm-rút Design Token vào mọi nền tảng (Figma, Stitch, Penpot...).

---

## 🛠 Hướng dẫn Cài đặt (Installation)

**Quick Start**

Prerequisites: `Node.js` v18+

Chạy dòng lệnh CLI sau đứng ở gốc dự án của bạn (áp dụng cho mọi nền tảng tech stack):

```bash
npx github:Nam123321/bmad-dragonball-core install
```
> *(Tập lệnh CLI sẽ tự động tải các components `.agent`, `templates`, `scripts` về và phân bổ vào dự án).*

---

## 🤖 Thiết lập Mạng Nhện (MCP Server Setup) - BẮT BUỘC

Để kích hoạt "**Ảo thuật gia**" phân tích UI/UX (Android-18) và Kiến trúc sư (Piccolo), Client AI của bạn (như Cursor, Claude Hậu Đài, Antigravity) phải được kết nối các bộ MCP Servers sau:

1. **Design Solution MCP Server:** 
   Bạn dùng ứng dụng nào thì điền thông số ứng dụng đó (vd: Figma MCP, Stitch MCP, Penpot MCP). Điều này giúp AI trực tiếp chui vào bản vẽ thiết kế để cào biến số Design Tokens cho dev.
2. **Github-mcp-server:**
   Bắt buộc cài để luồng Deep-Research (Của Piccolo và Gotenks) có thể cào các Repository mã nguồn mở khác làm dữ liệu tham chiếu (Reference) khi code.

> Xem cấu hình MCP trong mục `Settings` của IDE bạn đang xài.

---

## 🏎 Cách Chạy Luồng Chớp Nhoáng (Sprint Runner)

Sau khi cài đặt thành công, hãy vào mục Chat với AI của bạn, bấm gọi Workflow:
`/sprint-runner`
*(Hãy mỉm cười và xem các Agent giao tiếp, pass code và tự fix lỗi qua lại một cách điên rồ!)*
