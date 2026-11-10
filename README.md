# JDE Engineering

Website for JDE Engineering Services Ltd: commissioning, electrical safe systems of work, authorised persons, electrical testing, QA/QC and technical consultancy for data centres and mission-critical facilities across the UK and Europe.

## Stack

- TanStack Start (React, server-rendered) with Tailwind CSS
- Builds to a Cloudflare Worker (`.output/`, via Nitro's `cloudflare-module` preset)
- No forms, database or backend. Contact is by email.

All content (business details, services, team, values, case studies, job roles) lives in `src/data/`. See `AGENTS.md` for the working rules.

## Development

Needs Node.js 22+.

```sh
bun install     # or: npm install --legacy-peer-deps
npm run dev     # local dev server
npm run build   # production build into .output/
npm test        # unit tests
npm run check   # everything: lint, types, build, tests, security scan
```

## Safety checks

- **GitHub Actions** (`.github/workflows/check.yml`): lint, type check, tests, build and a package security scan on every push and pull request, plus weekly.
- **Dependabot** (`.github/dependabot.yml`): monthly package update pull requests, tested by the workflow.
- **Security headers** (`src/lib/security-headers.ts`): Content-Security-Policy, HSTS, clickjacking and sniffing protection on every page.
- **Claude Code**: `CLAUDE.md` loads the rules in `AGENTS.md`; a hook runs `npm run check` before every `git push`; the `site-health-check` skill holds the full checklist.

## Deploying to Cloudflare

On every push to `main`, the "Check site" workflow runs all the checks and, if they pass, runs `npx wrangler deploy --name jde-engineering-website`. First deploy creates the Worker at https://jde-engineering-website.noahbentley.workers.dev

- It needs one repository secret, `CLOUDFLARE_API_TOKEN` (GitHub → repo Settings → Secrets and variables → Actions). Make it in Cloudflare → My Profile → API Tokens → Create Token → "Edit Cloudflare Workers" template. Without the secret the workflow skips the deploy.
- Don't connect Cloudflare Workers Builds, so the site isn't deployed twice.

## Still needed from JDE

- [ ] Team photos and biographies (`src/data/team.ts`); confirm "Jonston" spelling
- [ ] Real photos of their work and people (no stock, no AI)
- [ ] Anonymised case studies (`src/data/content.ts`)
- [ ] Live job roles, if any (`src/data/content.ts`)
- [ ] Confirm the values wording on the About page
- [ ] Phone number for the site, if they want one
- [ ] LinkedIn company page URL and Google Business Profile
- [ ] Access to the GoDaddy account for jdeengineering.com (domain move)

## Go-live checklist

- [ ] Copy the domain's Microsoft 365 email records (MX, SPF/TXT, autodiscover, DKIM) into Cloudflare DNS before switching nameservers away from GoDaddy
- [ ] Add jdeengineering.com and www to the Worker; redirect www to the bare domain
- [ ] Cloudflare Web Analytics token in `business.cloudflareAnalyticsToken`
- [ ] Submit `https://jdeengineering.com/sitemap.xml` in Google Search Console
- [ ] Free uptime monitor (e.g. UptimeRobot) on the homepage
