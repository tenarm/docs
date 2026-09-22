---
title: Customer Portal
description: Self-service portal for customers and suppliers to view their own orders, invoices, and tickets.
---

# Customer Portal

The Portal add-on provides a restricted, self-service interface for external parties (customers and suppliers) to access their own data.

## Key Features

### What Portal Users Can Do
- View their own **orders** (sales orders, purchase orders)
- View their own **invoices** and payment history
- Submit and track **service tickets**
- Download **documents** (quotation PDFs, invoice PDFs)

### What Portal Users Cannot Do
- View other customers' data
- Access internal modules (CRM, Finance, HR, etc.)
- Modify master data
- View internal pricing or cost information

## How It Works

### Creating a Portal User

1. Navigate to **Settings → User Management**
2. Click **New User**
3. Set the user's email and password
4. Link the user to a **Party** record (the customer or supplier account)
5. Assign the **Portal User** role

The portal user sees a simplified layout — only their own orders, invoices, and tickets.

### Data Scoping

Portal users are automatically scoped to their party:
- They can only see records where they are the customer or supplier
- No `X-Tenant-ID` header or impersonation — enforced at the database query level
- Full tenant isolation remains in effect

## Navigation

Portal users see a simplified menu:

| Page | What They See |
|------|-------------|
| **My Orders** | Their own sales/purchase orders |
| **My Invoices** | Their own invoices and bills |
| **My Tickets** | Their own service tickets |
| **Documents** | Downloadable PDFs |

## Permissions

| Permission | Description |
|-----------|-------------|
| `portal.orders.view` | View own orders |
| `portal.invoices.view` | View own invoices |
| `portal.tickets.view` | View own service tickets |
| `portal.tickets.create` | Submit new service tickets |

::: tip
Portal users use the same login page and authentication flow as internal users. The system automatically presents the portal layout based on their role.
:::
