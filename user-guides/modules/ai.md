# AI Insights

> Rule-based alerts that watch your stock, purchasing and sales and tell you, on the document concerned, when something needs attention.

AI Insights runs entirely inside your organization's data: its rules are fixed checks with thresholds you set, and
nothing is sent to an outside service. It is on for every organization unless your administrator switches it off.
For a chat assistant that answers questions in plain language, see [AI Assistant](./assistant).

## Insights

**What it does** — raises an insight when a rule spots a problem, shows it where you work, and records what you did
about it.

**What it watches**

| Insight | When it is raised | Example title |
|---|---|---|
| Overdue purchase order | An approved or partly received PO is past its expected delivery date plus the grace days | *PO PO-00042 is 6 days overdue* |
| Below reorder point | A product falls below its reorder point and no open PO covers it | *Steel sheet 2mm is below reorder point* |
| Supplier reliability | After a receipt, a supplier's late deliveries reach the late-rate threshold | *Acme Metals has been late on 4/6 deliveries* |
| Dead stock | A product with stock on hand has not moved for the dormancy period | *Copper rod may be dead stock (120 days idle)* |
| Over-commitment | Open, unexpired quotations ask for more of a product than is available to promise | *Coil HR-3 is over-committed across open quotes* |

Each insight carries a severity — **LOW**, **MEDIUM**, **HIGH** or **CRITICAL** — and a confidence score.

**States**

| State | What it means | What you can do next |
|---|---|---|
| OPEN | Raised and waiting for someone to act | Accept its recommendation, Dismiss |
| ACCEPTED | Someone took the recommended action | — |
| DISMISSED | Someone decided it does not apply | — |
| RESOLVED | The condition cleared on its own | — |

**Where you see insights**
- **AI Suggestions panel** — the sparkle button at the edge of the screen opens *AI Suggestions*, listing every open
  insight you are allowed to see. When there are none it shows **All Clear**.
- **On a document** — purchase orders, sales orders and products show an **AI Insights** card with the insights about
  that document.
- **Workspace tabs** — a tab whose document has an open insight shows an alert marker.

**How to use**
1. Open **AI Suggestions** and read the card: severity, title, description and match percentage.
2. Click **Review** to open the document the insight is about in a new tab.
3. On the document's **AI Insights** card, click the recommended action — **Create Purchase Order**,
   **Create Reorder PO**, **Contact Supplier**, **Create Invoice**, **Follow Up** or **Review** — to accept it and open
   the screen for it, or click **Not now** to dismiss it.
4. Use the thumbs up / thumbs down buttons to mark an insight as helpful or not; your feedback tunes future insights.

**Things to know**
- You only see insights about areas you have access to: a sales user does not see purchasing insights.
- If AI Insights is switched off, or you lack the `ai.view` permission, no insight panel or card appears at all.
- Overdue purchase orders, dead stock and over-commitment are checked by the scheduled **AI Insight Scan** job, once
  an administrator enables it; reorder and supplier alerts are raised as stock moves and goods arrive.
- Old resolved and dismissed insights are cleared by the **AI Insights Prune** job.

## Sensitivity settings

**What it does** — tunes when each rule fires. Business settings such as a product's reorder point stay in their own
module; these settings only change what AI notices.

**How to use**
1. Open **Tenant Configuration** (in Control) and select the **AI Sensitivity** tab.
2. Adjust the values under *AI Intelligence & Sensitivity* and click **Save Changes**.

**Key fields**

| Field | Values / notes |
|---|---|
| Overdue PO Grace Days | Days after the expected delivery before a PO is flagged overdue |
| Supplier Min PO Data Points | Completed orders needed before a supplier's reliability is judged |
| Supplier Late Rate Threshold | 0.01–1.0; share of late deliveries that triggers a warning (0.5 = 50%) |
| Supplier Concentration Limit | 0.01–1.0; share of supply from one vendor that triggers a dependency warning |
| Dead Stock Dormancy (Days) | Days without movement before stock counts as idle |
| Dead Stock High / Medium Valuation (₹) | Stock value above which dead-stock alerts become HIGH / MEDIUM |
| High / Medium Severity Multiplier | Quoted demand ÷ available-to-promise ratio for HIGH / MEDIUM over-commitment (e.g. 2.0 / 1.3) |

## Integrations

| Module | When | What happens |
|---|---|---|
| Inventory | Stock is received, shipped, adjusted or transferred | Reorder and dead-stock checks use the new levels |
| Procurement | A PO is approved or goods are received | Overdue and supplier-reliability checks run |
| Sales | Quotations are created, updated, sent or converted | Over-commitment checks compare quoted demand with available stock |

## Permissions

| Permission | What it unlocks |
|---|---|
| `ai.view` | See insights and the AI Suggestions panel |
| `ai.feedback` | Mark insights helpful or not helpful |
| `ai.manage` | Accept or dismiss insights |
| `ai.configure` | Change the sensitivity settings |
