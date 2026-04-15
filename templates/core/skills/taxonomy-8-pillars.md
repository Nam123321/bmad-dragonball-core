# 8-Pillar Edge Case Taxonomy — Quick Reference

## Purpose
Quick-reference card for the 8 pillars. Load this when you need a compact checklist without the full SKILL.md context.

---

| # | Pillar | Guiding Question | Key Checks |
|---|--------|-------------------|------------|
| P1 | 🔢 Input Boundary | "What at the extremes?" | min/max/0/null/negative, long strings, special chars, dates |
| P2 | 🔄 State Transition | "Unexpected state?" | deleted entity ops, mid-transition actions, rollback, re-entry |
| P3 | ⚡ Concurrency | "Two actors same time?" | race conditions, deadlocks, optimistic lock fail, eventual consistency |
| P4 | 💾 Data Integrity | "Inconsistent data?" | FK orphans, denorm desync, timezone, precision, cascade fail |
| P5 | 🔌 Integration Failure | "Dependency fails?" | API timeout, partial success, webhook fail, service down |
| P6 | 🔒 Permission & Security | "Wrong access?" | tenant leak, role escalation, expired token, IDOR, mass assign |
| P7 | 🌐 Infrastructure | "Env degraded?" | offline, slow network, low memory, full disk, browser compat |
| P8 | ⚖️ Business Rule Conflict | "Rules contradict?" | promo+debt, bundle+discount, tiered pricing, credit+minimum, tax stacking |

## Application-Specific Additions per Pillar

> **Customize these examples** to match your project's domain. The examples below are generic starting points.

### P1 — Input Boundary (Examples)
- Quantity = 0 in cart/order
- Price with excessive decimals (12.123456)
- Name fields with HTML/script tags
- Transaction with 500+ line items
- Coupon/voucher code with special characters

### P2 — State Transition (Examples)
- Cancel order after partial fulfillment
- Edit record during background processing
- Return/refund after settlement period closed
- Reactivate deactivated user with pending items
- Inventory adjustment during stock count

### P3 — Concurrency (Examples)
- Two users claiming last-in-stock item
- Concurrent charges against same credit limit
- Simultaneous receipt processing for same purchase order
- Two admins editing same promotion/campaign
- Stock count while receiving is in progress

### P4 — Data Integrity (Examples)
- Balance desync after failed transaction rollback
- Calculation with mixed measurement units
- Period boundary timezone mismatch (UTC vs local)
- Foreign key to soft-deleted entity in child record
- Bundle pricing > sum of parts (should never happen)

### P5 — Integration Failure (Examples)
- External service timeout during processing
- Payment gateway callback timeout
- Data import with malformed CSV
- Mobile app sync failure during poor connectivity
- Webhook missed for status change event

### P6 — Permission & Security (Examples)
- Agent accessing another tenant's data
- Deactivated user session still valid
- Role downgrade while editing sensitive data
- API endpoint missing tenant isolation check
- Direct URL access to another tenant's record

### P7 — Infrastructure (Examples)
- Mobile app offline during critical workflow
- Local DB sync failure after app crash
- Dashboard with 10,000+ row table render
- File upload on 2G connection
- PDF generation under heavy load

### P8 — Business Rule Conflict (Examples)
- Promotion applies gift but customer exceeds credit limit
- Bundle price + additional discount exceeds product cost
- Volume discount tier change mid-transaction
- Credit limit change while order is processing
- Free gift item is out of stock
