---
title: App Enablement
description: Enable or disable modules for your organization — control which business functions are available.
---

# App Enablement

TenArm BES ships with 18 modules, but not every organization needs all of them. **App Enablement** lets you turn modules on or off per organization.

## How It Works

- By default, **all apps are enabled** for a new organization
- To disable an app, add its name to the organization's disabled list
- Disabled apps are hidden from the sidebar, their capabilities are blocked, and their menus disappear
- Re-enabling an app restores access immediately — no data is lost

## Available Apps

### Core Domain Apps
| App | Code | What It Does |
|-----|------|-------------|
| CRM | `crm` | Leads, accounts, pipeline, activities |
| Sales | `sales` | Quotations, sales orders, shipments |
| Procurement | `procurement` | Purchase orders, goods receipt |
| Inventory | `inventory` | Products, warehouses, stock |
| Finance | `finance` | GL, journals, invoices, payments |
| HR | `hr` | Employees, departments, leave |
| Payroll | `payroll` | Compensation, pay runs |
| Manufacturing | `manufacturing` | BOMs, production orders |
| Maintenance | `maintenance` | Preventive plans, work orders |
| Asset Management | `asset_management` | Fixed assets, depreciation |
| Projects | `projects` | Tasks, milestones, Kanban |
| Service | `service` | Service tickets |
| Documents | `documents` | PDF templates |

### Utility Add-Ons
| App | Code | What It Does |
|-----|------|-------------|
| Logistics | `logistics` | Shipments, dispatch, carrier tracking |
| GST Invoicing | `gst_invoicing` | e-Invoice IRN generation |
| Customer Portal | `portal` | External party self-service |
| Reporting | `reporting` | Dashboards, analytics |
| AI Analytics | `ai` | Insights, forecasts, co-pilot |

## Managing App Enablement

Navigate to **Settings → App Management**:

1. View the list of all available apps with their current status (Enabled/Disabled)
2. **Toggle** an app on or off
3. Changes take effect immediately for all users in the organization

## What Happens When You Disable an App

| Aspect | Behavior |
|--------|---------|
| **Sidebar** | Module disappears from navigation |
| **Capabilities** | All capability calls for that module return a license error |
| **Data** | All existing data is preserved — nothing is deleted |
| **Events** | Events already emitted remain in the event store |
| **Re-enable** | Turning the app back on restores full access to all existing data |

::: warning
Disabling a module that other modules depend on may affect cross-module integrations. For example, disabling Finance while Sales is active means COGS entries won't be posted when stock is shipped.
:::

## Recommended Starter Configurations

### Trading / Distribution Company
Enable: CRM, Sales, Procurement, Inventory, Finance, Logistics

### Manufacturing Company
Enable: Sales, Procurement, Inventory, Finance, Manufacturing, Maintenance

### Professional Services Firm
Enable: CRM, Projects, Finance, HR, Service

### Full Suite
Keep all apps enabled (default)
