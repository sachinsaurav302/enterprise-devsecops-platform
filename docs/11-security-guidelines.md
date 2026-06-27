# Security Guidelines

## Core Security Principles
- Apply least privilege access controls.
- Protect secrets using a managed secret store.
- Scan code and dependencies for vulnerabilities before release.
- Enforce policy checks in CI/CD pipelines.

## Recommended Controls
- SAST and SCA scanning
- Secret detection and dependency review
- Container image scanning
- Role-based access control and MFA
- Infrastructure policy validation

## Operational Guidance
- Review logs and alerts for suspicious activity.
- Maintain incident response procedures and escalation paths.
- Keep dependencies and base images updated.
