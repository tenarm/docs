# AI Assistant

> Ask questions about your sales, pipeline and finances in plain language and get answers from your live numbers.

The AI Assistant is **off until your platform administrator switches it on** for your organization, because every
question is answered by an outside language-model provider. For the rule-based alerts that need no outside service,
see [AI Insights](./ai).

## Asking a question

**What it does** — turns a question such as *"Where are we declining?"* into lookups on your organization's figures
and answers in plain language.

**Where to ask**
- **The floating launcher** — the sparkle button at the bottom right of the screen opens a compact *AI Assistant*
  panel. Click **Full page** to open the assistant in its own workspace tab.
- **From AI Suggestions** — the **AI Assistant** button at the foot of the AI Suggestions panel opens the same page.

**How to use**
1. Type your question in **Ask a question…** and press Enter, or click one of the suggestions:
   *What were sales last month?*, *Where are we declining?*, *How is the sales pipeline this month?*
2. Wait while it shows **Analyzing…**.
3. Ask follow-up questions in the same conversation; the assistant keeps the earlier turns as context.

**What it can answer**

| Topic | What it looks at | You need |
|---|---|---|
| Sales | Order counts, approved and cancelled orders, revenue, top customers, a 6-month revenue trend | `sales.dashboard.view` and `order.view` |
| CRM pipeline | Leads created, contacted, qualified, won and lost, won value, the funnel, a 6-month trend | `crm.dashboard.view` and `lead.view` |
| Finance | Net profit, asset, liability and equity totals, whether the trial balance balances | `finance.dashboard.view` and `finance.journal.view` |
| Profit and loss, balance sheet | The statements for an accounting period ("June" is matched to its period) | `finance.dashboard.view` and `finance.journal.view` |

**Things to know**
- The assistant only uses the areas you have permission for: if you cannot see finance, it cannot answer finance
  questions for you.
- It works from summary figures, never raw records, and it cannot change anything.
- Every question is recorded in the administrator audit log with whether it succeeded, and your conversation is kept
  so you can return to it; you only ever see your own conversations.

**If something goes wrong**

| Message | Why | What to do |
|---|---|---|
| *The AI Assistant is not switched on for your organization.* | The app is off for your organization | Ask your platform administrator to switch on the AI Assistant app |
| *You don't have permission to use the AI assistant.* | You lack `assistant.ask` | Ask an administrator to grant it |
| *The assistant is temporarily unavailable.* | The language-model provider did not answer | Try again later; tell your administrator if it persists |

## Permissions

| Permission | What it unlocks |
|---|---|
| `assistant.ask` | Ask questions and see your own conversation history |
