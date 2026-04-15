---
name: skl-simulator
description: Giả lập test deliverable trước khi deploy — tìm bug/gap/điểm mạnh → Kaizen version mới. Trigger khi "test thử", "giả lập", "simulate", "chạy thử skill", "check chất lượng", "thẩm định", "đánh giá trước khi dùng", "review deliverable", "stress test". Dùng cho mọi loại output: skill, prompt, web app, plan, SOP, email, chatbot, policy, training, automation, pitch deck, landing page.
---

# SKL_Simulator v1.0
**Version:** 1.0 | **Cập nhật:** 05/04/2026 | **Built by:** _SKILL_CREATOR v3.1

---

## MỤC ĐÍCH

Framework giả lập test bất kỳ deliverable nào (skill, prompt, web app, plan, SOP Excel, email, chatbot, landing page, policy, training, automation, pitch deck, hoặc loại chưa biết trước) — tìm bug, gap, điểm mạnh → xuất summary chấm điểm → duyệt → build version cải tiến. Không xuất nội dung giả lập chi tiết — chỉ summary + verdict + file cải tiến. Tiết kiệm token, tránh loop vô tận.

**Tool:** Không cần Code Execution / Web Search. Skill này chạy hoàn toàn bằng reasoning.

---

## BỨC TƯỜNG — ĐỌC TRƯỚC KHI LÀM GÌ

| Rule | Giá trị | Lý do |
|------|---------|-------|
| Max vòng / session | **3** | Vòng 4 = diminishing returns → chuyển expert review |
| Test case / vòng | **10-30** (adaptive, xem Bước 1) | Đủ cover mà không đốt token |
| Score PASS | **≥ 8.5 TB** | Dưới 8.5 = còn gap đáng kể |
| Delta stop | **< 0.5 sau 2 vòng liên tiếp** | Không improve = cần góc nhìn khác, không phải thêm vòng |
| Output rule | **KHÔNG xuất nội dung giả lập chi tiết** | Chỉ xuất summary table + verdict. Tiết kiệm 60-70% token |
| Hiển thị vòng | **Ghi rõ "Vòng X/3"** | User biết còn bao nhiêu quota |
| Force stop | Vòng 3 xong mà < 8.5 → **DỪNG**, ghi rõ cần expert | Không cho loop vòng 4 dù user xin |

---

## BƯỚC 0 — NHẬN DELIVERABLE + PHÂN LOẠI

### 0A. User paste/đính kèm deliverable → đọc toàn bộ trước khi làm gì.

### 0B. Phân loại vào 1 trong 13 loại:

| # | Loại | Nhận dạng |
|---|------|-----------|
| 1 | **Skill (.md)** | YAML frontmatter, workflow step-by-step, trigger phrases |
| 2 | **Prompt (task/system)** | CO-STAR, RISEN, RTF, BUILD, hoặc dạng instruction cho AI |
| 3 | **Web App** | React/HTML/JS code, UI component, artifact |
| 4 | **Plan** | Timeline, budget, roadmap, campaign, content calendar |
| 5 | **SOP Excel** | Quy trình, flowchart, T-sheet, checklist, openpyxl code |
| 6 | **Email template/series** | Subject, body, CTA, nurture sequence |
| 7 | **Chatbot/AI Project** | System prompt + KB architecture + skill config |
| 8 | **Landing page/UI** | Sales page, form, conversion flow, mockup |
| 9 | **Training material** | Onboarding doc, quiz, knowledge check, SOP training |
| 10 | **Policy/quy định** | Chính sách nội bộ, KPI framework, compliance doc |
| 11 | **Pitch deck/presentation** | Slide structure, story arc, investor ask |
| 12 | **Automation workflow** | Trigger → action → condition logic, Zapier/Make/n8n flow |
| 13 | **Wildcard/Custom** | Không khớp 1-12 → hỏi 3 câu (xem 0C) |

### 0C. Nếu loại 13 (Wildcard) → hỏi ngay:
1. Deliverable này dùng để làm gì?
2. Ai là người dùng cuối?
3. Output đúng trông như thế nào?

→ Từ câu trả lời, tự sinh 2-3 tiêu chí đánh giá bổ sung (cộng thêm vào 6 trục core ở Bước 2).

### 0D. Xác nhận với user:
> "Deliverable: [tên]. Loại: [X]. Tao sẽ chạy giả lập [N] test case. OK?"

---

