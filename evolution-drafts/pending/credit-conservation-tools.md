# Evolution Proposal: Record user preference: conserve credits, avoid AutoGLM image tools, notify user before using GLM 5.2

- Proposal-ID: evo-2026-06-17-credit-conservation
- Status: pending
- Signature: credit-conservation-tools
- Created-At: 2026-06-17 23:49
- Last-Seen-At: 2026-06-17 23:49
- Target-File: TOOLS.md, MEMORY.md
- Trigger-Type: preference
- Confidence: medium

## Why This Matters
- Record user preference: conserve credits, avoid AutoGLM image tools, notify user before using GLM 5.2

## Evidence
- Interactive proposal card was present in the session UI.
- The original pending draft file was unavailable at approval time.
- AutoClaw reconstructed this draft from the proposal payload so the review result can still be recorded.

## Duplicate Check
- Checked: pending draft path + signature/proposal fallback
- Result: original draft file missing
- Decision: create surrogate draft from proposal payload

## Proposed Change
### TOOLS.md — Credit/API Cost Rules

## Credit & API Cost Conservation

- **Avoid AutoGLM image tools**: Do NOT use `search-image.py`, `upload-mix.py`, `image-recognition.py`, or `generate-image.py` unless the user explicitly requests it. These consume API credits.
- **Prefer free alternatives**: Use `web_fetch` for reading pages, `exec` for curl downloads, and native tools instead of credit-consuming AutoGLM APIs.
- **GLM 5.2 requires notice**: If a task requires the GLM 5.2 model (better reasoning), tell the user first — they will run it themselves.
- **General rule**: Minimize all credit-consuming operations. When in doubt, ask.

### USER.md — Credit/API Preferences

## Credit & API Preferences
- Wants to conserve API credits as much as possible
- Prefers free/self-hosted tools over paid API calls
- AutoGLM image tools (search, upload, recognition, generation) should not be used without explicit permission
- If a task needs GLM 5.2, tell them and they'll handle it personally

## Apply Plan
1. Keep this reconstructed draft as the approval artifact.
2. Record the proposal content exactly as shown in the interactive card.
3. Append an audit note after approval or rejection.

## User Approval
- Approve: 批准 evo-2026-06-17-credit-conservation
- Reject: 拒绝 evo-2026-06-17-credit-conservation