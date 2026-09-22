---
title: FAQ & Troubleshooting
description: Common questions and troubleshooting tips for TenArm BES administrators and users.
---

# FAQ & Troubleshooting

## General

### I can't see a module in my sidebar
Your role may not have permissions for that module. Ask your administrator to check:
1. Is the app **enabled** for your organization? ([App Enablement](./app-enablement))
2. Does your role include permissions for that module? ([User Management](./user-management))

### I get "You don't have permission" when clicking a button
Your role doesn't include the required permission for that action. Contact your administrator to assign the appropriate role.

### My changes were lost when I switched tabs
TenArm BES auto-saves form drafts. If you were in a form (create or edit mode), your data should be preserved when switching tabs. However:
- Drafts are stored in **browser session storage** — they don't survive closing the browser
- Each tab maintains its own independent draft

### I see "This record has been modified by another user"
This is **Optimistic Concurrency Control** (OCC) — another user edited the same record while you had it open. Click **Refresh** to load the latest version, then apply your changes again.

### I accidentally submitted/approved something
Contact your administrator. Depending on the document type:
- Some documents can be **rejected** to return to draft
- Some transitions can be **reversed** (e.g., journal reversal in Finance)
- Status transitions are audited — the audit trail records who did what and when

---

## Finance

### My journal entry won't post
Check:
1. Is the **accounting period** open? Closed periods don't accept new entries.
2. Is the journal **balanced**? Total debits must equal total credits.
3. Are all accounts **active**? Inactive accounts can't receive postings.

### Tax amounts look wrong on an invoice
Verify:
1. The correct **tax code** is assigned to each line item
2. Your organization's **state code** is set (for GST intra/inter-state determination)
3. The customer's state code is set on their party record

### How do I correct a posted journal entry?
Use **Journal Reversal** — this creates a new journal that exactly reverses the original. Never manually adjust the original entry.

---

## Inventory

### Stock balances don't match physical count
Use **Stock Adjustment** to correct discrepancies:
1. Navigate to **Inventory → Stock Movements**
2. Create a stock adjustment with the correct quantities
3. The system will record the difference

### I can't deactivate a warehouse
A warehouse with existing stock balances can't be deactivated. Transfer or adjust all stock to zero first.

---

## Procurement

### My PO was auto-approved — I wanted manual approval
Check the **approval policy** threshold. POs below the threshold are auto-approved. To require approval for all POs, set the threshold to 0. See [System Configuration](./system-configuration).

### I can't cancel a partially received PO
Use **Short-Close** instead of cancel. This marks the remaining unreceived lines as cancelled while preserving the received quantities.

---

## Sales

### I can't find the "Convert to Sales Order" button on a quotation
The quotation must be in **ACCEPTED** status. The flow is: Submit → Approve → Accept → Convert to SO.

---

## Data Import

### My import failed with validation errors
1. Download the **error report** from the import batch
2. Fix the errors in your CSV
3. Re-upload the corrected file
4. Common issues: missing required fields, duplicate SKUs, unknown tax codes

### What order should I import data?
Follow the dependency order: Chart of Accounts → Tax Codes → Parties → Product Categories → Products → Warehouses. See [Data Import & Migration](./data-import-and-migration).

---

## Getting Help

If you can't find the answer here:
1. Check the relevant **module guide** in the sidebar
2. Review the **admin guides** for configuration issues
3. Contact your system administrator
