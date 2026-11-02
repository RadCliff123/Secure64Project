// Document lists from the Resources pages on secure64.com. Links go to the originals.

const UP = 'https://secure64.com/wp-content/uploads/'
const WP = 'https://secure64.com/white_papers/'

export const caseStudies = [
  {
    title: 'A major US mobile operator',
    what: 'Replaced BIND-based appliances with Secure64, gaining scalability and cutting patching costs.',
    href: UP + 'Mobileco-case-study_2017-V2.pdf'
  },
  {
    title: 'A communication service provider in Southeast Asia',
    what: 'Stabilized its network and reduced its server count.',
    href: UP + 'Southeast-Asia-Communication-Case-Study-number-2-V2.pdf'
  },
  {
    title: 'A US government agency',
    what: 'Started with DNS Signer to meet a federal DNSSEC mandate and went on to build a secure DNS.',
    href: UP + 'US-GOVERNMENT-AGENCY-BUILDS-SECURE-DNS-NETWORK-CASE-STUDY-V2.pdf'
  },
  {
    title: 'A top-level domain in Asia',
    what: 'Implemented DNSSEC with DNS Signer.',
    href: UP + 'Asian-TLD-Adds-Trust-with-DNSSEC-from-Secure64-V2.pdf'
  }
]

export const whitePapers = [
  { title: 'DNS Privacy: Concerns, Issues and Technologies', what: 'The problem space, emerging standards and services for client DNS privacy.', href: WP + 'dns-privacy-concerns-issues-and-technologies/' },
  { title: 'Diversity and the DNS', what: 'Why running more than one DNS platform matters.', href: WP + 'diversity-and-the-dns/' },
  { title: 'Defending with DNS: Introducing DNS Guard', what: 'Using DNS to protect providers and their users.', href: WP + 'defending-with-dns-introducing-secure64-dns-guard/' },
  { title: 'Lies, Damn Lies and DNS Performance Statistics', what: 'How to measure the real performance of a caching resolver.', href: WP + 'lies-damn-lies-and-dns-performance-statistics/' },
  { title: 'Surviving DNS DDoS Attacks', what: 'The self-protecting DNS server and denial-of-service defense.', href: WP + 'surviving-dns-ddos-attacks/' },
  { title: 'Eliminating Malware & Rootkits', what: 'Six characteristics of a genuinely secure operating system.', href: WP + 'eliminating-malware-rootkits/' },
  { title: 'Have I Reached the Party to Whom I am Speaking?', what: 'What DNSSEC is and how organizations benefit.', href: WP + 'have-i-reached-the-party-to-whom-i-am-speaking/' },
  { title: 'Death by a Thousand Paper Cuts', what: 'Defending against denial-of-service attacks aimed at the DNS application.', href: WP + 'death-by-a-thousand-paper-cuts/' }
]

export const datasheets = [
  { group: 'Content control and security', title: 'LineGUARD', href: UP + 'Secure64-LineGuard-DATA-SHEET-1.pdf' },
  { group: 'Content control and security', title: 'LineGUARD Edge (Enterprise Edge)', href: UP + 'Secure64-Enterprise-Edge-Data-Sheet-4-V2.pdf' },
  { group: 'DNS products', title: 'DNS Authority', href: UP + 'Secure64-DNS-Authority-Product-Data-Sheet-V2.pdf' },
  { group: 'DNS products', title: 'DNS Cache', href: UP + 'Secure64-DNS-Cache-Product-Data-Sheet-1-V3.pdf' },
  { group: 'DNS products', title: 'DNS Signer', href: UP + 'DNS-Signer-Product-Data-Shee-V2.pdf' },
  { group: 'DNS products', title: 'DNS ENUM', href: UP + 'Secure64-ENUM-Solution-Brochure-V2.pdf' },
  { group: 'Security services', title: 'DNS GUARD', href: UP + 'Secure64-DNS-GUARD-DATA-SHEET-V2.pdf' },
  { group: 'Security services', title: 'DNS TunnelGuard', href: UP + 'Secure64_DNS_TunnelGuard_Data-Sheet__v6.pdf' },
  { group: 'Security services', title: 'Vizion', href: UP + 'S64-VIZION-DATA-SHEET-2-V2.pdf' },
  { group: 'Security services', title: 'DNS Proxy', href: UP + 'Secure64-DNS-Proxy-Datasheet-V2.pdf' },
  { group: 'DNS management', title: 'DNS Manager', href: UP + 'Secure64-DNS-Manager-Datasheet-V2.pdf' },
  { group: 'Support', title: 'Secure64 Support', href: UP + 'Secure64-Support-V2.pdf' }
]

export const videos = [
  'DNS Tunneling in Action',
  'Secure64 Vizion',
  'Secure64 Vizion, captioned in Vietnamese',
  'RFC 8914 Extended DNS Errors in operation'
]

export const partnerDocs = [
  { title: 'Training resources', href: 'https://secure64.sharepoint.com/sites/TrainingResources' },
  { title: 'Reseller resources', href: 'https://secure64.sharepoint.com/sites/ExternalResellerResources' },
  { title: 'Deal registration', href: 'https://forms.office.com/Pages/ResponsePage.aspx?id=RGwNmkrEjkWYkplXo2naxixNnwelGu5Dt9EfhmQbsTtUQlpaNEw0SDlSSjVUUzQ1REtTR0hIODdXMC4u' }
]