## BƯỚC 1 — XÁC ĐỊNH SỐ TEST CASE (adaptive)

Đếm trong deliverable: số bước + số rẽ nhánh + số actor/role + số output.

| Độ phức tạp | Điều kiện | Số test case |
|-------------|-----------|-------------|
| **Nhẹ** | ≤ 3 bước, 1 output, không rẽ nhánh | **10** |
| **Vừa** | 4-6 bước, có rẽ nhánh HOẶC 2+ actor | **15-20** |
| **Nặng** | > 6 bước, multi-actor, multi-output, logic phức tạp | **25-30** |

User có thể override: "Chạy 30 case" → chấp nhận nếu ≤ 30. Yêu cầu > 30 → từ chối, giải thích diminishing returns.

---

## BƯỚC 2 — CHẠY GIẢ LẬP (trong đầu — KHÔNG XUẤT CHI TIẾT)

### 2A. Generate test case đa dạng (trong đầu):
- **Happy path:** Input chuẩn, flow bình thường
- **Edge case:** Input thiếu, input lạ, giá trị biên, unicode, data trống
- **Stress:** Volume lớn, nhiều user cùng lúc, file nặng
- **Cross-domain:** Dùng cho phòng ban / ngành khác (nếu deliverable claim universal)
- **Negative:** Input sai hoàn toàn, user cố phá, misuse
- **Persona:** NV mới (không biết gì) vs Senior (biết nhiều) → cả 2 có dùng được không?

Phân bổ đa dạng — không chạy 10 case happy path.

### 2B. Với mỗi test case, đánh giá mental:
- Deliverable xử lý được không? → Nếu fail → ghi bug
- Output có đạt kỳ vọng không? → Nếu lệch → ghi gap
- Có bước thừa / token lãng phí không? → Ghi efficiency issue
- Có gì hay, xử lý tốt? → Ghi strength

### 2C. Chấm điểm 6 trục core:

| # | Trục | Đo gì |
|---|------|-------|
| 1 | **Completeness** | Đủ thành phần? Thiếu section nào? |
| 2 | **Clarity** | NV đọc lần đầu hiểu + làm được? Có mơ hồ? |
| 3 | **Edge Cases** | Input lạ / tình huống biên → xử lý ổn? |
| 4 | **Efficiency** | Bước thừa? Token lãng phí? Có cách gọn hơn? |
| 5 | **Scalability** | Domain / phòng ban khác dùng được? |
| 6 | **Output Quality** | Kết quả cuối production-ready? |

### 2D. Tiêu chí bổ sung theo loại (auto-nhúng, KHÔNG hỏi user):

| Loại | Tiêu chí thêm |
|------|---------------|
| Skill (.md) | Trigger accuracy, ≤ 150 dòng, YAML valid, backward compatible |
| Prompt | Framework phù hợp, context nhúng đủ, format output rõ ràng |
| Web App | UI/UX flow, responsive, error state, performance, accessibility |
| SOP Excel | Dropdown thật, IFERROR bao formula, data mẫu đa dạng, protection |
| Email/series | Tone nhất quán, CTA rõ, mobile preview, unsubscribe, sequence logic |
| Chatbot/Project | System prompt ≤ 800 token, KB phân tách đúng, edge reply, escalation |
| Landing page | Conversion flow, mobile-first, load speed, CTA hierarchy, trust signal |
| Plan | Feasibility, timeline hợp lý, budget phân bổ logic, KPI đo được |
| Policy | Legal coverage, loophole check, ngôn ngữ rõ ràng, enforcement mechanism |
| Training | Knowledge transfer rate, quiz/check validity, progressive difficulty |
| Automation | Trigger logic đúng, failure handling, idempotency, retry mechanism |
| Pitch deck | Story arc, data credibility, ask rõ ràng, slide count hợp lý |
| Wildcard | Dùng 2-3 tiêu chí đã sinh từ Bước 0C |

---

## BƯỚC 3 — XUẤT SUMMARY (format cố định)

