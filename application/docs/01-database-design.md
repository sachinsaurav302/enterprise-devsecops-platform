# Database Design

## Project

Enterprise DevSecOps Platform

## Application

FinCore Digital Banking Platform

## Version

1.0

---

# Overview

The FinCore Digital Banking Platform uses PostgreSQL as its relational database.

The database is designed to securely store user information, bank accounts, transactions, beneficiaries, and audit logs.

The design follows normalization principles to reduce redundancy and improve data integrity.

---

# Database Goals

- Secure user data
- Support banking transactions
- Maintain transaction history
- Store audit logs
- Ensure scalability
- Support future microservices

---

# Database Type

Relational Database Management System (RDBMS)

Database Engine:

PostgreSQL

---

# Tables

1. Users
2. Accounts
3. Transactions
4. Beneficiaries
5. AuditLogs

---
# Users Table

Purpose

Stores all registered users.

| Column | Data Type | Description |
|----------|----------|-------------|
| id | UUID | Primary Key |
| first_name | VARCHAR(100) | User First Name |
| last_name | VARCHAR(100) | User Last Name |
| email | VARCHAR(255) | Unique Email |
| password | TEXT | Encrypted Password |
| phone | VARCHAR(20) | Mobile Number |
| status | VARCHAR(20) | Active / Inactive |
| created_at | TIMESTAMP | Created Date |
| updated_at | TIMESTAMP | Updated Date |

Primary Key

id

# Accounts Table

Purpose

Stores bank account information.

| Column | Data Type | Description |
|----------|----------|-------------|
| account_id | UUID | Primary Key |
| user_id | UUID | Foreign Key |
| account_number | VARCHAR(20) | Unique Account Number |
| account_type | VARCHAR(20) | Savings / Current |
| balance | DECIMAL(15,2) | Current Balance |
| currency | VARCHAR(10) | INR |
| status | VARCHAR(20) | Active / Frozen |
| created_at | TIMESTAMP | Created Date |

Primary Key

account_id

Foreign Key

user_id → Users(id)

# Transactions Table

Purpose

Stores all money transfers.

| Column | Data Type | Description |
|----------|----------|-------------|
| transaction_id | UUID | Primary Key |
| sender_account | UUID | Sender Account |
| receiver_account | UUID | Receiver Account |
| amount | DECIMAL(15,2) | Transfer Amount |
| transaction_type | VARCHAR(30) | Deposit / Withdraw / Transfer |
| transaction_status | VARCHAR(20) | Success / Failed / Pending |
| remarks | TEXT | Optional Notes |
| created_at | TIMESTAMP | Transaction Time |

Primary Key

transaction_id

# Beneficiaries Table

Purpose

Stores saved beneficiaries.

| Column | Data Type | Description |
|----------|----------|-------------|
| beneficiary_id | UUID | Primary Key |
| user_id | UUID | User ID |
| account_number | VARCHAR(20) | Beneficiary Account |
| bank_name | VARCHAR(100) | Bank Name |
| nickname | VARCHAR(50) | Friendly Name |
| created_at | TIMESTAMP | Added Date |

Primary Key

beneficiary_id

# AuditLogs Table

Purpose

Tracks all user activities.

| Column | Data Type | Description |
|----------|----------|-------------|
| log_id | UUID | Primary Key |
| user_id | UUID | User |
| action | VARCHAR(255) | Login, Logout, Transfer |
| ip_address | VARCHAR(45) | Client IP |
| device | VARCHAR(255) | Browser / Device |
| created_at | TIMESTAMP | Timestamp |

Primary Key

log_id

# Relationships

Users (1) -------- (M) Accounts

Users (1) -------- (M) Beneficiaries

Users (1) -------- (M) AuditLogs

Accounts (1) ----- (M) Transactions

# Entity Relationship Diagram

The ER Diagram will be added in the next phase.

File:

architecture/images/database-er-diagram.png

# Future Enhancements

- Loan Management
- Credit Cards
- Fixed Deposits
- UPI Payments
- Notifications
- Multi-Currency Support
- KYC Verification
- Admin Dashboard

# Database Design

Overview

Database Goals

Database Type

Tables

Users

Accounts

Transactions

Beneficiaries

AuditLogs

Relationships

ER Diagram

Future Enhancements