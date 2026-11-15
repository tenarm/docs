---
title: Quick Start Guide
description: Get up and running with TenArm BES in minutes.
---

# Quick Start Guide

Get started with TenArm BES in a few simple steps.

---

## For Daily Users

### 1. Log In

Navigate to your organization's TenArm BES URL and sign in with the credentials provided by your administrator.

### 2. Navigate the Workspace

Once logged in, you'll see the **workspace shell** — your home for all daily operations:

- **Nav Rail (Left Sidebar)**: Vertical navigation bar showing icons for your authorized screens and installed applications.
- **Tab Bar (Top)**: Work on up to 3 tasks simultaneously using independent tabs (`t1`, `t2`, `t3`).
- **Command Palette**: Press `⌘K` (Mac) or `Ctrl+K` (Windows) to instantly search and jump to any screen.
- **My Day Panel**: Floating panel at the bottom-left showing urgent pending tasks and approvals.

### 3. Core Operational Surfaces

Every user has access to foundational operational tools:

| Surface | Route | Purpose |
|---|---|---|
| **Approvals Desk** | `/approvals` | Central inbox to triage, inspect, approve, or reject pending requests. |
| **Activity Feed** | `/activity` | Real-time ambient event stream across your organization with instant search. |
| **Process Lineage** | `/process` | Graphical dependency tree and chronological audit trail for any business record. |
| **AI Assistant** | `/ai` | Natural-language co-pilot to query operational metrics and aggregates. |

### 4. Workspace Ergonomics

- **Multi-Tab Multitasking**: Open records in up to 3 separate tabs without losing scroll position or search filters.
- **Quick-Peek Drawers**: Click any linked reference code (such as a partner name or document ID) to open a slide-over inspection drawer without leaving your active tab.
- **Draft Auto-Save**: In-progress edits are automatically preserved in browser storage. A dirty dot (`•`) on the tab header indicates unsaved changes.

---

## For Administrators

### 1. Tenant Setup

Navigate to **Settings → Organization Configuration** (`/settings/config`) to set:
1. **Identity & Branding**: Company legal name, registered address, and letterhead logo.
2. **Statutory & Tax**: GSTIN / Tax identifier, tax region state code, and fiscal start month.
3. **Banking Details**: Corporate settlement account numbers and routing/IFSC codes.

### 2. User Accounts & RBAC Roles

1. Go to **Administration → Users** (`/users`) to create accounts for your team.
2. Go to **Administration → Roles** (`/roles`) to assign built-in system templates or create custom roles with granular capability permissions.

### 3. Business Counterparties (Parties)

Navigate to **Administration → Parties** (`/parties`) to create master counterparties (customers, suppliers, transporters, vendors) with tax numbers and credit limits.

### 4. System Configuration & Safeguards

Review operational policies under **System Configuration**:
- Set monetary thresholds in **Approval Policies**.
- Review automated prefixes in **Document Numbering Sequences**.
- Monitor outbound transmission health in the **Transactional Email Outbox** (`/control/email-outbox`).

### 5. App Enablement & Data Import

- **App Enablement**: Activate the modular applications and country packs required for your business in **App Enablement**.
- **Data Import**: Ingest legacy master records and opening balances using the **Data Import Desk** (`/control/import`).

---

## What's Next?

- **[Workspace Basics](/user-guides/workspace-basics)** — In-depth guide to tabs, quick-peek, and navigation
- **[Approvals & Activity](/user-guides/approvals-and-activity)** — Triage desk, activity stream, and process audit trails
- **[Tenant Setup](/admin-guides/tenant-setup)** — Foundational organization and branding configuration
- **[Roles & Permissions](/admin-guides/roles-and-permissions)** — Granular access control and permission matrices
