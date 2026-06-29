# Authentication Flow

## Project

Enterprise DevSecOps Platform

## Application

FinCore Digital Banking Platform

## Version

1.0

---

# Overview

Authentication verifies the identity of a user before granting access to protected resources.

The application uses JWT (JSON Web Token) for authentication and role-based access control (RBAC) for authorization.

Passwords are never stored in plain text. They are securely hashed using bcrypt before being stored in PostgreSQL.

---
# Authentication Process

1. User registers.
2. Password is hashed.
3. User data is stored in PostgreSQL.
4. User logs in.
5. Backend verifies credentials.
6. Backend generates a JWT.
7. JWT is returned to the frontend.
8. Frontend stores the token.
9. Every protected request includes the JWT.
10. Backend validates the JWT before processing the request.


# Login Flow
User

↓

React Login Page

↓

POST /api/v1/auth/login

↓

Express Route

↓

Auth Controller

↓

Auth Service

↓

PostgreSQL

↓

Password Verification

↓

Generate JWT

↓

Return Token

↓

React Dashboard

# Registration Flow

User

↓

Register Page

↓

POST /api/v1/auth/register

↓

Validate Input

↓

Hash Password (bcrypt)

↓

Save User

↓

Return Success Response

# JWT Structure
Header

↓

Payload

↓

Signature

# Token Lifecycle
User Login

↓

JWT Generated

↓

Frontend Stores Token

↓

User Makes API Requests

↓

Backend Verifies Token

↓

Token Expires

↓

User Logs In Again

# Authorization Middleware
The Authorization Middleware performs the following checks:

- Extract JWT from the Authorization header.
- Verify the JWT signature.
- Validate token expiry.
- Attach authenticated user details to the request.
- Reject unauthorized requests with HTTP 401.

# RBAC (Role-Based Access Control)
| Role     | Permissions                                          |
| -------- | ---------------------------------------------------- |
| Customer | View profile, accounts, transactions, transfer money |
| Admin    | Manage users, view audit logs, monitor system        |

# Authentication vs Authorization
| Authentication | Authorization        |
| -------------- | -------------------- |
| Who are you?   | What can you access? |
| Login          | Permissions          |
| JWT            | RBAC                 |

# Security Best Practices
- Hash passwords using bcrypt
- Use HTTPS in production
- Store JWT securely
- Validate all user input
- Never expose passwords
- Use strong JWT secrets
- Apply rate limiting to login APIs

# Authentication Sequence Diagram
User
 │
 │ Login
 ▼
React
 │
 │ POST /login
 ▼
Backend
 │
 │ Validate User
 ▼
Database
 │
 │ User Found
 ▼
Backend
 │
 │ Generate JWT
 ▼
React
 │
 │ Store JWT
 ▼
Dashboard

# Future Enhancements
- Refresh Tokens
- Multi-Factor Authentication (MFA)
- OAuth 2.0
- Single Sign-On (SSO)
- Password Reset
- Email Verification

# Why Are We Designing This First?
Requirements
      ↓
Database Design
      ↓
API Design
      ↓
Authentication Design
      ↓
Request Flow
      ↓
Backend Code
