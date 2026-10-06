# SDD ledger — plan: docs/superpowers/plans/2026-10-06-portfolio-seo.md

Baseline: production build passes. Lint has 13 existing internal-link errors and 21 image warnings.
Ruling: Include internal-link cleanup in the SEO work — user explicitly approved this on 2026-10-06.
Ruling: Use the existing project worktree and keep main untouched until verification — protects the live branch.
Task 1: complete (commit 66e3cc3; five helper tests passed after expected missing-module failure).
Task 1: Ruling: the planned test script names later test files, so the Task 1 verification ran its focused helper suite.
Task 2: complete (commit 9587bfc; five helper tests and production build passed).
Task 3: supporting-route tests pass. Build passed after setting Turbopack's root to the active checkout; its auto-detection had incorrectly selected the parent worktree's lockfile. Lint remains blocked only by four pre-existing internal-link errors in home and project pages, scheduled for Tasks 5–6.
Task 4: robots and seven-route sitemap contract tests pass; production build includes both metadata routes and custom 404. Remaining lint errors are still the planned home/project internal links.
Task 5: three project SEO contract tests and build pass; project routes are now statically generated with fixed canonicals and CreativeWork schema. The home page still has one pre-existing internal-link lint error, scheduled for Task 6.
