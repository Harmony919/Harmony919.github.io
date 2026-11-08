# Harmony Studio, Full Studio Audit

Read-only audit. No data, pricing, permissions, or public surfaces were modified.
Date: 2026-07-01. Author: Harmony AI (Lovable), acting as PM, UX, sales-ops, data QA, and retail tech architect.

---

## A. Executive Summary

**Overall health: Healthy foundation, uneven readiness.** Harmony Studio has an impressive surface area (60+ routes, 100+ tables, a full AI kernel, admin auditing, proposal + quote + operations flows) and a distinctive editorial UI. The bones are there. The gap is data readiness, information architecture density, and sales-day ergonomics.

### Top strengths
1. Deep, versioned pricing architecture with published/draft lists and audit RPCs.
2. Rich admin surface: catalog health, data quality, asset intelligence, pricing audit, brand registry, AI approvals.
3. AI kernel is scaffolded with approvals, dry runs, memory, plans, and gated permissions.
4. Proposal, quote, operations, customer, warranty, and service flows are all wired.
5. Cinzel display with sage and cream palette gives Studio a recognizable Harmony feel, distinct from generic SaaS.

### Top risks
1. Brand data is thin outside Stressless and American Leather. 15 of 19 brands have 0 products. Avocado and Hush show 0 rows despite being imported earlier; imports need reconciliation.
2. Zero customer-friendly names populated across 3,385 active products. Sales-facing UI falls back to raw SKUs and frame codes.
3. Only 1 studio_product_images row exists across all 3,449 products. Product cards and proposals cannot render hero imagery without more curation.
4. No published proposals yet (0 rows). Proposal Studio is unproven at real volume; templates and PDF output need a live smoke test.
5. Administration tile grid has 30 tiles in one flat list. Sales-critical entry points are buried next to internal ops. Managers need a filtered view.
6. QuickQuote, New Quote, and Proposal Editor overlap. Salespeople have three "start here" doors with unclear guidance on which to pick when.
7. Sidebar and topbar burden on mobile and tablet. The floor uses iPads; some admin dashboards are desktop-only in practice.
8. Permissions coverage is broad but undocumented in-app. Consultants encounter tools they cannot use with no explanation.

### Top 10 recommended improvements (ranked by ROI)
| # | Improvement | Severity | Effort |
|---|---|---|---|
| 1 | Backfill customer_friendly_name and quote_display_name for AL and Stressless (audit already exists). | Critical | M |
| 2 | Reconcile Avocado, Hush, Harmony Collection, and Bryte imports so the registry matches DB reality. | Critical | S |
| 3 | Split Administration into three grouped tabs: Sales Ops, Data and Catalog, Platform and AI. | High | S |
| 4 | Consolidate quote starts: one entry (/studio/quotes/new) with a mode toggle (Quick, Configured, Proposal). | High | M |
| 5 | Hero image ingest sweep for all active brands (Stressless ingest already scaffolded via Firecrawl). | High | M |
| 6 | Add a pricing confidence badge (READY, WARNING, BLOCKED) on every product card. | High | S |
| 7 | iPad-first pass on Dashboard, Products, QuickQuote, ProposalEditor. | High | M |
| 8 | Introduce a Consultant Home simplified dashboard hiding admin surfaces. | High | S |
| 9 | Add empty states with next-step CTAs on Customers, Quotes, Proposals, Deliveries. | Medium | S |
| 10 | Publish a role and permission matrix inside Admin and inline "why can't I see this?" tooltips. | Medium | S |

---

## B. Sales Team UX Scorecard (1 to 10)

| Area | Score | Notes |
|---|---|---|
| Navigation | 6 | Sidebar clear at top level; admin flood dilutes focus. |
| Product discovery | 5 | Search works, but no hero images and no friendly names hurt scanability. |
| Pricing confidence | 6 | Published lists exist, but no per-product trust badge, and 15 brands lack pricing. |
| Quote workflow | 6 | Configurator is strong for Stressless and AL; 3 entry points confuse new consultants. |
| Proposal workflow | 5 | Editor exists, no live proposals authored yet, PDF and mobile output unverified. |
| Customer handoff | 6 | Customers table and notes exist; assignment and reassignment UI is not surfaced. |
| Mobile usability | 5 | Studio layout is responsive but admin tables and configurator need iPad polish. |
| Training simplicity | 5 | Terminology mixes internal (SKU, frame code, cover grade) with sales-facing language. |

