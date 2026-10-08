---
title: Workspace Basics
description: Navigate the TenArm BES workspace — tabs, sidebar, command palette, quick-peek drawers, and draft auto-save.
---

# Workspace Basics

TenArm BES uses a **multi-tab workspace** designed for productive daily work. This guide covers everything you need to navigate the system efficiently.

## The Layout

When you log in, you'll see four main areas:

```
┌──────┬────────────────────────────────────────────────────┐
│      │  Tab Bar   [ Tab 1 ]  [ Tab 2 ]  [ + ]            │
│ Nav  ├────────────────────────────────────────────────────┤
│ Rail │                                                    │
│      │              Active Tab Content                    │
│  ☰   │          (Command Desk / Page View)                │
│      │                                                    │
│      │                                                    │
│      ├────────────────────────────────────────────────────┤
│      │  [ MY DAY ]                         [ ⌘K Search ]  │
└──────┴────────────────────────────────────────────────────┘
```

| Area | What It Does |
|------|-------------|
| **Nav Rail** | Vertical sidebar on the left — module icons and navigation |
| **Tab Bar** | Up to 3 simultaneous tabs across the top |
| **Content Area** | The active page (module view, form, or dashboard) |
| **My Day** | Floating panel with your urgent action items |
| **Command Palette** | ⌘K / Ctrl+K instant search and navigation |

---

## Navigation Sidebar

The **Nav Rail** is the vertical strip on the left side of the screen. It shows icons for every module your role has access to.

### How to Navigate

1. **Click a module icon** to expand its section — this opens a **Nav Flyout** with the module's pages
2. **Click a page** in the flyout to open it in the current tab
3. Pages you don't have permission for won't appear

### Module Sections

Each module organizes its menu items into groups:

| Group | What's In It |
|-------|-------------|
| **Daily Work** | The pages you use most often (dashboards, active lists) |
| **Records** | Master data and reference records |
| **Insights** | Dashboards and reporting views |

::: tip
If a module icon doesn't appear in your sidebar, your role may not have permissions for it. Contact your administrator.
:::

---

## Tabs

TenArm BES lets you work on **up to 3 tasks simultaneously** using tabs. Each tab is an independent workspace.

### Opening Tabs

- **Click a sidebar link** — opens in the current tab
- **Click the `+` button** on the tab bar — opens a new blank tab
- When all 3 tabs are in use, clicking `+` shows a **Replace Tab** dialog asking which existing tab to replace

### Tab Behavior

| Feature | How It Works |
|---------|-------------|
| **Keep-Alive** | Switching tabs does NOT reload the page. All scroll positions, filters, and data stay exactly as you left them. |
| **Independent State** | Each tab has its own page, form state, and unsaved drafts |
| **Dirty Indicator** | A tab with unsaved changes shows a dot (`•`) next to its title |
| **Close Protection** | Closing a tab with unsaved changes shows a confirmation dialog |

### Tab IDs

Tabs are identified as `t1`, `t2`, and `t3`. These appear in the URL as `?tab=t1`, allowing you to bookmark or share a specific tab state.

::: warning
The 3-tab limit is intentional. It prevents the browser from becoming slow with too many open views. If you need to reference a related document, use **Quick-Peek** instead of opening a new tab.
:::

---

## Command Desk

Most modules use a **command desk** layout — a split-panel view designed for efficient list-to-detail workflows:

```
┌──────────────────────┬──────────────────────────────────┐
│                      │                                  │
│   Entity List        │    Detail / Form View            │
│   (filterable,       │    (selected record or           │
│    searchable)       │     new record form)             │
│                      │                                  │
│   • Record 1         │    ┌────────────────────┐       │
│   • Record 2  ←──────│────│ Full detail view   │       │
│   • Record 3         │    │ with actions        │       │
│                      │    └────────────────────┘       │
└──────────────────────┴──────────────────────────────────┘
```

| Panel | What It Shows |
|-------|-------------|
| **Left — Entity List** | All records of that type (orders, leads, invoices, etc.) with search, filters, and sorting |
| **Right — Detail View** | The selected record's full details, or a form for creating/editing |

### Working with the Command Desk

1. **Browse** — Scroll or search the list on the left
2. **Select** — Click a record to see its details on the right
3. **Create** — Click the create button to open a blank form on the right
4. **Edit** — Click edit on the detail view to switch to form mode
5. **Action** — Use status transition buttons (Submit, Approve, Ship, etc.) directly from the detail view

---

## Quick-Peek Drawers

When viewing a document, you'll often see references to other records — a sales order references a customer, an invoice references a purchase order, etc.

