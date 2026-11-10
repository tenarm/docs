# Steel

> Track steel coils by heat, grade and size with their real weight, and pick the coils that best fill an order's tonnage.

Steel is an industry pack: it is off until your administrator switches it on. It adds metallurgical tracking and
catch-weight allocation on top of [Inventory](./inventory) — a coil is an inventory lot with its own weight, heat
number and dimensions.

## Coil Register

**What it does** — receives coils into stock and lists the coils on hand.

**How to use**
1. Go to **Steel → Coils Register**.
2. Click **Register Coil** and fill in the form.
3. Click **Register Coil** to receive it. The coil is added to stock in the receiving warehouse.
4. Narrow the list with **Filter by Grade** and **Filter by Heat #**; click **Refresh** to reload.

**Key fields**

| Field | Required | Values / notes |
|---|---|---|
| Steel Product / SKU | Yes | A product from Inventory |
| Receiving Warehouse | Yes | A warehouse from Inventory |
| Coil / Lot Number | Yes | Your coil identifier, e.g. COIL-2026-001 |
| Heat Number | Yes | The mill's heat, e.g. HT-8849 |
| Steel Grade | Yes | e.g. IS2062, SS304 |
| Catch Weight (Metric Tons) | Yes | The coil's actual weighed tonnage, greater than zero, e.g. 18.500 |
| Gauge / Thickness (mm) | Yes | Greater than zero, e.g. 2.50 |
| Width (mm) | Yes | Greater than zero, e.g. 1250.0 |
| Pieces | No | Number of pieces in the lot; 1 if left empty |
| Mill Certificate # | No | e.g. MTC-2026-X1 |
| Notes / Metallurgy Remarks | No | Coil condition, supplier mill and similar |

## Steel Desk

**What it does** — summarizes the coils on hand and simulates which coils to allocate to a target tonnage.

**How to use**
1. Go to **Steel → Steel Desk**. The summary shows **Active Coils**, **Total Tonnage**, **Distinct Grades** and
   **Heats Tracked**; **Open Coil Register** takes you to the register.
2. In the **Catch-Weight Allocation Simulator**, enter the **Item / Product ID** and **Target Weight (MT)**, and
   optionally the **Warehouse ID**, **Preferred Grade**, **Preferred Heat #**, **Min Gauge (mm)** / **Max Gauge (mm)**
   and **Max Tolerance (± %)**. Turn on **Require Strict Single Heat** if every coil must come from one heat.
3. Click **Simulate Allocation**.
4. Read the **Simulation Results**: the **Selected Coils**, their **Allocated Tonnage** against the **Target
   Tonnage**, the **Variance**, and whether the result is **Within Tolerance** or **Outside Tolerance Bounds**.
   **Clear Results** starts again.

**Things to know**
- The simulator only suggests; it reserves nothing.
- When no combination of coils falls within the tolerance, the closest combination is shown with a notice.

## Allocation on orders

When Steel is on, Inventory's allocation suggestions for a sales order use the same catch-weight matching whenever the
order asks for weight or for steel attributes (grade, heat number, gauge, width). Other allocations work as in
Inventory.

## Integrations

| Module | When | What happens |
|---|---|---|
| Inventory | A coil is registered | It is received into stock as a lot in the chosen warehouse |
| Inventory | Coils are listed or allocated | Steel reads the lots on hand from Inventory |
| Inventory / Sales | Stock is allocated to an order | Steel's catch-weight matching replaces the default suggestion for weight- and attribute-based requests |

## Permissions

| Permission | What it unlocks |
|---|---|
| `steel.coil.view` | See the Coil Register and the Steel Desk |
| `steel.coil.create` | Register coils |
| `steel.allocation.manage` | Run allocation suggestions |