---

## C. Customer Experience Scorecard (1 to 10)

| Area | Score | Notes |
|---|---|---|
| Public catalog clarity | 5 | Only Stressless has a pilot route; other brands not yet exposed. |
| Product presentation | 4 | Hero imagery near-empty (1 row) and no friendly names. |
| Image quality | 4 | See above; ingest pipeline exists but not run at scale. |
| Pricing clarity | 6 | Retail pricing loaded for the two pilot brands; not surfaced customer-side. |
| Proposal experience | 5 | Print and present pages exist; not battle-tested. |
| Trust and readiness | 5 | Trust signals (warranty, delivery, brand story) are not consistent on catalog pages. |

---

## D. Brand Readiness Matrix

Data source: studio_brands joined with studio_products and studio_product_images, 2026-07-01.

| Brand | Products | Active | Friendly-Named | Images | Published Pricing | Quote Ready | Proposal Ready | Public Ready | Blockers |
|---|---|---|---|---|---|---|---|---|---|
| American Leather | 2,743 | 2,743 | 0 | 0 | Yes | Partial | Partial | No | Friendly names, hero images |
| Stressless | 696 | 632 | 0 | 1 | Yes | Yes (configurator) | Partial | Pilot | Hero image ingest, friendly names |
| Harmony Collection | 6 | 6 | 0 | 0 | Partial | Manual | Manual | No | Images, collection grouping |
| Bryte | 4 | 4 | 0 | 0 | Partial | Manual | Manual | No | Images, spec sheets |
| Avocado | 0 | 0 | 0 | 0 | Reference only | No | No | No | Product import did not land in studio_products |
| Hush | 0 | 0 | 0 | 0 | Reference only | No | No | No | Product import did not land in studio_products |
| Simply Amish, BDI, Uttermost, Cariloha, Cordaroy's, D and W Silks, Fujiiryoki, No Paint No Stain, Oriental Weavers, PranaSleep, Silk and Snow, Southern Home, Vaughan-Bassett | 0 | 0 | 0 | 0 | None | No | No | No | Not yet loaded |

Registry status summary:
- READY: none
- WARNING: Stressless, American Leather
- NEEDS REVIEW: Harmony Collection, Bryte
- BLOCKED: everything else

---

## E. Page-by-Page Audit

| Page | Purpose | Current issues | Suggested improvements | Severity | Effort | Business impact |
|---|---|---|---|---|---|---|
| /studio Dashboard | Consultant landing | Mixes admin cards, no "next action" | Personalized cards (my quotes today, follow-ups, hot leads); role-filtered | High | M | High |
| /studio/quick-quote | Fast price lookup | Overlaps New Quote, unclear when to use | Merge as a mode inside /quotes/new | High | M | High |
| /studio/quotes | Quote list | No status filter chips, no consultant filter | Add saved filters, mine / all / stale tabs | Medium | S | High |
| /studio/quotes/new | Configured quote | Long, iPad scroll heavy | Two-column iPad layout, sticky totals | High | M | High |
| /studio/quotes/:id | Quote detail | SKU-heavy naming | Prefer customer_friendly_name, keep SKU secondary | High | S | High |
| /studio/proposals | Proposal list | 0 records; empty state generic | Templated first-run walkthrough | Medium | S | Medium |
| /studio/proposals/:id/edit | Proposal editor | Not yet exercised in production | Live iPad smoke test, add Preview as customer | High | L | High |
| /studio/customers | Customer directory | 5 rows, no segmentation | Tags, recent visits, quick-create from quote | Medium | S | Medium |
| /studio/customers/:id | Customer detail | Notes and history readable but dense | Timeline view and follow-up scheduler | Medium | M | High |
| /studio/products | Catalog | No hero, no friendly names, SKU dominant | Card redesign with hero, friendly name, brand, starting-at | High | M | High |
| /studio/products/:id | Product detail | Raw SKU and frame code shown first | Reorder header; move SKU and frame to secondary line | High | S | Medium |
| /studio/brands | Brand index | Many brands with zero products | Show readiness badge and count; hide 0-product brands from consultants | Medium | S | Medium |
| /studio/brands/:slug | Brand detail | Collections not grouped | Introduce collection tabs; show brand story | Medium | M | Medium |
| /studio/knowledge | Internal KB | Sparse content | Seed with brand cheatsheets and objection handling | Medium | M | Medium |
| /studio/reports | KPIs | Reports scaffolded | Add week at a glance summary tile | Medium | M | Medium |
| /studio/operations | Orders, POs, Deliveries | Manager-oriented | Hide from Consultant role; already permissioned but not styled that way | Low | S | Low |
| /studio/admin (30 tiles) | Ops and audits | Flat grid, dense | Group into 3 tabs, add search | High | S | Medium |
| /studio/ai (HAI) | AI console | Locked behind use_ai_kernel | Add read-only recent recommendations for managers | Medium | M | Medium |
| /studio/design | Design studio | Present, low content | Wire from Proposal "add renderings" CTA | Low | M | Medium |

