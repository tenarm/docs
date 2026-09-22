---
title: What is TenArm BES?
description: An overview of TenArm Business Execution System — a modular, multi-tenant platform for end-to-end business operations.
---

# What is TenArm BES?

**TenArm BES** (Business Execution System) is a modular, multi-tenant platform that unifies every operational function — from sales and procurement to manufacturing, HR, and finance — into one integrated workspace.

Instead of stitching together separate tools for CRM, inventory, accounting, and payroll, TenArm BES provides a single system where every department works on the same data, every business transaction flows through a governed pipeline, and every action is auditable.

## Core Design Principles

| Principle | What It Means |
|-----------|--------------|
| **Modular Architecture** | Enable only the apps your business needs. Each module is independent yet seamlessly integrated through events. |
| **Multi-Tenant Isolation** | Every organization gets its own fully isolated data space. No data leaks, no cross-tenant access. |
| **Governed Capability Pipeline** | Every business action (create order, approve PO, post journal) flows through a unified pipeline with permission checks, audit logging, and event emissions. |
| **Event-Driven Integration** | Modules communicate through business events. When Sales ships an order, Inventory automatically adjusts stock and Finance posts the cost of goods. |
| **Role-Based Access Control** | Fine-grained permissions control exactly who can see, create, approve, or transition every document in the system. |

## The Modules

TenArm BES ships with **18 modules** spanning the full business lifecycle:

### Core Domain Apps

| Module | Description |
|--------|-------------|
| **CRM** | Leads, accounts, contacts, an opportunity pipeline and follow-up activities |
| **Sales** | Quotations, sales orders, customer management and order lifecycle |
| **Procurement** | Purchase orders, supplier management and goods receipt |
| **Inventory** | Products, warehouses, stock movements and balances |
| **Finance** | Chart of accounts, journal entries, general ledger, and accounting periods |
| **Manufacturing** | Bills of materials and production orders with WIP/finished-goods costing |
| **HR** | Employees, departments, and leave management |
| **Payroll** | Compensation components, pay runs, and salary posting to the GL |
| **Maintenance** | Preventive maintenance plans and work orders |
| **Asset Management** | Fixed assets, assignments, maintenance tracking and depreciation |
| **Projects** | Project & task management with Kanban boards and milestones |
| **Service** | Service tickets — capture, assign, work and resolve customer requests |
| **Documents** | Editable PDF templates for quotations, invoices and other documents |

### Utility Add-Ons

| Module | Description |
|--------|-------------|
| **Logistics** | Shipments, dispatch operations, carrier tracking, and proof of delivery |
| **GST Invoicing** | Generate GST-compliant e-invoices (IRN) via the NIC IRP |
| **Customer Portal** | Restricted shell for external parties to view their own data |
| **Reporting** | Dashboards, financial reports, projections and read-models |
| **AI Analytics** | Rule-based insights, ML-powered forecasts, and co-pilot assistance |

## End-to-End Business Storylines

Rather than isolated modules, TenArm BES is designed around **business storylines** — the cross-module workflows that drive real operations:

### Order to Cash (O2C)
> Lead → Opportunity → Quotation → Sales Order → Stock Pick & Ship → Invoice → Payment → GL Posting

### Procure to Pay (P2P)
> Purchase Requisition → Purchase Order → Goods Receipt → Bill → Payment → GL Posting

### Make to Order (M2O)
> Sales Order → Bill of Materials → Work Order → Material Issue → Production → Finished Goods → Shipment

Each storyline shows how events flow between modules automatically — no manual handoffs, no data re-entry.

## How the System Works

Every business action in TenArm BES follows the same governed pipeline:

```
User clicks a button
    → API request reaches the backend
        → Capability Pipeline checks:
            ✓ Does this capability exist?
            ✓ Is the user's license valid?
            ✓ Does the user have the required permission?
            ✓ Is the document in a valid state for this action?
        → Executes the business logic
        → Emits a business event (e.g., "OrderShipped")
        → Projections react (e.g., Finance posts COGS)
        → Audit log records the action
    → Response returns to the UI
```

This means every action — whether it's creating a lead, approving a purchase order, or posting a journal entry — goes through the same security, validation, and audit pipeline.

## The Workspace

TenArm BES features a **multi-tab workspace** designed for productive daily work:

- **3-tab workspace** — Work on up to 3 tasks simultaneously without losing context
- **Command desk pattern** — Each module's main screen shows a split view: entity list on the left, detail/form on the right
- **Quick-peek drawers** — Inspect related documents (e.g., view an invoice while reviewing a sales order) without leaving your current task
- **Command palette** (⌘K) — Jump to any page, search for any entity, or trigger any action instantly

## Next Steps

- **[Quick Start Guide](./quick-start)** — Get up and running with TenArm BES
- **[Glossary](./glossary)** — Key terms and concepts
- **[User Guides](/user-guides/)** — Module-by-module feature guides
- **[Admin Guides](/admin-guides/)** — Setup and configuration