```
## KẾT QUẢ GIẢ LẬP — Vòng [X/3]
Deliverable: [tên] | Loại: [type] | Version: [current]
Test case: [N] ([nhẹ/vừa/nặng])

### ĐIỂM SỐ
| Trục | Điểm | Ghi chú nhanh |
|------|-------|---------------|
| Completeness | X/10 | ... |
| Clarity | X/10 | ... |
| Edge Cases | X/10 | ... |
| Efficiency | X/10 | ... |
| Scalability | X/10 | ... |
| Output Quality | X/10 | ... |
| [Tiêu chí bổ sung 1] | X/10 | ... |
| [Tiêu chí bổ sung 2] | X/10 | ... |
| **TRUNG BÌNH** | **X.X/10** | |

### BUG / GAP
1. 🔴 [Critical — mô tả ngắn] → Fix: [gợi ý cụ thể]
2. 🟡 [Medium — mô tả ngắn] → Fix: [gợi ý]
3. 🟢 [Minor — mô tả ngắn] → Fix: [gợi ý]

### ĐIỂM MẠNH (giữ nguyên khi cải tiến)
1. ✅ [điểm mạnh — tại sao tốt]
2. ✅ [điểm mạnh]

### VERDICT
```

**Logic verdict:**

| Điều kiện | Verdict | Action |
|-----------|---------|--------|
| TB ≥ 8.5 | ✅ **PASS** — Production-ready | Dừng. Giao luôn |
| TB 7.0-8.4 | ⚠️ **FIXABLE** — Cần fix rồi chạy lại | → Duyệt fix? Y → vòng tiếp |
| TB < 7.0 | 🔴 **REBUILD** — Cấu trúc có vấn đề lớn | → Liệt kê root cause, đề xuất rebuild |
| Delta < 0.5 sau 2 vòng | 🛑 **STOP** — Diminishing returns | → Dừng, đề xuất expert/góc nhìn khác |
| Vòng 3 xong, vẫn < 8.5 | 🛑 **FORCE STOP** | → Ghi rõ: "Hết quota 3 vòng. Cần expert review hoặc phiên mới với góc tiếp cận khác." |

---

## BƯỚC 4 — BUILD VERSION CẢI TIẾN (chỉ khi user duyệt)

### 4A. Nếu deliverable là file .md (skill, prompt, plan, policy, training):
- Xuất **file .md cải tiến hoàn chỉnh** — copy-paste được ngay
- Header ghi changelog: `v1.0 → v1.1: Fixed [X], Improved [Y], Added [Z]`
- Giữ nguyên `name` + trigger phrases (backward compatible)
- Chỉ sửa đúng bug/gap đã liệt kê — không "cải tiến" thêm thứ khác

### 4B. Nếu deliverable là code/Excel/app (web app, SOP, automation, landing page):
- **KHÔNG xuất lại full code** (tốn token)
- Xuất **CHECKLIST FIX** dạng:
```
## CHECKLIST FIX — [tên deliverable] v[X] → v[X+1]
□ [Fix 1]: [vị trí cụ thể] → [thay đổi gì]
□ [Fix 2]: [vị trí cụ thể] → [thay đổi gì]
□ [Fix 3]: ...
Sau khi fix → paste lại deliverable → chạy giả lập vòng tiếp (nếu còn quota).
```

### 4C. Nếu REBUILD (TB < 7.0):
- Liệt kê root cause (tại sao cấu trúc sai)
- Đề xuất skeleton mới (outline level, không full build)
- User duyệt skeleton → build lại từ đầu bằng skill gốc (PromptCreator, SOPBuilder, v.v.) — không phải Simulator build thay

---

## NGUYÊN TẮC CỨNG

| # | Nguyên tắc | Lý do |
|---|-----------|-------|
| 1 | Đọc toàn bộ deliverable trước khi chạy | Không đọc = đánh giá sai |
| 2 | KHÔNG xuất nội dung giả lập chi tiết | Tốn token, user không cần đọc 30 case giả |
| 3 | Chấm điểm trung thực — không nịnh | Nịnh = user deploy bản lỗi → trả giá thật |
| 4 | Bug phải kèm Fix cụ thể | Bug không fix = phàn nàn, không phải đánh giá |
| 5 | Giữ điểm mạnh khi cải tiến | Fix bug mà phá điểm mạnh = đi lùi |
| 6 | Max 3 vòng, không ngoại lệ | Vòng 4+ = đốt token, diminishing returns |
| 7 | Delta < 0.5 sau 2 vòng → STOP | Cùng góc nhìn không improve thêm → cần góc khác |
| 8 | Wildcard phải hỏi 3 câu trước khi chạy | Không hiểu deliverable = đánh giá vô nghĩa |
| 9 | Không "cải tiến" ngoài scope bug/gap | Sửa đúng cái sai, không thêm cái mới tự ý |
| 10 | Version mới giữ tên + trigger cũ | Backward compatible, không gãy link |
