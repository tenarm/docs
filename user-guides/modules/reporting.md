# Reporting

> One executive dashboard with the key figures from every part of the business, for a month you choose.

Each module has its own dashboard for its own work (for example **Sales → Dashboard**). Reporting holds only the view
that spans them: the **CEO Dashboard**.

## CEO Dashboard

**What it does** — brings together sales, pipeline, stock, purchasing and finance figures on one page, each panel
linking to the module's own dashboard.

**How to use**
1. Go to **Reporting → CEO Dashboard**.
2. Pick the period:
   - **Op Period (YYYY-MM)** — the month for operational figures (orders, leads, purchase orders). It starts on the
     current month.
   - **Finance period** — the accounting period for the finance figures. **Auto (First Open)** uses the first open
     period; the list shows each period with its status, e.g. *June 2026 [OPEN]*. Choosing one also moves the
     operational month to match.
3. Read the headline figures, then click **View** on a panel to open that module's dashboard.

**What it shows**

| Panel | Figures |
|---|---|
| Headline | **Revenue This Period** (with orders and bookings), **Open Pipeline**, **Total Products**, **Open Purchase Orders**, **Net Profit** |
| Pipeline | Open deals, pipeline value, leads this period, won and lost this period — **View** opens the CRM pipeline |
| Sales | The monthly revenue trend — **View** opens the Sales dashboard |
| Inventory | Stock by warehouse — **View** opens the Inventory dashboard |
| Procurement | Purchase orders by status — **View** opens the Procurement dashboard |
| Finance | Revenue and expenses for the finance period — **View** opens the Finance dashboard |

**Things to know**
- A panel shows a note such as *No sales data yet*, *No POs yet* or *No posted journals yet* until its module has
  data for the period.
- Under **Net Profit**, *Books balanced* or *Out of balance* tells you whether the trial balance for the finance period
  balances; *No period selected* means no accounting period matches.
- Reporting only reads the other modules' figures; it never changes them.

## Integrations

| Module | What the dashboard reads |
|---|---|
| CRM | The CRM dashboard: deals, pipeline value, leads won and lost |
| Sales | The sales dashboard: revenue, orders, bookings, monthly trend |
| Inventory | The inventory dashboard: products and stock by warehouse |
| Procurement | The procurement dashboard: purchase orders by status |
| Finance | The finance dashboard and accounting periods: revenue, expenses, net profit |

## Permissions

| Permission | What it unlocks |
|---|---|
| `reporting.dashboard.view` | Open the CEO Dashboard |
