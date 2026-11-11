---
title: FAQ & Troubleshooting
description: Comprehensive operational and administrative troubleshooting guide for TenArm BES administrators and operators.
---

# FAQ & Troubleshooting

This guide provides direct, actionable solutions to common operational questions, permission blocks, concurrency conflicts, and data validation issues in TenArm BES.

---

## 1. Access, Roles & Permissions

### Why is a module icon missing from a user's sidebar?
Check two administrative levels:
1. **Is the app enabled for your organization?** If the module is disabled in your tenant's license blueprint, it is hidden from all users. See [App Enablement](./app-enablement).
2. **Does the user's role include permissions for that module?** Permissions govern visibility. If a user holds only the *Warehouse Clerk* role, commercial modules like *CRM* and *Finance* are hidden from their navigation rail. See [Roles & Permissions](./roles-and-permissions).

### Why is an action button disabled with a lock icon?
Hover over the disabled button to inspect its tooltip. The system displays the exact missing atomic permission:
- Example: `Requires order.approve permission` or `Requires po.receive permission`.
- To resolve: Assign the user a system template or custom role that bundles the required permission under **Settings → Roles & Permissions** (`/roles`).

### Can a user hold multiple roles simultaneously?
Yes. TenArm BES evaluates effective user permissions as the mathematical **union** of all assigned roles. If a user has both *Sales Representative* and *Inventory Clerk*, they receive full rights for both functions without privilege conflicts.

---

## 2. Workspace Ergonomics & Concurrency

### Why did I see a "Conflict Resolution Drawer" while saving?
This is **Optimistic Concurrency Control (OCC)** protecting your data. If two users edit the same customer profile, role, or sales order simultaneously, TenArm BES prevents the second user from silently overwriting the first user's changes:
1. The **Conflict Resolution Drawer** slides open from the right.
2. It highlights the fields changed by the other user alongside your proposed edits.
3. You can accept the incoming server values or selectively re-apply your changes and confirm.

### Will I lose my uncommitted form edits if I switch tabs?
No. The workspace maintains **Draft Auto-Save** in local browser session storage across up to 3 simultaneous tabs. 
- The tab header displays a dirty dot indicator (`•`) whenever uncommitted edits exist.
- You can switch freely between tabs, look up master records in other modules, and return to your form without losing keystrokes or table line selections.
- *Note*: Closing the browser window or clearing browser session storage clears uncommitted drafts. Always click **Save** when finishing an edit.

---

## 3. Managerial Approvals & Governance

### Why can't a manager approve a Purchase Order or Sales Order they created?
TenArm BES enforces a strict **Separation of Duties (SoD)** governance invariant: **users are prohibited from approving their own submissions (`requested_by != user_id`)**.
- The **Approve** and **Reject** buttons are automatically disabled for the author.
- To resolve: An independent authorized manager holding the required permission must review and approve the request.

### Why was my PO or Sales Order auto-approved upon submission?
The document value did not exceed your organization's configured **Approval Policy** threshold:
- Under **Settings → Organization Configuration** (`/settings/config`), policies specify minimum threshold amounts (e.g. ₹1,00,000). Transactions below this amount auto-approve immediately to streamline operational velocity.
- To require managerial sign-off for *all* transactions, set the policy threshold amount to `0.00`.

### Why does rejecting an approval request require a reason?
To maintain regulatory compliance and operational transparency, TenArm BES enforces **Reason-Required Rejections**.
- The **Confirm Rejection** button remains locked until a descriptive explanation is entered in the rejection remarks textarea.
- This remark is permanently recorded in the document audit trail and notified to the submitter for prompt correction.

---

## 4. Finance & General Ledger

### Why does the system block posting a journal entry or vendor bill?
Check the three primary accounting guards:
1. **Is the Accounting Period open?** If the document date falls in a closed fiscal period, the posting is rejected. A Finance Administrator must either adjust the date to an open month or temporarily reopen the period. See [Finance Setup](./finance-setup).
2. **Is the journal entry balanced?** The General Ledger enforces strict double-entry balance: `Total Debits == Total Credits` exactly.
3. **Are any selected accounts inactive?** Inactive or archived GL accounts are barred from receiving new debit or credit lines.

