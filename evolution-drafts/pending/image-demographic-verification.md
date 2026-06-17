# Evolution Proposal: Image Demographic Verification

**Signature:** `image-demographic-verification`
**Target:** AGENTS.md
**Date:** 2026-06-17

## Evidence

- User corrected inaccurate images for buzz cut, protein treatment, hair wash on the Danish Saloon site
- User stated: "the business only does offer service for guys only so any long hair or girl shouldn't be in the site"
- Parent agent had to re-download replacement images, causing avoidable rework
- AGENTS.md has zero coverage of image quality or demographic verification

## Proposed Addition to AGENTS.md

Add a new subsection under `## 🛡️ Security Policies` → new section `## 🎨 Content & Asset Quality Gates`, before `## Session Startup`:

---

## 🎨 Content & Asset Quality Gates

### Image Demographic Verification

When selecting, downloading, or generating images for a website or app that serves a **gender-specific or demographic-specific business** (e.g., men's barbershop, women's salon, kids' daycare, seniors' service):

1. **Confirm the demographic constraint** with the user before downloading any images — write it down
2. **Inspect every image** before committing: no wrong-gender subjects, no off-demographic people
3. **Match image content to each specific service** — a "buzz cut" image should show a buzz cut, not a fade; a "protein treatment" image should show the actual treatment, not a generic salon shot
4. **Do a final pass**: scroll through all images and verify 0 violations before saying "done"
5. If unsure about an image, flag it — don't ship it

This avoids rework and embarrassment from shipping a men's-only site with images of women.

---

## Why This Target

AGENTS.md is the correct target because this is a **process/behavior rule** — a quality gate to be performed before declaring work complete. It's not a memory preference (MEMORY.md), not a tool note (TOOLS.md), and not a reusable workflow (SKILL.md). It governs future agent behavior universally, not just for this one project.
