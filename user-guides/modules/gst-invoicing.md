---
title: GST Invoicing
description: Generate GST-compliant e-invoices (IRN) via the NIC IRP for Indian tax compliance.
---

# GST Invoicing

The GST Invoicing add-on generates GST-compliant electronic invoices through India's National Informatics Centre (NIC) Invoice Registration Portal (IRP).

## Key Features

### e-Invoice Generation (IRN)
- Generate Invoice Registration Numbers (IRN) for sales invoices
- Digitally sign invoices via the IRP
- Generate QR codes for e-invoice verification

### Compliance

| Requirement | How TenArm Handles It |
|------------|----------------------|
| **IRN Generation** | Auto-generated on invoice issue |
| **Digital Signature** | Signed via NIC IRP |
| **QR Code** | Generated and embedded in PDF |
| **B2B Compliance** | All B2B invoices above threshold auto-registered |

### How It Works

1. Create and issue an invoice in the **Finance** module
2. Navigate to **GST → e-Invoices**
3. Select invoices ready for IRN generation
4. Click **Generate IRN**
5. System sends invoice data to NIC IRP and receives:
   - IRN (Invoice Registration Number)
   - Digitally signed invoice
   - QR code

### Prerequisites

Before using GST Invoicing, configure:
- **Organization GSTIN** — in [Tenant Setup](../../admin-guides/tenant-setup.md)
- **State Code** — for intra/inter-state determination
- **Tax Codes** — GST rates in [Finance Setup](../../admin-guides/finance-setup.md)

## Navigation

| Page | Path | Permission |
|------|------|-----------|
| GST Compliance | `/gst/einvoices` | `gst.einvoice.view` |
| e-Invoices | `/gst/einvoices` | `gst.einvoice.view` |
| e-Way Bills | `/gst/ewaybills` | `gst.ewaybill.view` |
| Dashboard | `/gst/dashboard` | `gst.einvoice.view` |

## Cross-Module Integration

| Integration | How It Works |
|------------|-------------|
| **Finance** | IRN generated from issued invoices |
| **Sales** | Invoice data flows from sales orders |

## Permissions

| Permission | Description |
|-----------|-------------|
| `gst.einvoice.view` | View e-invoices |
| `gst.einvoice.generate` | Generate IRN |
| `gst.einvoice.cancel` | Cancel IRN |
| `gst.ewaybill.view` | View e-way bills |
| `gst.ewaybill.generate` | Generate e-way bills |
