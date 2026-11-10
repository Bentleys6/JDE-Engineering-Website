## JDE Engineering site

- Client: JDE Engineering Services Ltd (company no. 12252788), a commissioning and electrical safety consultancy for data centres and mission-critical facilities, UK and Europe. B2B: the visitor is a client, contractor or operator, or a candidate. No phone number or forms yet; contact is by email (info@ for new business, cv@ for applications).
- All business facts, services, team, values, case studies and job roles live in src/data/* (business.ts, services.ts, team.ts, content.ts, images.ts); components never hard-code them, so content changes are data-only.
- Design: navy-led (#0E0849 from the logo), white, and one accent (logo cyan #1CB5E0) used flat. No navy-to-light-blue gradients, no dominant white, no full-screen cover photo on the homepage. Strong, high-contrast text.
- Photos: none supplied yet. Never use AI-generated or stock images (the client rejected the last designer's AI images). Team cards show initials until real photos arrive (add `photo` in team.ts).
- Case studies stay anonymous: sector, country and a site code, never the client's or site's name unless JDE confirms in writing. caseStudies and jobRoles are empty until JDE supplies real ones; the pages show an honest "ask us" message meanwhile.
- No ISO or other accreditations until JDE has them (ISO is in progress, not achieved).
- URLs: the old WordPress site had /about/, /services/ and /contact/. Trailing slashes 301 to the no-slash URL (src/server.ts). Keep public/sitemap.xml in step with the pages.
- Router scrollRestoration is off; useRouteEffects in Layout handles scroll-to-top and #hash scrolling.

# Rules for Claude Code

- Start every session with git pull.
- Commit and push straight to main for normal changes (wording, photos, content, small layout tweaks). Use a branch and ask before merging only for risky changes: forms, security headers, packages, outside services, hosting, or large redesigns.
- Make the smallest change that achieves each request. Do not restyle or rewrite anything that wasn't mentioned.
- Change content in the src/data files, not in components.
- Never invent reviews, client names, project details, job counts, years, accreditations, prices or guarantee claims. Bios and values wording need JDE's confirmation.
- No new npm packages, backend, database or auth without asking first.
- After every change, run `npm run check` (lint, type check, build, tests, security scan) and fix anything that fails before committing. A hook runs it automatically before every `git push` and blocks the push if it fails; never bypass it.
- Use the site-health-check skill (.claude/skills/site-health-check) before go-live, after adding any outside service, and after package updates.
- Adding an outside service (analytics, embed, chat, booking, form provider): add its domain to the Content-Security-Policy in src/lib/security-headers.ts and to src/test/security.test.ts.
- Keep secrets out of the site. Only public keys (like a Web3Forms access key) may go in src/. The security-scan test fails the check if a key pattern, .env file, raw-HTML injection, debug leftover or source map appears.
- Security check every time: `npm run check` after every change (the hook enforces it on push), plus the built-in `/security-review` on the changes before anything risky is merged to main. Report the result in plain English.
- The site has no logins, admin, database, uploads, forms or API of its own. Adding any of these needs asking first, and then the matching checks in the site-health-check skill become required.

# Hosting

- Hosted on Cloudflare Workers. GitHub Actions deploys it: the "Check site" workflow runs every check on a push to main and then `npx wrangler deploy --name jde-engineering-website` (needs the CLOUDFLARE_API_TOKEN repo secret; keep `--name`, the build's generated config uses a different Worker name). Don't connect Cloudflare Workers Builds. See README.md.
- After every push to main, wait for the "Check site" run on that commit to finish, including its "Deploy to Cloudflare" step (https://api.github.com/repos/Bentleys6/jde-engineering-website/actions/runs?head_sha=<sha>; about 1–2 minutes). Only say a change is live once it succeeded. If it fails, read the job log, fix it and say what happened.
- Domain jdeengineering.com is registered at GoDaddy (nameservers ns07/ns08.domaincontrol.com) and its email runs on Microsoft 365 (MX jdeengineering-com.mail.protection.outlook.com). Copy every MX, TXT (SPF, verification), autodiscover CNAME and DKIM record into Cloudflare before switching nameservers, or JDE's email stops.
- Security headers for pages are set in src/lib/security-headers.ts (applied in src/server.ts); public/_headers only reaches static files.
- GitHub Actions ("Check site", .github/workflows/check.yml) runs on every push, pull request and weekly. Don't merge to main while it's red. Dependabot opens monthly package update PRs; merge when the check is green.
- Cloudflare Web Analytics is cookie-free and turns on when `cloudflareAnalyticsToken` is set in src/data/business.ts.
