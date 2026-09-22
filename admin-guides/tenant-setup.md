---
title: Tenant Setup
description: Configure your organization's identity, branding, and compliance settings after provisioning.
---

# Tenant Setup

After your TenArm BES instance is provisioned, configure your organization's foundational settings.

## Organization Identity

Your organization has a unique **code** (e.g., `ACME`) and **name** set during provisioning. These identify your tenant across the platform.

### Branding

Configure how your organization appears in outbound communications:

| Setting | Where It's Used | Example |
|---------|----------------|---------|
| **Company Name** | Email "From" name, document headers | Acme Industries Pvt. Ltd. |
| **Support Email** | Reply-to on system emails | support@acme.com |

Navigate to **Settings → Organization** to update branding.

## GST Configuration (India)

If your organization operates in India, configure GST identity for tax compliance:

| Setting | Format | Purpose |
|---------|--------|---------|
| **GSTIN** | 15-character alphanumeric | Your GST registration number |
| **State Code** | 2-digit code (e.g., `27` for Maharashtra) | Determines intra-state (CGST+SGST) vs inter-state (IGST) tax treatment |

::: tip
Once State Code is set, the system automatically determines tax type when posting invoices and bills — comparing your state code against the buyer/supplier's place of supply.
:::

## TDS Configuration (India)

For buyer-side TDS under Section 194Q:

| Setting | Default | Purpose |
|---------|---------|---------|
| **TDS Enabled** | Off | Toggle TDS deduction on purchase bills |
| **TDS Threshold** | ₹50,00,000 | Cumulative purchase threshold per supplier per financial year |
| **TDS Rate** | 0.1% | Rate applied on amount exceeding the threshold |

When enabled, `bill.post` automatically deducts TDS on qualifying purchases:
- Debit: Accounts Payable
- Credit: TDS Payable

## AI Tier

Control which AI features are available to your organization:

| Tier | Features |
|------|----------|
| **NONE** (default) | No AI features |
| **RULE_BASED** | Deterministic alerts (overdue PO, reorder point, dead stock) |
| **ML_ENABLED** | Rule-based + statistical ML (demand forecast, supplier scoring) |
| **AI_ENABLED** | All above + LLM co-pilot (chat, draft generation) |

::: warning
AI tier is set by the platform administrator. Contact your TenArm provider to upgrade.
:::

## Branches & Departments

Organize your company structure:

- **Branches** — Physical locations (HQ, Regional Office, Factory)
  - Each branch has a code (unique per organization), name, and address
- **Departments** — Teams within a branch (Sales, Finance, Operations)
  - Each department has a code (unique per branch) and name

Navigate to **Settings → Branches** to manage your organizational structure.

## What's Next

- **[App Enablement](./app-enablement)** — Choose which modules to activate
- **[User Management](./user-management)** — Create users and assign roles
- **[Finance Setup](./finance-setup)** — Configure your chart of accounts and tax codes
