---
title: Tenant Setup
description: Configure organization identity, letterhead branding, statutory tax rules, banking details, and governance policies in TenArm BES.
---

# Tenant Setup

The Tenant Setup suite governs your organization's legal identity, corporate branding, statutory tax compliance, and commercial policies across TenArm BES. 

Once your tenant instance has been provisioned, administrators configure these foundational settings in the **Tenant Configuration Console** (`/settings/config`).

---

## Workspace Ergonomics

The Tenant Configuration workspace is built for safe, multi-desk policy administration:

- **Multi-Tab Desk**: Administrators can maintain up to 3 active workspace tabs simultaneously (for example, keeping **Tenant Configuration** open while auditing **Roles & Permissions** in Tab 2 and verifying master **Parties** in Tab 3).
- **Draft Auto-Save & Dirty Dot**: Unsaved inputs in configuration fields are continuously tracked; the active tab header displays a dirty dot indicator (`•`) until changes are committed via **Save Changes** or discarded.
- **Unsaved Navigation Guard**: If you attempt to switch away or close a tab with uncommitted settings, the workspace displays a warning prompt preventing accidental loss of configuration.
- **Optimistic Concurrency Control (OCC)**: System settings are protected by version tokens. If two administrators update tenant settings concurrently, the system alerts you and opens the **Conflict Resolution Drawer** to resolve differences safely.

---

## Configuration Domains (`/settings/config`)

Navigate to **Settings → Organization Configuration** (`/settings/config`). A top segmented control allows administrators to filter by specific administrative domains:

```
[ All ]  [ Identity & Brand ]  [ Statutory & Tax ]  [ Banking ]  [ Document Numbering ]  [ Governance ]  [ Support Access ]  [ AI Settings ]
```

---

### 1. Identity & Corporate Branding

Governs how your company appears on customer-facing PDF quotations, sales orders, delivery challans, and tax invoices.

| Field | Required | Purpose & Constraints |
|---|:---:|---|
| **Company Display Name** | ✅ | Legal or commercial business name appearing in page headers and document titles. |
| **Registered Address** | ✅ | Multi-line official registered office or operating address displayed on invoice letterheads. |
| **Official Phone Number** | — | Central customer service or operational phone number. |
| **Support Email Address** | ✅ | The primary reply-to email address embedded in system notifications and customer dispatch emails. |
| **Brand Logo** | — | Corporate emblem embedded on PDF documents. Must be a high-resolution PNG or SVG image (maximum 400 KB). |

**Live Letterhead Preview Card**
The configuration screen features an interactive **Letterhead Preview Card** on the right side of the screen. As you update the company name, address, phone number, and logo, the card renders a live WYSIWYG preview of your official letterhead banner, guaranteeing visual consistency before saving.

---

### 2. Statutory & Tax Compliance (India)

Configures organizational tax identity and automated tax derivation rules:

| Field | Required | Purpose & Automation Rules |
|---|:---:|---|
| **Organization Country** | ✅ | Fixed at provisioning (e.g. `IN` for India, `US` for United States). Read-only. |
| **Tax ID / GSTIN** | ✅ | 15-character Goods and Services Tax Identification Number. Entering the first two digits automatically populates the default State Code. |
| **Tax Region / State Code** | ✅ | 2-digit state identifier (e.g. `27` for Maharashtra, `29` for Karnataka). Drives automated tax split derivation: intra-state transactions split into CGST + SGST, while inter-state transactions apply IGST. |
| **TDS u/s 194Q Applies** | — | Toggle switch indicating if buyer-side Tax Deducted at Source (TDS) under Section 194Q applies (mandatory for buyers with preceding annual turnover exceeding ₹10 Crore). The system enforces current statutory thresholds (0.1% on purchase value exceeding ₹50,00,000 per financial year). |

---

### 3. Financial Governance & Bookkeeping

Defines the fiscal calendar and operational accounting rules:

| Setting | Options / Values | Business Purpose |
|---|---|---|
| **Books Kept** | `HERE` (TenArm BES) / `EXTERNAL` | When set to `HERE`, the internal General Ledger (`finance`) records all automated postings. When set to `EXTERNAL`, journal generation is routed to export staging for third-party accounting packages. |
| **Financial-Year Start Month** | `January (01)` through `December (12)` | Defines the 12-month accounting boundary (default is `April (04)` for Indian organizations). Automatically calculates current fiscal year strings (e.g. `25-26`). |
| **Tenant Time Zone** | IANA format (e.g. `Asia/Kolkata`, `America/New_York`) | Determines the official timestamp for midnight ledger cutoffs, day grouping in Activity Feeds, and document sequence rotations. |
| **Close Deadline Days** | Integer (e.g. `5`) | Maximum allowed days following month-end before an accounting period must be closed by Finance. |

