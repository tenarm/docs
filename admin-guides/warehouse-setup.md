---
title: Warehouse Setup
description: Configure warehouses, zones, and locations for inventory management.
---

# Warehouse Setup

Warehouses define where your inventory is stored. Set them up before receiving or shipping stock.

## Creating a Warehouse

1. Navigate to **Inventory → Warehouses**
2. Click **New Warehouse**
3. Fill in:

| Field | Required | Description |
|-------|:--------:|-------------|
| **Code** | ✅ | Short unique identifier (e.g., `WH-MAIN`, `WH-EAST`) |
| **Name** | ✅ | Descriptive name (e.g., "Main Warehouse — Mumbai") |
| **Address** | — | Physical location address |
| **Status** | ✅ | `ACTIVE` (default) or `INACTIVE` |

4. Click **Save**

## Warehouse Status

| Status | Meaning |
|--------|---------|
| **ACTIVE** | Available for stock operations (receipts, shipments, transfers) |
| **INACTIVE** | No new transactions allowed — existing stock remains on record |

::: warning
Deactivating a warehouse does not move or delete existing stock. Clear all stock balances before deactivating, or the inventory reports will still show quantities.
:::

## Warehouse Types

Configure warehouses for different operational needs:

| Type | Use Case | Example |
|------|----------|---------|
| **General** | Standard goods storage | Main Warehouse |
| **Raw Materials** | Manufacturing inputs | RM Store |
| **Finished Goods** | Ready-to-sell products | FG Warehouse |
| **Transit** | In-transit between locations | Transit WH |
| **Quarantine** | Quality inspection hold | QC Hold Area |
| **Returns** | Customer returns processing | Returns Dock |

## Stock Operations by Warehouse

Once warehouses are set up, stock operations reference them:

| Operation | Source WH | Destination WH |
|-----------|:---------:|:--------------:|
| **Receive** (from PO) | — | ✅ |
| **Ship** (sales/dispatch) | ✅ | — |
| **Transfer** (between WHs) | ✅ | ✅ |
| **Adjust** (correction) | ✅ | — |

## Setup Checklist

- [ ] Create at least one active warehouse
- [ ] Set up any specialized warehouses (transit, returns, quarantine)
- [ ] Map warehouse GL accounts in Finance (Inventory Asset accounts per warehouse, if needed)
- [ ] Verify warehouse shows in product receipt/shipment dropdowns

## Related Guides

- **[Inventory Module](../user-guides/modules/inventory)** — Stock operations
- **[Product Catalog Setup](./product-catalog-setup)** — Products that go into warehouses
- **[Finance Setup](./finance-setup)** — GL accounts for inventory valuation
