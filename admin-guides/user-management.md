---
title: User Management
description: Create user accounts, assign roles, and manage access for your organization.
---

# User Management

Every person who uses TenArm BES needs a user account. This guide covers creating users, assigning roles, and managing their access.

## Creating a User

1. Navigate to **Users** (`/users`).
2. Click **+ New User** in the header.
3. In the **New User** modal, complete the fields:

| Field | Required | Notes |
|-------|:--------:|-------|
| **Email** | ✅ | Must be unique across the entire system. Used for login. |
| **Full Name** | ✅ | Displayed throughout the UI, documents, and audit logs. |
| **Password** | ✅ | Set initial password (must meet 12+ character complexity standards). |
| **Roles** | ✅ | Check the roles to assign to this account. |
| **Active** | ✅ | Defaults to active. Uncheck to suspend access without deleting history. |

4. Click **Create User**.

## Assigning Roles

After creating a user, assign or adjust roles to control their access:

1. Select the user from the user list on the left to load the **User Details** panel.
2. Click **Edit Profile**.
3. In the **Roles** checklist, select the roles to assign.
4. Click **Save Changes** — permissions take effect immediately across all devices.

### Role Quick Reference

| Role | Grants Access To |
|------|-----------------|
| **Admin** | Everything — full system access |
| **Sales** | Quotations, orders, customer management |
| **CRM & Sales** | Leads, pipeline, accounts, contacts + Sales |
| **Procurement** | Purchase orders, suppliers, goods receipt |
| **Inventory** | Products, warehouses, stock operations |
| **Finance** | Invoices, bills, payments, GL, COA |
| **HR** | Employees, departments, leave |
| **Payroll** | Pay components, pay runs, salary posting |
| **Manufacturing** | BOMs, production orders |
| **Maintenance** | Maintenance plans, work orders |
| **Asset Management** | Fixed assets, depreciation |
| **Projects** | Tasks, milestones, Kanban |
| **Service** | Service tickets |
| **Logistics** | Dispatch, shipments |
| **Document Controller** | PDF templates |
| **GST Compliance** | e-Invoicing, e-way bills |
| **Auditor / BI** | Reports, dashboards (read-only) |
| **Portal User** | External party access only |
| **AI Analytics** | AI insights, co-pilot |

::: tip Multiple Roles
A user can hold multiple roles simultaneously. A sales manager might have **Sales**, **CRM**, and **Inventory** (for stock checks). Their effective permissions are the union of all assigned roles.
:::

## Managing Existing Users

### Deactivate a User

1. Select the user
2. Toggle **Active** to off
3. Save

The user can no longer log in, but their data (created records, audit trail) is preserved.

### Reset Password

1. Select the user
2. Use the **Reset Password** option
3. Enter a new password meeting enterprise security requirements (12+ characters, uppercase, lowercase, number, symbol)
4. Confirm to reset immediately

## Account Security & Device Controls

### Password Complexity Standards

To protect organizational business data, user passwords must satisfy the following minimum requirements:
- At least **12 characters** in length
- At least one **uppercase letter** (`A-Z`)
- At least one **lowercase letter** (`a-z`)
- At least one **number** (`0-9`)
- At least one **special symbol** (e.g. `!@#$%^&*()_+-=`)

### Automatic Brute-Force Lockout

To defend against credential stuffing and automated password guessing:
- If a user enters an incorrect password **5 consecutive times**, the account is temporarily locked for **15 minutes**.
- During the lockout window, subsequent login attempts are rejected with an explicit security notice (`Account locked due to consecutive failed login attempts`).
- Once the 15-minute cooldown elapses, entering the correct password restores full access and resets the failed attempt counter to zero.
- Administrators can unlock a locked user immediately at any time by triggering a **Reset Password**.

### Active Sessions & Recognized Devices

Users and administrators can monitor and manage all active signed-in sessions:

1. Click on the user profile avatar in the top-right application header
2. Select **Active Sessions**
3. The modal displays:
   - **Device & Platform**: Device type icon (Desktop, Mobile, Tablet) with browser and OS details (e.g., `Chrome on macOS`).
   - **Network & Location**: Client IP address and resolved geographical location (City, Country).
   - **Sign-in Timestamp**: When the session was initiated.
   - **This Device Tag**: Highlights the current browser session in green.
4. **Remote Sign Out & Instant Invalidation**:
   - Web browser sessions use hardened `HttpOnly, Secure, SameSite=Lax` server session cookies. No tokens or credentials reside in browser `localStorage`, eliminating client-side token theft vectors.
   - Click **Sign Out** next to any specific device to instantly terminate its session (e.g. if a phone or laptop was misplaced).
   - Click **Sign Out Others** to terminate all other active sign-ins in one action, leaving only the current device authenticated.
   - **Real-Time Push Disconnect**: Terminated devices do not wait for a grace period or expiry window; the server immediately terminates their session and pushes an instant SSE disconnect notification that terminates active browser sessions, clears local workspace tabs and drafts, and redirects remote browsers back to the login screen.

### Portal Users

Portal users are external parties (customers or suppliers) with limited access:

- They are linked to an authoritative **Party** record
- Assign the **Portal User** role — they can only view their own orders, invoices, and tickets
- They see a restricted portal layout, not the full workspace

## How Permissions Work

Permissions flow through three layers:

```
User → Roles → Permissions → Capabilities
```

1. A **User** is assigned **Roles** (e.g., Sales, Inventory)
2. Each **Role** bundles a set of **Permissions** (e.g., `order.create`, `stock.view`)
3. Each **Permission** gates one or more **Capabilities** (the actual business actions)

When a user clicks a button:
- The system checks if their roles include the required permission
- If yes → action proceeds
- If no → action blocked with "You don't have permission" message

### What Users See Without Permissions

- **Menus** for inaccessible modules don't appear in the sidebar
- **Buttons** for forbidden actions are hidden
- **API calls** return 403 Forbidden

## If Something Goes Wrong (Common Validation & Guard Errors)

| What you see (Toast / Banner) | Why it happens | How to fix it in the workspace |
|---|---|---|
| `"Email already registered in the system"` | The email address is already assigned to another user account. | Use a unique corporate email address for each user. |
| `"Password must be at least 12 characters and include uppercase, lowercase, number and symbol"` | The password does not meet minimum complexity standards. | Enter a password with 12+ characters containing uppercase, lowercase, number, and special symbol. |
| `"Password and confirmation do not match"` | The password and confirm password fields in Reset Password differ. | Re-enter both fields ensuring they match identically. |
| `"Cannot deactivate your own user account"` | An administrator attempted to disable their own account while signed in. | Have another administrator modify or suspend your account. |
| `"Account locked due to consecutive failed login attempts"` | A user entered an invalid password 5 consecutive times. | Wait 15 minutes for automatic cooldown, or select the user and click **Reset Password** to unlock immediately. |
| `"Record was modified by another session (vX vs vY)"` | Another administrator updated this user profile concurrently (OCC guard). | The **Conflict Resolution Drawer** opens. Review the other user's changes and choose to merge or reload. |

## Best Practices

1. **Start minimal** — Assign the fewest roles needed. Add more as the user's responsibilities grow.
2. **Use Auditor for read-only** — Give the Auditor/BI role for users who only need to view reports.
3. **Don't share accounts** — Every user should have their own account for proper audit trails.
4. **Deactivate, don't delete** — When someone leaves, deactivate their account to preserve the audit history.

## Related Guides

- **[Party Management](./party-management)** — Master business counterparties directory
- **[Roles & Permissions](./roles-and-permissions)** — Complete permission catalog
- **[Tenant Setup](./tenant-setup)** — Organization configuration