---

### 4. Banking & Remittance Details

Default banking instructions printed on customer invoices and quotations for direct wire transfers:

| Field | Required | Business Description |
|---|:---:|---|
| **Bank Name** | ✅ | Registered corporate banking institution (e.g. *State Bank of India*, *HDFC Bank*). |
| **Branch Name** | — | Specific branch location or IFSC service center. |
| **Account Number** | ✅ | Primary corporate settlement account number. |
| **IFSC / Routing / SWIFT Code** | ✅ | Electronic transfer routing code for automated clearing house and wire remittances. |

---

### 5. Document Number Sequences

Every business document generated in TenArm BES receives a sequential, gapless, audit-compliant document number.

Document numbers are generated automatically using the canonical system sequence:
```
{ORG_CODE}-{DOC_TYPE}-{FISCAL_YEAR}-{SEQUENCE}

Examples:
  ACME-SO-25-26-0001   (Sales Order)
  ACME-PO-25-26-0042   (Purchase Order)
  ACME-INV-25-26-0105  (Tax Invoice)
  ACME-GRN-25-26-0018  (Goods Receipt Note)
```

The **Document Numbering Sequences** card displays a live reference table of all registered document types and active prefixes:

| Code | Document Type | Example Number |
|:---:|---|---|
| `SO` | Sales Order | `ACME-SO-25-26-0001` |
| `PO` | Purchase Order | `ACME-PO-25-26-0001` |
| `INV` | Tax Invoice | `ACME-INV-25-26-0001` |
| `JE` | Journal Entry | `ACME-JE-25-26-0001` |
| `PMT` | Payment Receipt | `ACME-PMT-25-26-0001` |
| `QT` | Quotation | `ACME-QT-25-26-0001` |
| `GRN` | Goods Receipt Note | `ACME-GRN-25-26-0001` |
| `DN` | Debit Note | `ACME-DN-25-26-0001` |
| `CN` | Credit Note | `ACME-CN-25-26-0001` |

::: tip
Document numbering follows statutory anti-tampering standards: numbers are non-editable and strictly sequential to ensure complete audit compliance and prevent duplicate commercial invoicing.
:::

---

### 6. Commercial Governance & Pricing Style

Controls how product pricing and sales negotiations behave on the **Sales Desk** and in order entry forms:

- **Rate Per Deal (`RATE_PER_DEAL`)**: Standard high-velocity B2B model. Every quotation or order line is negotiated at a clean, agreed net rate. Explicit discount columns are hidden to prevent accidental double-discounting.
- **List Price With Discount (`LIST_PRICE_WITH_DISCOUNT`)**: Traditional retail/catalog model. Items anchor to catalog list prices and display explicit percentage and cash discount fields.

---

### 7. Customer Support Access Grants

TenArm BES adheres to strict customer data sovereignty. Platform support engineers and system operators are technically barred from reading your tenant data or impersonating your users.

When you require live troubleshooting assistance from the TenArm technical team:
1. Navigate to the **Customer Support Access** tab under `/settings/config`.
2. Click **+ Grant Support Access**.
3. Select an expiration duration (e.g. `1 Hour`, `4 Hours`, `24 Hours`).
4. The system generates a cryptographically signed, read-only grant token.
5. While active, an ambient amber banner alerts all tenant administrators of active support access.
6. Administrators can revoke the access token at any second with a single click (**Revoke Access**). All support engineer actions are logged in the tenant's immutable audit log.

---

## If Something Goes Wrong (Common Validation & Guard Errors)

| What you see (Toast / Banner) | Why it happens | How to fix it in the workspace |
|---|---|---|
| `"Company display name is required"` | Attempting to save configuration with an empty company name. | Enter the registered commercial name in the **Identity & Brand** section. |
| `"Invalid GSTIN format"` | The entered GSTIN does not conform to the 15-character alphanumeric statutory standard. | Verify and re-enter the valid 15-digit GSTIN (e.g. `27AAAAA0000A1Z5`). |
| `"Brand logo file size exceeds 400 KB"` | The uploaded PNG/SVG logo is too large for PDF rendering. | Compress the image to under 400 KB before uploading. |
| `"Configuration was modified by another user (OCC Conflict)"` | Another administrator saved settings while you had the form open. | Review the **Conflict Resolution Drawer**, accept the updated values, and re-apply your changes. |
| `"Support grant has expired or was revoked"` | A support engineer attempted to inspect records after the access window lapsed. | Generate a new grant under the **Support Access** section if troubleshooting is still needed. |
