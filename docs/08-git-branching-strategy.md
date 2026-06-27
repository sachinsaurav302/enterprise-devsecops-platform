# Git Branching Strategy

## Recommended Strategy
Use a Git branching model based on trunk-based development with short-lived feature branches.

## Branch Types
- main: production-ready baseline
- develop: integration branch for ongoing work
- feature/*: work for a specific story or task
- release/*: stabilization branches for releases
- hotfix/*: urgent production fixes

## Guidelines
- Merge into main only through reviewed pull requests.
- Keep branches short-lived and regularly rebased or merged.
- Protect main and release branches with branch protections.
- Require CI checks to pass before merge.
