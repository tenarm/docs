---
title: Quick Start Guide
description: Get up and running with TenArm BES in minutes.
---

# Quick Start Guide

Get started with TenArm BES in a few simple steps.

## For Users

### 1. Log In

Navigate to your organization's TenArm BES URL and sign in with the credentials provided by your administrator.

### 2. Navigate the Workspace

Once logged in, you'll see the **workspace shell** — your home for all business operations:

- **Left sidebar** — Navigate between modules (CRM, Sales, Inventory, etc.)
- **Tab bar** — Work on up to 3 tasks at once using tabs
- **Command palette** — Press `⌘K` (Mac) or `Ctrl+K` (Windows) to instantly search and jump to any page

### 3. Open Your First Module

Click any module in the sidebar to open it. Each module uses the **command desk** layout:

| Area | What It Shows |
|------|--------------|
| **Left panel** | List of records (orders, leads, invoices, etc.) with filters and search |
| **Right panel** | Detail view or form for the selected record |

### 4. Understand Document Workflows

Most documents in TenArm BES follow a **status lifecycle**. For example, a Sales Order flows through:

```
DRAFT → SUBMITTED → APPROVED → SHIPPED → DELIVERED → COMPLETED
```

Status transitions are governed by the capability pipeline — the system checks your permissions and validates business rules before allowing each transition.

### 5. Use Quick-Peek

When viewing a document, you'll often see references to other records (e.g., an order references its customer). Click these references to open a **quick-peek drawer** — a slide-over panel that shows the related record without leaving your current page.

---

## For Administrators

### 1. Complete Tenant Setup

After your TenArm BES instance is provisioned:

1. **Organization details** — Set your company name, address, and tax registration
2. **Fiscal year** — Configure your accounting period start date
3. **Base currency** — Set your operating currency

### 2. Enable Apps

Navigate to **Settings → App Management** to enable the modules your organization needs. Only enabled apps appear in the sidebar.

### 3. Create Users & Assign Roles

1. Go to **Settings → User Management**
2. Create user accounts for your team
3. Assign roles to each user — roles control which modules and actions they can access

Available system roles include:

| Role | Access Level |
|------|-------------|
| **Admin** | Full access to all modules and settings |
| **Sales** | Quotations, orders, customer management |
| **Procurement** | Purchase orders, supplier management, goods receipt |
| **Finance** | Chart of accounts, journal entries, invoicing |
| **Inventory** | Products, warehouses, stock operations |
| **HR** | Employee management, departments, leave |
| **Manufacturing** | BOMs, production orders, work orders |

::: tip
Users can have multiple roles. A sales manager might have both the **Sales** and **CRM** roles.
:::

### 4. Configure Master Data

Before teams can start working, set up the foundational data:

| Setup Task | Where | What to Configure |
|-----------|-------|-------------------|
| **Products** | Inventory → Products | Items your company buys, sells, or manufactures |
| **Warehouses** | Inventory → Warehouses | Storage locations for inventory tracking |
| **Chart of Accounts** | Finance → Chart of Accounts | GL account structure for financial reporting |
| **Tax Codes** | Finance → Tax Codes | Tax rates and GST/VAT configurations |
| **Parties** | Master Data → Parties | Customers, suppliers, and other business partners |

### 5. Verify with a Test Transaction

Run a quick end-to-end test to verify everything is configured correctly:

1. Create a **Customer** (party)
2. Create a **Product** with pricing
3. Create a **Sales Order** for that customer and product
4. Submit and approve the order

If the order flows through successfully, your setup is complete.

---

## What's Next?

- **[User Guides](/user-guides/)** — Detailed module-by-module feature documentation
- **[Admin Guides](/admin-guides/)** — Advanced configuration and setup
- **[Glossary](./glossary)** — Key terms and concepts used throughout the system