---

## F. Workflow Audit

### 1. New customer intake
Now: navigate to /studio/customers, then New. Basic form. No add-during-quote path.
Fix: allow inline customer creation from /studio/quotes/new header. Auto-attach to the quote.

### 2. Product lookup
Now: /studio/products search on name or SKU. Cards show minimal detail. No image, no friendly name.
Fix: rebuild product card component (hero, brand, collection, starting-at, SKU muted). Add filters: brand, collection, price band, in-stock.

### 3. Product configuration
Now: Stressless and American Leather have real configurators. Others fall back to manual line entry.
Fix: publish a "requires manual pricing" banner on non-configurator brands so consultants know what to expect.

### 4. Quote creation
Now: three entry points (Quick Quote, New Quote, Quote from Proposal).
Fix: unify at /studio/quotes/new with mode toggle. Persist the last-used mode per user.

### 5. Proposal creation
Now: manual, no templates surfaced.
Fix: add 3 starter templates (Single-room, Whole-home, Sleep-focused). One-click clone into a customer.

### 6. Admin pricing review
Now: /studio/admin/pricing plus audit page.
Fix: add a "publish-blocking findings" banner at the top of Pricing Manager so managers see risk before shipping.

### 7. Public catalog readiness
Now: Asset Intelligence and Public Readiness dashboards exist.
Fix: add a single green light checklist per brand (hero, friendly name, pricing, spec sheet).

### 8. Image approval
Now: review queue exists.
Fix: batch approve by brand; add keyboard shortcuts (A to approve, R to reject).

### 9. AI-assisted workflow
Now: HAI panel with kernel and approvals.
Fix: expose "Suggest a quote" from /studio/quotes/new, and "Suggest a proposal" from /studio/proposals/new. Approvals stay gated.

---

## G. Prioritized Roadmap

**Phase 1, Critical fixes**
- Reconcile Avocado, Hush, Harmony Collection, and Bryte imports.
- Backfill customer-friendly names for AL and Stressless via existing audit and RPC.
- Hero image ingest sweep for AL and Stressless.
- Add pricing confidence badge on product cards and quote lines.
- iPad smoke test of Proposal Editor and New Quote.

