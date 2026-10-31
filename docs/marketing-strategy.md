# Secure64 redesign — marketing strategy (pitch draft)

Companion to [company-research.md](company-research.md). This is what we pitch to Secure64 alongside the new site.

## The core problem with the current site

It describes **products** to people who already know DNS. But the people who sign the check (a carrier's CISO, a VP of network operations, a school district IT director) buy **outcomes**: fewer breaches, no outages, lower cost, compliance. The site makes them do the translating.

## Positioning

**One-liner:** Every attack starts with a lookup. Secure64 stops it there.

**Supporting pillars** (each backed by proof, not adjectives):

| Pillar | Message | Proof to show |
|---|---|---|
| Protect | Block malware, phishing and botnets for every device on the network, before a connection is made | CISA Protective DNS vendor list; LineGUARD 150+ categories |
| Perform | Fastest protective DNS; fewer servers for the same load | DNSperf ranking; HPE/AMD performance paper |
| Endure | Stays up during DDoS; not built on BIND, so BIND's vulnerabilities don't apply | DNS Authority DDoS mitigation; proprietary codebase |
| Trust | 20 years, 1.5B+ users, tier-1 carriers, 24/7 experts | Customer logos; Red Hat certification; case studies |

Retire unprovable superlatives ("most secure on Earth"). Specific beats loud.

## Audiences and paths

1. **Carriers & ISPs** (core revenue): scale, uptime, subscriber protection as a sellable add-on (LineGUARD as a revenue line, not just a cost).
2. **Enterprise & government**: Protective DNS compliance (CISA guidance), DDI consolidation with ProVision, LineGUARD Edge.
3. **Education & public sector**: content filtering, CIPA-style safety, simple deployment.

Homepage routes each audience to its own page; products sit underneath, grouped by job (Protect / Resolve / Publish / Manage).

## Site and content moves

- **Show, don't tell:** an animated "lookup blocked" diagram explains Protective DNS in five seconds.
- **Proof up front:** CISA, DNSperf, Red Hat and the carrier logo wall sit directly under the hero.
- **Plain-language layer:** every product page opens with a one-sentence "what it does for you" before the technical detail.
- **Case studies on product pages**, with a metric each (for example, the 6M-subscriber LineGUARD deployment from the Oct 2024 release).
- **Conversion paths:** "Book a demo", "Try Secure64", and an always-visible "Under attack?" emergency line. Replace phone-number-only CTAs with forms plus phone.
- **Pricing transparency:** the site promises "predictable pricing"; show the pricing model (per-subscriber / per-server tiers) even without numbers.
- **Content cadence:** 2 posts a month: threat explainers, DNS-in-the-news reactions, customer wins. Feeds LinkedIn, which is the main channel for this buyer.
- **Fix the basics:** cookie banner placeholders, typos, empty menu landing pages.

## Open questions for Secure64

- Brand assets: official logo files, brand colors, approved customer logos and quotes.
- Which audience is the growth priority for 2027?
- Can we publish case-study metrics and a pricing model?
- Is "Secure64 AI" a real product line? If so, what does it do, concretely?
