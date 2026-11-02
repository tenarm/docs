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

Buyer-side TDS under Section 194Q applies to a buyer whose turnover passed ₹10 crore in the preceding year.
You declare only that; the rate and threshold are the law and come with the India pack:

| Setting | Default | Purpose |
|---------|---------|---------|
| **TDS u/s 194Q applies** | Off | Your organization is a buyer under Section 194Q |

The page shows the rule in force — today 0.1% of purchases from one supplier above ₹50,00,000 in a
financial year. When the law changes, an India pack update brings the new rule from the date it takes
effect; bills dated earlier keep the rule of their date.

When it applies, posting a bill withholds TDS on the part of the supplier's purchases above the threshold:
- Debit: Accounts Payable
- Credit: TDS Payable (map an account to the **TdsDeduction** document type)

## AI

AI comes as two apps, switched on or off like any other:

| App | What it does | Default |
|-----|--------------|---------|
| **AI Insights** | Rule-based alerts on your documents: overdue purchase orders, reorder points, dead stock, over-committed demand. Nothing leaves your server. | On |
| **AI Assistant** | Ask about sales, pipeline and finances in plain language. Questions go to an external AI provider. | Off |

Your organization can have either, both or neither. Users also need the permissions: `ai.view` to see insights,
`assistant.ask` to use the assistant.

::: warning
The platform administrator switches these apps on or off. Contact your TenArm provider to change them.
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
