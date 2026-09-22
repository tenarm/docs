---
title: System Configuration
description: Configure approval policies, document sequences, email settings, and system-wide preferences.
---

# System Configuration

Fine-tune how TenArm BES behaves for your organization — approval workflows, document numbering, and communication settings.

## Approval Policies

Approval policies control which transactions require manager sign-off before they become active.

### How Approvals Work

When a user submits a document (PO, sales order, expense, etc.), the system checks:

1. Is there an approval policy for this document type?
2. Does the document's value exceed the threshold?
3. If yes → route to the designated approver(s)
4. If no → auto-approve on submission

### Configuring a Policy

Navigate to **Settings → Approval Policies**:

| Field | Description |
|-------|-------------|
| **Document Type** | What it applies to (Purchase Order, Expense, Sales Order, etc.) |
| **Threshold Amount** | Below this value → auto-approved. Above → requires approval. |
| **Approver Role** | Which role can approve (e.g., Procurement Manager) |

### Example Policies

| Document | Threshold | Below | Above |
|----------|:---------:|-------|-------|
| Purchase Order | ₹1,00,000 | Auto-approved | Requires approval |
| Expense Claim | ₹10,000 | Auto-approved | Requires approval |
| Sales Order | — (none) | Always auto-approved | — |

::: tip
Set threshold to 0 to require approval for **every** transaction of that type. Leave the policy empty (no policy) for no approval required.
:::

## Document Number Sequences

Every document in TenArm BES gets a unique, sequential number — automatically generated, never duplicated.

### Number Format

```
{ORG_CODE}-{DOC_TYPE}-{SEQUENCE}

Example: ACME-SO-2024-0001
         ACME-PO-2024-0042
         ACME-INV-2024-0107
```

| Component | Source | Configurable? |
|-----------|--------|:------------:|
| Org Code | Organization code | No (set at provisioning) |
| Doc Type | Document type prefix | No (code-defined) |
| Sequence | Auto-incrementing | No (managed by system) |

### Document Type Prefixes

| Prefix | Document |
|--------|----------|
| `LD` | Lead |
| `QT` | Quotation |
| `SO` | Sales Order |
| `PO` | Purchase Order |
| `INV` | Invoice |
| `BIL` | Bill |
| `JE` | Journal Entry |
| `PAY` | Payment |
| `GRN` | Goods Receipt Note |
| `WO` | Work Order |
| `MO` | Manufacturing Order |
| `SR` | Service Request |
| `EXP` | Expense |

::: warning
Document numbers are **not configurable** — they follow a system-defined pattern to ensure consistency and prevent collisions. The sequence is managed by `core.sequences.next_document_number()` and is guaranteed unique.
:::

## Email Settings

### Outbound Email

Configure how the system sends notification emails:

| Setting | Purpose |
|---------|---------|
| **Company Name** (branding) | Appears as the "From" name in emails |
| **Support Email** | Used as the reply-to address |

Email notifications are sent for:
- Approval requests (new document pending your approval)
- Status changes (your PO was approved, order shipped, etc.)
- Assignment notifications (lead assigned to you)

## System Preferences

### Concurrency Protection

All transactional documents use **Optimistic Concurrency Control (OCC)**:

- Every document has a `version` counter
- When two users edit the same document simultaneously, the second save gets a **409 Conflict** error
- The user sees a message: "This record has been modified by another user. Please refresh and try again."

This prevents data loss from concurrent edits without locking records.

### Idempotency Protection

All mutating API requests support **Idempotency Keys**:

- Duplicate form submissions within 24 hours return the cached response instead of creating duplicates
- Concurrent duplicate requests are rejected with 409 Conflict
- This prevents double-posting from network retries or double-clicks

### Audit Trail

Every action in TenArm BES is logged:

| Log | What It Records | Retention |
|-----|----------------|-----------|
| **Event Store** | Business facts (order created, payment received) | Permanent |
| **Capability Logs** | All capability executions (success + failure) | 90 days |
| **Admin Audit Logs** | Platform admin actions (user created, app disabled) | Permanent |

::: tip
The audit trail is automatic and cannot be disabled. Every create, update, transition, and approval is recorded with the user, timestamp, and full payload.
:::

## Setup Checklist

- [ ] Review and configure approval policies for POs and expenses
- [ ] Verify document number sequences are generating correctly
- [ ] Configure branding (company name) for outbound emails
- [ ] Set support email for reply-to
- [ ] Test a full transaction cycle to verify all settings

## Related Guides

- **[Tenant Setup](./tenant-setup)** — Organization-level settings
- **[App Enablement](./app-enablement)** — Module management
- **[User Management](./user-management)** — Roles and access
