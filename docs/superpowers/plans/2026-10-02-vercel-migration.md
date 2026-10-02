# Vercel Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deploy the existing Denzel Maupa portfolio to Vercel, verify it at a temporary Vercel URL, and connect `denzelmaupa.co.zw` after Webzim completes registration.

**Architecture:** Keep the current portfolio source and Next.js App Router structure intact. Replace the Sites-specific Vinext build commands with standard Next.js commands, deploy the same Git-tracked source to Vercel, then attach the domain without taking the current Sites deployment offline.

**Tech Stack:** Next.js 16, React 19, Vercel, GitHub, Webzim DNS

**Spec:** Current Codex task request to migrate `denzel-maupa.jerichocommunication.chatgpt.site` to Vercel and use `denzelmaupa.co.zw`.

## Global Constraints

- Preserve every existing route, case study, image, style, and responsive behavior.
- Keep the existing Sites-hosted portfolio live until the Vercel deployment and custom domain are verified.
- Do not publish private credentials or client data.
- Use `denzelmaupa.co.zw` as the final production domain.

## Review Focus

- Every current route must return successfully after the standard Next.js build.
- Dynamic work pages must remain available after deployment.
- Fonts and public images must load from the Vercel deployment.
- Open Graph and canonical URLs must resolve against the active Vercel or custom-domain host.
- The apex domain and optional `www` redirect must not create a redirect loop.

---

### Task 1: Prepare the standard Next.js build

**Files:**
- Modify: `package.json`

**Interfaces:**
- Consumes: the existing App Router application and `next.config.ts`
- Produces: standard `next dev`, `next build`, and `next start` commands for Vercel

- [ ] **Step 1: Update the development, build, and start scripts to use Next.js.**
- [ ] **Step 2: Run `npm run build` and require a zero exit code.**
- [ ] **Step 3: Start the production build locally and verify `/`, `/about`, `/resume`, `/contact`, and one `/work/...` route.**
- [ ] **Step 4: Commit the Vercel build preparation.**

### Task 2: Create and verify the Vercel deployment

**Files:**
- Modify only Vercel-generated local metadata excluded from Git.

**Interfaces:**
- Consumes: the successful standard Next.js build and the user's Vercel account
- Produces: a production Vercel deployment URL

- [ ] **Step 1: Authenticate the Vercel CLI with the user's GitHub-backed Vercel account.**
- [ ] **Step 2: link or create the Vercel project for the portfolio.**
- [ ] **Step 3: deploy to production and verify the deployment reports Ready.**
- [ ] **Step 4: open the Vercel URL and verify the representative routes and assets.**

### Task 3: Connect `denzelmaupa.co.zw`

**Files:**
- No repository files expected.

**Interfaces:**
- Consumes: the verified Vercel project and the active Webzim domain registration
- Produces: `https://denzelmaupa.co.zw` as the production URL

- [ ] **Step 1: add `denzelmaupa.co.zw` and `www.denzelmaupa.co.zw` to the Vercel project.**
- [ ] **Step 2: copy the exact DNS records Vercel requests into Webzim DNS.**
- [ ] **Step 3: wait for Vercel to confirm domain ownership and issue TLS.**
- [ ] **Step 4: set one hostname as primary and redirect the other.**
- [ ] **Step 5: verify the live HTTPS domain and all representative routes before retiring the previous URL.**

