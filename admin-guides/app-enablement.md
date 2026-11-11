---
title: App Enablement
description: Manage active modules, industry packs, and country packs for your organization in TenArm BES.
---

# App Enablement

TenArm BES is built on a modular architecture comprising **21 commercial applications, utility add-ons, country compliance packs, and specialized industry modules**.

Because an industrial steel service center has very different operational needs than a professional services firm, **App Enablement** allows organizations to activate only the business capabilities they need.

---

## How App Enablement Works

- **Tenant-Scoped Activation**: Modules are enabled or disabled independently per organization.
- **Dynamic Interface Adaptation**: When a module is turned off, its navigation icons disappear from the sidebar, its command palette shortcuts are hidden, and its action buttons in cross-module workflows are cleanly suppressed.
- **Data Non-Destruction**: Disabling an app **never deletes or modifies data**. Existing customer accounts, historical purchase orders, posted invoices, and event ledgers remain preserved. Turning the app back on immediately restores full operational access.
- **Soft Dependency Degradation**: When a companion module is turned off, dependent modules adapt gracefully without breaking. For example, if **Sales** is enabled but **Finance** is disabled, sales orders and delivery notes function smoothly, while financial general ledger postings are safely held in abeyance.

---

## Complete Catalog of Modules & Packs

### 1. Core Commercial & Operational Applications

| Application | Code | Primary Business Scope | Companion Modules |
|---|---|---|---|
| **CRM** | `crm` | Leads, prospects, commercial accounts, sales pipelines, and customer follow-up activities. | Sales, Finance |
| **Sales** | `sales` | Commercial Sales Desk, quotations, sales orders, stock reservations, backorders, and customer delivery notes. | CRM, Inventory, Finance, Logistics |
| **Procurement** | `procurement` | Purchase orders, RFQs, vendor management, dock receiving, and vendor bill verification. | Inventory, Finance |
| **Inventory** | `inventory` | Warehouses, bin locations, product catalogs, dual-unit catch-weight, stock movements, and lot tracking. | Sales, Procurement, Logistics |
| **Finance** | `finance` | Chart of Accounts, double-entry journals, accounts payable/receivable, bank reconciliation, and fiscal periods. | Sales, Procurement, HR, Payroll |
| **HR** | `hr` | Employee directory, departments, designations, shifts, attendance tracking, and leave requests. | Payroll, Asset Management |
| **Payroll** | `payroll` | Compensation structures, monthly pay runs, salary slips, and direct financial GL journal posting. | HR, Finance |
| **Manufacturing** | `manufacturing` | Multi-level Bills of Materials (BOM), production work orders, and finished goods WIP costing. | Inventory |
| **Maintenance** | `maintenance` | Preventive equipment maintenance schedules, meter readings, and machine repair work orders. | Asset Management, Inventory |
| **Asset Management** | `asset_management` | Fixed asset registry, custodial assignments, depreciation schedules, and asset disposals. | Maintenance, Finance |
| **Projects** | `projects` | Project tracking, milestone management, task Kanban boards, and billable timesheets. | CRM, Service |
| **Service** | `service` | Customer service tickets, SLA tracking, helpdesk routing, and customer issue resolution. | CRM, Projects |
| **Documents** | `documents` | Custom HTML/CSS PDF document templates for invoices, quotations, purchase orders, and packing slips. | Core Platform |

### 2. Utility Add-Ons & Self-Service Portals

| Application | Code | Primary Business Scope | Target Audience |
|---|---|---|---|
| **Logistics** | `logistics` | Outbound vehicle dispatches, carrier tracking, driver details, and proof-of-delivery management. | Warehouse & Dispatch Teams |
| **Customer Portal** | `portal` | Restricted, self-service customer web shell to inspect orders, download invoices, and review account statements. | External Customers & Buyers |
| **Employee Self-Service** | `self_service` | Dedicated portal for employees to review salary slips, apply for leave, and view personal attendance. | All Enterprise Staff |
| **Reporting** | `reporting` | Executive CEO Dashboard consolidating headline performance metrics across sales, pipeline, stock, and profit. | Business Executives & Owners |
| **AI Insights** | `ai` | Rule-based predictive monitors detecting overdue orders, below-reorder inventory, and dormant stock locally on-device. | Operations & Inventory Leads |
| **AI Assistant** | `assistant` | Conversational natural-language co-pilot answering live operational queries about revenue, backlog, and cashflow. | Management & Department Heads |

### 3. Country & Industry Packs

| Pack | Code | Primary Business Scope | Prerequisites |
|---|---|---|---|
| **India Compliance Pack** | `india` | Goods & Services Tax (GST) rules, e-Invoicing (IRN), E-Way bill generation, and Section 194Q buyer TDS. | Finance, Sales |
| **Steel Industry Pack** | `steel` | Catch-weight coil register, metallurgical heat numbers, grade tracking, and dimensional slit coil allocation. | Inventory, Sales |

---

## Recommended Industry Blueprints

Organizations can adopt pre-configured blueprints tailored to their operational footprint:

### 1. Metals & Steel Distribution
- **Recommended Modules**: `steel`, `sales`, `inventory`, `logistics`, `procurement`, `finance`, `crm`
- **Key Flow**: Multi-ton coils received with metallurgical test certificates, quoted with live catch-weight pricing, allocated by heat number, and dispatched with carrier challans.

### 2. Discrete Manufacturing & Assembly
- **Recommended Modules**: `manufacturing`, `maintenance`, `inventory`, `procurement`, `finance`, `hr`, `asset_management`
- **Key Flow**: Multi-level BOM definition, production orders reserving component inventory, machine maintenance tracking, and finished goods transfer to stock.

### 3. Wholesale Distribution & Trading
- **Recommended Modules**: `sales`, `procurement`, `inventory`, `logistics`, `finance`, `crm`, `portal`
- **Key Flow**: Sales Desk deal negotiation, backorder management, multi-warehouse stock reservation, carrier vehicle scheduling, and customer self-service order tracking.

### 4. Professional & Engineering Services
- **Recommended Modules**: `projects`, `service`, `crm`, `finance`, `hr`, `payroll`, `self_service`
- **Key Flow**: Lead-to-project handover, milestone task tracking, staff timesheets, automated customer milestone invoicing, and payroll execution.

---

## Managing Module Enablement

App activation is configured per tenant during organizational provisioning and can be adjusted through the **Tenant Operations Console** (`/platform/tenants`):

1. Platform administrators open the target organization record.
2. Under the **Apps & Modules** tab, active applications are selected from the master catalog.
3. Clicking **Save Changes** updates the tenant's active capability registry.
4. Changes take effect across user workstations upon their next tab navigation or session refresh.

---

## If Something Goes Wrong (Common Validation & Guard Errors)

| What you see (Toast / Banner) | Why it happens | How to fix it in the workspace |
|---|---|---|
| `"Application is not enabled for this organization"` | A user attempted to navigate to a screen or URL belonging to a deactivated module. | Verify your company's subscribed license blueprint or contact your platform administrator to activate the module. |
| `"Missing companion module dependency"` | Attempting to execute an operation requiring a companion module (e.g. creating a BOM while Inventory is off). | Activate the required prerequisite module (e.g. `inventory` for `manufacturing`). |
| `"Module hidden in navigation"` | An active user cannot locate a specific module icon in the left Nav Rail. | Check whether the module is enabled in your tenant blueprint and verify that the user's role grants permission for that app. |
| `"License expired: Interruption imminent"` | Your organization's license term has lapsed or is within the 30-day renewal grace window. | Renew your tenant subscription with your TenArm provider to avoid workspace access interruption. |
