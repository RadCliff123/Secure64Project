# Secure64 — company research

Research for the Secure64.com redesign (Vue.js rebuild, new graphics, new marketing).
Gathered 2026-10-30 from secure64.com. Claims below are Secure64's own unless noted.

## DNS in plain terms

- **DNS is the internet's phone book.** People type names (`google.com`); computers need numeric addresses (`142.250.72.14`). DNS translates one to the other, every time you open a site, app or email.
- **Resolver (a.k.a. "cache"):** the helper your phone/laptop asks: "where is google.com?" It's usually run by your internet provider (Verizon, T-Mobile…). It remembers answers so the next lookup is instant.
- **Authoritative server:** the official source for a domain's address. The resolver asks it when it doesn't already know.
- **Why it matters for security:** every connection starts with a DNS lookup, so DNS is a checkpoint. Block the lookup for a malware or phishing site and the device never reaches it. Attackers also target DNS itself: knock it over (DDoS) and nobody can reach anything; forge its answers and users get sent to fake sites.
- **DNSSEC:** a digital signature on DNS answers, so a resolver can prove an answer is genuine and not forged.
- **Protective DNS (pDNS):** a resolver that refuses to look up known-bad sites. The US government (CISA/NSA) recommends it; Secure64 is on CISA's vendor list.
- **DDI:** DNS + DHCP (hands out addresses to devices on a network) + IPAM (keeps track of which addresses are used). The full "address management" toolkit for a network.

## What Secure64 does

Fort Collins, Colorado; privately held; ~20 years in DNS. Sells DNS software to **big network operators**, mainly ISPs and mobile carriers (logo wall: T-Mobile, Verizon Business, Lumen, Vodafone Idea, Reliance Jio, Telefonica, Virgin Plus, ARIN, US Government…), plus enterprises, government, schools and libraries.
Claims to serve 1.5B+ end users. Key differentiators: its own code (not based on BIND, the common open-source DNS software, so it doesn't share its vulnerabilities), a hardened proprietary OS (SourceT), high performance per server, and 24/7 support.

Tagline: "Protect your USERS. Protect your DATA. Protect your REPUTATION."

## Products

| Product | Plain-English job | Who buys it |
|---|---|---|
| **DNS Cache** | The fast, hardened resolver ("phone book helper") a carrier runs for millions of subscribers | ISPs, carriers |
| **DNS GUARD** | Add-on to DNS Cache: spots infected devices and blocks malware/phishing lookups | ISPs, carriers |
| **DNS Authority** | The "official source" server for domains; keeps answering real users during DDoS floods | Registries, carriers, large orgs |
| **DNS Signer** | Automates DNSSEC (signing answers so they can't be forged) | Domain/registry operators |
| **DNS Manager** | Control panel to configure and monitor fleets of DNS Cache servers | Ops teams |
| **DNS Proxy** | Sits in front of DNS servers (details not yet researched) | — |
| **LineGUARD** | Content filtering + threat blocking via DNS: 150+ categories, parental/employee policies, safe search, off-network client | ISPs reselling to homes/businesses, schools, libraries |
| **LineGUARD Edge** | Enterprise version of LineGUARD (not yet researched) | Businesses |
| **ProVision** | DHCP/IPAM from partner Hilco Global; bundled to make a full DDI offering (Oct 2026) | Carriers, enterprises |

## Credibility points to feature

- On CISA's Protective DNS vendor list (Apr 2025)
- "Fastest protective DNS vendor" per DNSperf (Jun 2025)
- HPE/AMD performance paper (Aug 2025)
- Red Hat RHEL 9.6 certified (Sep 2026)
- Tier-1 carrier logos

## Current site: problems to fix

- Generic WordPress/Elementor template, stock server-room photos, long walls of text.
- Organized by product names that mean nothing to a non-expert; no "who is this for" paths (carrier vs. enterprise vs. school).
- Superlatives without proof ("most secure on Earth"); no testimonials or customer stories on product pages.
- Vague "Secure64 AI" block.
- Broken polish: unrendered cookie-banner placeholders (`{title}`, `{vendor_count}`), typos ("Vizion", "depoyments"), duplicated headings, menu items with no landing pages.
- Says "predictable pricing" but shows none.
- News slowing: ~9 press releases in 2025, 1 in 2026.

## Site map (current)

Products (9) · Solutions (8: secure DNS, DDI, security services, virtualizing DNS, ENUM, DNSSEC, DDoS, IPv6) · Resources (case studies, docs, white papers, datasheets, videos) · Services (professional, managed) · News (events, press, blog) · Company (team, board, partners, contact, support, careers) · Try Secure64 · Under Attack?