**Quick-Peek** lets you inspect these related records in a slide-over drawer without leaving your current page.

### How It Works

1. Click a **linked reference** (e.g., a customer name, order number, or invoice ID)
2. A **drawer slides in** from the right showing that record's details
3. Review the information you need
4. **Close the drawer** to return to exactly where you were — nothing lost

### Why Quick-Peek?

| Without Quick-Peek | With Quick-Peek |
|-------------------|----------------|
| Open the related record in a new tab | Slide-over shows it instantly |
| Lose your place in the current form | Current form stays untouched |
| Use up one of your 3 tabs | No tab consumed |
| Risk forgetting what you were doing | Seamless back-and-forth |

::: tip
Quick-Peek drawers can be opened from almost anywhere — entity lists, detail views, and even from within other quick-peek drawers.
:::

---

## Command Palette (⌘K)

Press **⌘K** (Mac) or **Ctrl+K** (Windows) to open the **Command Palette** — a search overlay that lets you jump to any page or find any record instantly.

### What You Can Do

| Action | How |
|--------|-----|
| **Jump to a module** | Type the module name (e.g., "CRM", "Inventory") |
| **Open a page** | Type the page name (e.g., "Leads", "Purchase Orders") |
| **Find a record** | Type a document number or name (e.g., "SO-2024-0012") |

### Tips

- The palette searches across **all modules** you have access to
- Results are ranked by relevance — most-used pages appear first
- Press **Escape** to close without navigating

---

## My Day Panel

The **My Day** panel is a floating sidebar that shows your most urgent action items across all modules.

### Opening My Day

Click the **MY DAY** button at the bottom-left of the screen. A badge shows the count of pending items.

### What It Shows

- **Pending approvals** — Orders, POs, or documents waiting for your approval
- **Overdue tasks** — Follow-up activities past their due date
- **Today's action items** — Items that need attention today

Click any item in My Day to **jump directly to it** — it opens in the current tab, ready for action.

---

## Draft Auto-Save

TenArm BES **automatically saves your in-progress form edits** as you type. If you accidentally close a tab or navigate away, your work isn't lost.

### How It Works

1. **Start editing** a form (create or edit mode)
2. As you type, the system **auto-saves the draft** to your browser's session storage
3. If you navigate away and come back, the **draft is restored** with all your unsaved changes
4. Once you **save or submit**, the draft is cleared

### Key Details

| Aspect | Behavior |
|--------|---------|
| **Storage** | Browser session storage (per-organization, per-tab, per-form) |
| **Persistence** | Survives tab switches and accidental navigation. Cleared on browser close. |
| **Indicator** | The tab shows a dirty dot (`•`) when unsaved changes exist |
| **Scope** | Each tab maintains its own independent draft |

::: warning
Drafts are stored in your browser's session storage. If you switch to a different computer or clear your browser data, drafts will not carry over.
:::

---

## Real-Time Sync & Conflict Resolution

TenArm BES is built for concurrent, multi-user operations. Multiple teammates can view and manage transactions simultaneously without stale data or lost updates.

### Live Updates (Zero Polling)

The workspace maintains an active real-time event stream (SSE) with the backend:
- When a teammate approves an order, receives stock at the warehouse, or posts a payment, the update streams directly to your browser.
- Lists, status pills, and document storylines refresh in the background automatically.
- Live updates **never interrupt your typing or unmount unsaved form drafts**.

### Conflict Resolution Drawer

If another user modifies and saves a document while you are editing it:
1. When you submit your changes, the system detects that a newer version exists on the server (Optimistic Concurrency Control).
2. The **Conflict Resolution Drawer** slides open with a side-by-side comparison:
   - **Your Edits**: The exact values you entered.
   - **Latest Server Version**: The latest saved record from your teammate.
3. You have full control over how to resolve the collision:
   - **Reload Latest**: Discard your local edits and load the updated server version.
   - **Overwrite with My Changes**: Apply your changes on top of the newer version.

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| **⌘K** / **Ctrl+K** | Open Command Palette |
| **Escape** | Close active modal, drawer, or palette |

---

## Tips for Productive Work

1. **Use tabs for parallel tasks** — Review a PO in Tab 1 while drafting an order in Tab 2
2. **Use Quick-Peek for references** — Don't waste a tab just to check a customer's details
3. **Use ⌘K for speed** — Faster than clicking through the sidebar for frequent pages
4. **Let drafts protect you** — Don't worry about losing form data when switching tabs
5. **Check My Day first** — Start your day by reviewing pending approvals and overdue items
