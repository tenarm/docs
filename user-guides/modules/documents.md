---
title: Documents
description: Editable PDF templates for quotations, invoices, and other business documents.
---

# Documents

The Documents module lets you create and manage PDF templates used for generating printable business documents.

## Key Features

### Document Templates
Create customizable PDF templates for:
- Quotations
- Sales Orders
- Purchase Orders
- Invoices
- Bills
- Delivery Notes
- Goods Receipt Notes

### Template Editor
- Visual template editor with placeholder fields
- Insert dynamic data from the linked entity (customer name, line items, totals, etc.)
- Configure headers, footers, and branding
- Set page layout (portrait/landscape, margins)

### Template Variables
Templates use placeholders that auto-fill with document data:

| Variable | Resolves To |
|----------|------------|
| `{{company_name}}` | Your organization name |
| `{{document_number}}` | Document number (e.g., INV-2024-0001) |
| `{{customer_name}}` | Customer/supplier name |
| `{{line_items}}` | Table of line items |
| `{{total}}` | Grand total |
| `{{date}}` | Document date |

### PDF Generation
- Generate PDFs from any supported document with one click
- Download or email the generated PDF
- Multiple templates per document type (e.g., detailed vs summary invoice)

## Navigation

| Page | Path | Permission |
|------|------|-----------|
| Document Templates | `/control/document-templates` | `document_template.view` |

## Permissions

| Permission | Description |
|-----------|-------------|
| `document_template.view` | View templates |
| `document_template.create` | Create/edit templates |
| `document_template.delete` | Delete templates |
| `document.generate` | Generate PDFs from templates |
