# AI ta’lim yo‘li

Owner-private Uzbek learning workspace: ML → DL → LLM → AI engineering. Course comparison and certification paths remain available.

The existing interface is served from `public/` by the Vinext root route. `public/workspace.js` adds four interactive numerical labs, weekly plans, four practice assignments, three readiness checks and an editable experiment journal. Practice code is intentionally not executed in the browser. Completion marks are self-reported; readiness checks are limited diagnostics.

## Account storage

`/api/state` requires dispatch-owned ChatGPT identity, keys every D1 record by the server identity, validates bounded payloads, and rejects cross-origin writes. D1 updates use a revision compare-and-swap. Concurrent changes trigger an explicit browser choice; stale writes cannot overwrite newer revisions. Browser storage remains an offline copy. Online, idle pages check for other-device updates every 30 seconds. Failed synchronization remains visible, with retry and backup export/import.

Existing version-1 browser backups migrate by adding an empty workspace. Learning records, notes, journal, weekly plans, assignments and readiness answers are all included in exports. Local and hosted D1 data are separate. No credentials are embedded in assets.

## Validation

`node --test tests/learning.test.mjs` covers account isolation, missing authentication, invalid payloads, compare-and-swap conflicts, two simulated clients, offline edits, existing progress migration, math values, weekly time budgets and readiness feedback. Browser QA covers the actual numerical controls, assessment, planner and journal persistence. Build through the Sites build helper. Database schema and generated migrations are tracked in `db/` and `drizzle/`.