### How do I correct an invoice or journal that has already posted?
TenArm BES enforces statutory ledger immutability: **posted accounting entries cannot be edited or deleted**.
- **For Invoices**: Open the invoice in Sales or Finance and click **Raise Credit Note**. This generates an offsetting document that reverses the accounts receivable balance.
- **For Journal Entries**: Use **Journal Reversal**. This creates a linked reversing entry with inverted debits and credits, preserving a complete audit trail.

### Why is the tax calculation splitting into CGST/SGST instead of IGST (India)?
The tax engine compares your organization's registered **State Code** against the counterparty's **Tax Region / State Code**:
- **Same State (Intra-State)**: Automatically splits into 50% CGST and 50% SGST.
- **Different State (Inter-State)**: Applies 100% IGST.
- If an inter-state customer is incorrectly receiving intra-state tax, open their party record in **Parties** (`/parties`) and ensure their **State Code** matches their official registered GSTIN.

---

## 5. Inventory & Warehouses

### Why can't I deactivate a warehouse facility?
A facility cannot be marked `INACTIVE` while physical stock balances remain on record:
1. Navigate to **Inventory → Stock Balances** to check quantities.
2. Use **Stock Transfers** to relocate remaining items to an active warehouse, or perform a **Stock Adjustment** to reconcile counts to zero.
3. Once all stock balances reach zero, edit the warehouse record and toggle its status to `INACTIVE`. See [Warehouse Setup](./warehouse-setup).

### How does dual-unit catch-weight resolve weight differences?
Products marked with **Catch-Weight Tracking** record both discrete packaging units (e.g. `10 Coils`) and actual weighed mass (e.g. `184.20 MT`):
- Warehouse receipts record both dimensions.
- Commercial sales orders and invoice lines price against actual weighed mass.
- Inventory reports show both counts, eliminating artificial inventory write-offs caused by natural material weight variations.

---

## 6. Data Import & CSV Migration

### Why did my CSV import batch fail?
Switch to the **Batch History** tab under **Settings → Data Import** (`/settings/import`) and click **Download Error CSV**:
- The error report reproduces your uploaded rows and appends an exact rejection reason for each failed line (e.g. `Foreign key 'WH-SOUTH' does not exist` or `Unknown UoM code 'PCS'`).
- Common causes:
  1. **Dependency order violation**: Importing products before creating categories, or importing opening stock before creating warehouses.
  2. **Encoding issues**: Files saved as UTF-16 or semicolon-delimited instead of standard UTF-8 comma-separated values.
  3. **Duplicate keys**: Multiple rows in the CSV sharing the exact same SKU or Party code.

---

## 7. Outbound Email Delivery

### Why hasn't a customer received their emailed invoice or quotation?
Navigate to **Settings → Email Outbox** (`/settings/email-outbox`):
1. **Pulse Metrics**: Inspect the **Failed** and **Pending** counters.
2. **Status Inspection**: Click on the target email row to open the **Email Inspector Modal**.
3. **Error Payloads**: If a transmission failed (e.g. SMTP timeout, invalid recipient address, or attachment size limit), the error payload displays the exact server response.
4. **Retry Delivery**: Correct the recipient email address on the document or party record, then click **Retry Delivery** (`<RotateCw />`) to immediately re-queue the message.

---

## 8. Customer Support Access Grants

### How can a TenArm technical engineer inspect an issue in our tenant?
Platform support engineers are strictly barred from reading your tenant data or impersonating your users.
To grant temporary troubleshooting access:
1. Navigate to **Settings → Organization Configuration** (`/settings/config`).
2. Open the **Support Access** tab and click **+ Grant Support Access**.
3. Select an expiration window (e.g. `1 Hour` or `4 Hours`).
4. The system issues a temporary, read-only session token.
5. While active, an ambient banner is displayed across the workspace. You can click **Revoke Access** at any second to terminate the session immediately.
