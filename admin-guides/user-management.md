---
title: User Management
description: Create user accounts, assign roles, and manage access for your organization.
---

# User Management

Every person who uses TenArm BES needs a user account. This guide covers creating users, assigning roles, and managing their access.

## Creating a User

1. Navigate to **Settings → User Management**
2. Click **New User**
3. Fill in the required fields:

| Field | Required | Notes |
|-------|:--------:|-------|
| **Email** | ✅ | Must be unique across the entire system. Used for login. |
| **Full Name** | ✅ | Displayed throughout the UI |
| **Password** | ✅ | Set an initial password for the user |
| **Active** | ✅ | Defaults to active. Deactivate to suspend access without deleting. |

4. Click **Save**

## Assigning Roles

After creating a user, assign one or more roles to control their access:

1. Select the user from the user list
2. In the **Roles** section, check the roles to assign
3. Save changes — permissions take effect immediately

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
3. Set a new password

### Portal Users

Portal users are external parties (customers or suppliers) with limited access:

- They're linked to a **Party** record via `party_id`
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

## Best Practices

1. **Start minimal** — Assign the fewest roles needed. Add more as the user's responsibilities grow.
2. **Use Auditor for read-only** — Give the Auditor/BI role for users who only need to view reports.
3. **Don't share accounts** — Every user should have their own account for proper audit trails.
4. **Deactivate, don't delete** — When someone leaves, deactivate their account to preserve the audit history.

## Related Guides

- **[Roles & Permissions](./roles-and-permissions)** — Complete permission catalog
- **[Tenant Setup](./tenant-setup)** — Organization configuration
