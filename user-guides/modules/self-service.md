# Employee Self-Service

> Your own leave, attendance, payslips and expense claims, in one place under **Me**.

Self-Service shows each employee their own records only. It needs your user account to be linked to your employee
record in HR; until it is, the pages show **Employee Profile Not Linked** — ask your HR admin or manager to link your
user account to your record in the Employee Directory.

## My Leave

**What it does** — shows your leave balances and requests, and lets you apply for leave or withdraw a request.

**States**

| State | What it means | What you can do next |
|---|---|---|
| PENDING | Waiting for an approver | Withdraw |
| APPROVED | Granted; the days come off your balance and appear in your attendance | — (ask HR to cancel) |
| REJECTED | Turned down; the reason is shown with the request | — |
| CANCELLED | Withdrawn by you, or cancelled by HR | — |

**How to use**
1. Go to **Me → My Leave**. **Leave Balances** shows each leave type's entitlement and what you have taken.
2. Click **Apply for Leave**.
3. Under **Select Leave Type**, pick a type; the form shows your **Current Balance**.
4. Enter the **Start Date** and **End Date** and a reason. The form shows the **Duration Requested** and your
   **Remaining After Approval** (in red if it would go below zero).
5. Click **Submit Application**.

To withdraw a request that is still PENDING, click **Withdraw** on its row in **Leave Request History** and confirm.

**Things to know**
- Short leave within your balance can be approved at once; longer leave, or leave beyond your balance, waits for an
  approver other than you.
- Only working days count: weekends and holidays in your organization's HR settings are left out, and a period with no
  working days is refused.
- A request that overlaps one of your pending or approved requests is refused.
- The end date cannot be before the start date.
- Self-service can withdraw only PENDING requests; an approved leave is cancelled by HR.

**If something goes wrong**

| Message | Why | What to do |
|---|---|---|
| *Only PENDING leave requests can be cancelled via self-service.* | The request was already decided | Ask HR to cancel an approved leave |
| *No leave entitlements configured for your account yet.* | HR has not set up your leave types | Ask HR to configure your entitlements |

## My Attendance

**What it does** — shows your daily attendance as recorded by HR. It is read-only.

**How to use**
1. Go to **Me → My Attendance**. **Today's Presence** shows today's record, or *Not Logged Yet*.
2. Choose **This Month**, **Last Month** or **All Time**.
3. Read the totals — **Days Logged**, **Present (In Office)**, **Remote (WFH)**, **Total Hours Logged** — and the
   daily table: **Date**, **Status**, **Check In**, **Check Out**, **Hours**, **Notes**.

Approved leave appears here as leave days.

## My Payslips

**What it does** — lists the payslips issued to you across every pay run, with their breakdown and PDF.

**How to use**
1. Go to **Me → My Payslips**. The totals show **Issued Payslips**, **Lifetime Gross**, **Total Deductions** and
   **Lifetime Net Paid**.
2. Search by payslip number, date or amount.
3. Click **Peek** to see a payslip's breakdown — *Earnings & Allowances*, *Standard Deductions*, *Statutory & Tax
   Contributions* and any *Unpaid Leave Adjustment* — then **Download PDF**; or click **View PDF** on the row.
4. Click **Export CSV** to download the listed payslips.

Payslips appear once payroll issues them for a pay run.

## My Expenses

**What it does** — lists your own expense claims and their approval status: **Date**, **Expense #**, **Status** and
**Total**.

**Things to know**
- Claims are created in **Finance → Expenses** with the **Create Expense** button, which needs the Finance expense
  permission; ask your admin if you don't see it.
- A claim moves from DRAFT to SUBMITTED, then APPROVED or REJECTED; a DRAFT or SUBMITTED claim can be CANCELLED.

## Integrations

| Module | What Self-Service shows from it |
|---|---|
| HR | Your leave balances, leave requests and attendance |
| Payroll | Your issued payslips and their PDFs |
| Finance | Your expense claims |

Payroll and Finance are optional: their pages work only when your organization uses those modules.

## Permissions

| Permission | What it unlocks |
|---|---|
| `self_service.access` | All of the pages above, for your own records only — it grants `leave.own`, `attendance.own`, `payslip.own` and `finance.expense.own` |