**Phase 2, Sales usability**
- Group Administration into 3 tabs. Add search.
- Consultant Home dashboard (my quotes, my customers, my follow-ups, today's appointments).
- Unify quote entry points.
- Add mine / all / stale filters to Quotes and Proposals.
- Product card redesign.
- Inline customer creation from quote.

**Phase 3, Customer-facing polish**
- Expand public catalog beyond Stressless pilot (start with AL Comfort Sleeper).
- Add trust signals (warranty, delivery, brand story) to public product pages.
- Preview-as-customer toggle inside Proposal Editor.
- PDF polish (typography, section spacing, cover page).

**Phase 4, AI readiness**
- Populate customer_friendly_name, internal_notes, and metadata.size across all active products.
- Seed studio_knowledge_documents with brand cheatsheets.
- Add "Suggest quote from brief" and "Suggest proposal from customer" HAI actions (dry-run first).
- Product comparison endpoint for AI.

**Phase 5, Operational excellence**
- Weekly executive digest email.
- Automation library (stale quote nudge, low-stock alert, missing hero alert).
- Podium two-way threading in customer detail.
- Delivery scheduling calendar view.

---

## H. Implementation prompts

### Phase 1 prompt
Ship the Phase 1 critical fixes for Harmony Studio. Reconcile Avocado, Hush, Harmony Collection, and Bryte product imports so studio_products.brand_id matches the registry. Backfill customer_friendly_name and quote_display_name for American Leather and Stressless using the existing naming audit RPC. Run the Stressless Firecrawl image ingest and mirror the pattern for American Leather. Add a PricingConfidenceBadge component and render it on ProductCard, QuoteItemCard, and product detail. iPad smoke-test /studio/quotes/new and /studio/proposals/:id/edit and file findings as studio_feedback rows. Do not change pricing values, only surface them.

### Phase 2 prompt
Ship Phase 2 sales usability. Split /studio/admin/administration into three grouped tabs (Sales Ops, Data and Catalog, Platform and AI) with search. Build a ConsultantHome dashboard replacing the current /studio view for the sales_consultant role, showing my open quotes, today's appointments, follow-ups due, and hot leads. Unify Quick Quote and New Quote at /studio/quotes/new with a persisted mode toggle. Add mine / all / stale tabs to /studio/quotes and /studio/proposals. Redesign ProductCard to lead with hero image, customer-friendly name, brand, collection, and starting-at price, with SKU as muted secondary text. Add inline customer creation from the quote header.

### Phase 3 prompt
Ship Phase 3 customer-facing polish. Expand the public Stressless pilot pattern to American Leather Comfort Sleeper. Add trust signal blocks (warranty, delivery promise, brand story) to public product templates. Add a Preview as customer toggle to the Proposal Editor. Improve proposal PDF typography, spacing, and cover page. Verify iMessage, Facebook, LinkedIn, and Reddit share previews for any new public routes.

### Phase 4 prompt
Ship Phase 4 AI readiness. Populate customer_friendly_name and internal_notes for all active products across every brand. Seed studio_knowledge_documents with brand cheatsheets, warranty summaries, and objection handling. Add HAI actions "Suggest quote from brief" and "Suggest proposal from customer" behind dry-run and approval. Build a product-comparison RPC that returns side-by-side option and price data suitable for AI consumption.

### Phase 5 prompt
Ship Phase 5 operational excellence. Build a weekly executive digest edge function that emails a snapshot of quotes, proposals, orders, and readiness. Expand studio_automation_rules with stale-quote nudges, low-stock alerts, and missing-hero alerts. Wire Podium two-way threading into /studio/customers/:id. Add a delivery scheduling calendar view to /studio/deliveries.

---

## Open questions for Doug

1. Should Sales Consultant see any admin tiles, or only Sales Ops? (Currently they see all.)
2. Are Avocado, Hush, Simply Amish, BDI intended to be quotable in Studio short-term, or reference-only until images and pricing land?
3. Which brand should be the second public-catalog pilot after Stressless? (recommend AL Comfort Sleeper)
4. Should HAI ever suggest published pricing changes, or only recommend and require manager approval? (recommend approval-only permanently)
5. Preferred proposal PDF paper size and font, keep Cinzel display or switch to editorial serif for print?

---

## Safety confirmation

- No INSERT, UPDATE, DELETE, or ALTER was executed as part of this audit.
- Read-only SQL used counts and joins only.
- No pricing, quotes, proposals, customers, products, roles, feature flags, or permissions were changed.
- No public catalog routes were published or unpublished.
- No files were removed. Only this report and the read-only viewer route were added.
