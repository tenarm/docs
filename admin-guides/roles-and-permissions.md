---
title: Roles & Permissions
description: Understand how TenArm BES controls access — system roles, permissions, and how to configure them for your organization.
---

# Roles & Permissions

TenArm BES uses **Role-Based Access Control (RBAC)** to govern who can see, create, edit, and approve business documents. Every button, menu item, and action in the system is protected by a **permission check**.

## How It Works

```
User clicks "Approve Order"
    → System checks: Does the user have the `order.approve` permission?
        → YES → Execute the approval pipeline
        → NO  → 403 Forbidden — "You don't have permission to approve orders"
```

Permissions are never assigned directly to users. Instead:

1. **Permissions** are grouped into **Roles**
2. **Roles** are assigned to **Users**
3. A user can hold **multiple roles** (e.g., a sales manager might have both "Sales" and "CRM" roles)

## System Roles

TenArm BES ships with pre-configured system roles. Each role bundles the permissions needed for a specific job function:

| Role | Description | Permissions |
|------|-------------|:-----------:|
| **Admin** | Full access to all modules, settings, and user management | All |
| **Sales** | Quotations, orders, and customer management | 38 |
| **Procurement** | Purchase orders, suppliers, and goods receipt | 22 |
| **Finance** | Invoicing, bills, payments, and the general ledger | 62 |
| **Inventory** | Products, stock, warehouses, and material receipts | 31 |
| **CRM & Sales** | Leads, opportunities, pipelines, and customer touchpoints | 41 |
| **HR** | Employees, departments, leave, and attendance | 31 |
| **Payroll** | Salary structures, pay components, and pay runs | 28 |
| **Manufacturing** | Bills of materials and production work orders | 20 |
| **Maintenance** | Equipment maintenance plans, schedules, and work orders | 20 |
| **Asset Management** | Fixed asset lifecycle, maintenance, and depreciation | 17 |
| **Projects** | Project tasks, milestones, and collaboration | 18 |
| **Service** | Service contracts, customer support tickets, and field tasks | 17 |
| **Logistics** | Dispatch, transfers, and warehouse movement | 22 |
| **GST Compliance** | E-invoicing, e-way bills, and GST credentials | 10 |
| **Document Controller** | Document templates and business document generation | 8 |
| **Portal User** | External customer/supplier portal access | 3 |
| **Auditor / BI** | Dashboards, analytical reports, and system projections | 25 |
| **AI Analytics** | AI insights, predictions, and conversational co-pilot | 5 |

::: tip Combining Roles
A user who manages both sales and inventory would be assigned both the **Sales** and **Inventory** roles. Their effective permissions are the union of all assigned role permissions.
:::

## Assigning Roles to Users

1. Navigate to **Settings → User Management**
2. Select or create a user
3. In the **Roles** section, check the roles this user should have
4. Save — the user's permissions update immediately

## Understanding Permissions

Each permission controls a specific action. Permission codes follow a consistent pattern:

| Pattern | Example | Meaning |
|---------|---------|---------|
| `{entity}.view` | `lead.view` | Can see leads in the list and detail views |
| `{entity}.create` | `po.create` | Can create new purchase orders |
| `{entity}.update` | `order.update` | Can edit existing sales orders |
| `{entity}.submit` | `po.submit` | Can submit a PO for approval |
| `{entity}.approve` | `order.approve` | Can approve submitted orders |
| `{entity}.cancel` | `invoice.cancel` | Can cancel an invoice |
| `{module}.dashboard.view` | `crm.dashboard.view` | Can view the CRM dashboard |

### What Happens Without a Permission?

- **Menu items** for that module won't appear in the sidebar
- **Buttons** for that action won't be visible
- **API calls** will be rejected with a 403 Forbidden response
- The user gets a clear "You don't have permission" message

## Permission Reference

For the complete list of all permissions organized by module, see the platform permission definitions in the Integrator documentation or inspect live permissions using `./tenarm facts apps`.

::: info Full Catalog Available
The system declares **200+ individual permissions** across 18 modules. The complete catalog — including which roles grant each permission — is auto-generated from the codebase and always reflects the current version.
:::

## Common Configuration Scenarios

### Scenario 1: Sales Team
A sales representative who handles quotes and orders:
- Assign: **Sales** + **CRM** roles
- They get: Lead management, pipeline, quotations, sales orders, customer access, and read-only inventory/warehouse access for stock checks

### Scenario 2: Finance Manager
An accountant who manages invoicing and the general ledger:
- Assign: **Finance** role
- They get: Chart of accounts, journal entries, invoices, bills, payments, GL access, and financial reports

### Scenario 3: Warehouse Operator
A warehouse worker who receives goods and manages stock:
- Assign: **Inventory** role
- They get: Product viewing, stock movements, goods receipt, inventory adjustments, and warehouse management

### Scenario 4: External Customer
A customer accessing their own orders through the portal:
- Assign: **Portal User** role
- They get: View-only access to their own orders, invoices, and support tickets — nothing else

## Related Guides

- **[User Management](/admin-guides/user-management)** — How to create and manage user accounts
- **[Tenant Setup](/admin-guides/tenant-setup)** — Initial organization configuration
- **[App Enablement](/admin-guides/app-enablement)** — Enable or disable modules
