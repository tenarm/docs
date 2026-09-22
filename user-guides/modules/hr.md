---
title: HR
description: Manage employees, departments, and leave requests.
---

# HR

The HR module covers people management — employee records, department assignments, and leave tracking.

## Key Features

### Employee Management
- Create and maintain employee profiles with personal details, contact information, and employment history
- Assign employees to departments and branches
- Track employment status (active, on leave, terminated)

### Department Structure
- Map your organizational hierarchy (branches → departments)
- Assign employees to departments

### Leave Management
- Employees submit leave requests specifying dates and leave type
- Managers approve or reject leave requests
- Track leave balances by employee and leave type
- Calendar view of team availability

### Employee Dashboard
View key HR metrics at a glance — total headcount, active employees, pending leave requests, and upcoming leave.

## Navigation

| Page | Path | Permission |
|------|------|-----------|
| Employees | `/hr/employees` | `employee.view` |
| Leave Requests | `/hr/leave-requests` | `leave.view` |
| Leave Calendar | `/hr/leave-calendar` | `leave.view` |
| HR Dashboard | `/hr/dashboard` | `employee.view` |

## Permissions

| Permission | Description |
|-----------|-------------|
| `employee.view` | View employee records |
| `employee.create` | Create new employees |
| `employee.update` | Edit employee details |
| `leave.view` | View leave requests |
| `leave.create` | Submit leave requests |
| `leave.approve` | Approve or reject leave |
