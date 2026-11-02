// Facts come from the product pages on secure64.com (read 2026-11-01).
// Copy is rewritten. Open questions are tracked in docs/content-questions.md.

const UP = 'https://secure64.com/wp-content/uploads/'

export const productGroups = [
  { name: 'Filtering and threat blocking', slugs: ['lineguard', 'lineguard-edge', 'dns-guard'] },
  { name: 'Answering lookups', slugs: ['dns-cache', 'dns-proxy'] },
  { name: 'Publishing your domains', slugs: ['dns-authority', 'dns-signer'] },
  { name: 'Running the network', slugs: ['dns-manager', 'provision'] }
]

export const products = [
  {
    slug: 'lineguard',
    name: 'LineGUARD',
    short: 'Threat blocking and content filtering, run in the cloud, in your network or both.',
    lede: 'LineGUARD decides, at the moment a device looks up a site, whether that lookup should be answered. ISPs use it to sell protection to subscribers. Businesses, schools and libraries use it to set rules for the people on their networks.',
    plain: 'Think of parental controls and malware blocking that work on every device, because they sit in the network instead of on the phone or laptop.',
    datasheet: UP + 'Secure64-LineGuard-DATA-SHEET-1.pdf',
    links: [
      { label: 'Reporting demo', href: 'https://app.storylane.io/share/4sljzvydhrzz' },
      { label: 'LineGUARDSecurity.com', href: 'https://lineguardsecurity.com/' }
    ],
    related: ['carriers', 'education', 'security-services'],
    sections: [
      {
        h: 'What you can control',
        list: [
          'More than 150 categories and applications to block or allow, split into macro and minor categories',
          'Threat protection by type of attack',
          'App blocking, IP blocking and geoblocking',
          'Safe modes for Google, Bing, DuckDuckGo and YouTube',
          'Your own allow and block lists, uploaded by hand or through the API'
        ]
      },
      {
        h: 'Who the rules apply to',
        p: ['Policies attach to groups of users and can act on an EDNS code, a source IP address or a default. Active Directory can supply the groups. A remote client carries the same policy off the network.'],
        list: ['Ready-made policies for children, tweens, teenagers, adults and employees', 'A block page you can edit, so people see a message that fits the rule they hit']
      },
      {
        h: 'Reporting',
        p: ['Drill-down and custom reports, with scheduled reports sent by email. A full-featured API is available for anything the reports don’t cover.']
      },
      {
        h: 'Where it runs',
        p: ['Cloud, hybrid or in your own network. The cloud service runs from these locations:'],
        table: {
          head: ['Region', 'Locations'],
          rows: [
            ['North America', 'Seattle, Silicon Valley, Los Angeles, Dallas, Chicago, Toronto, New York City, Atlanta, Miami, Mexico City'],
            ['South America', 'Bogota, Quito, Lima, Santiago, São Paulo, Buenos Aires. Planned: Rio de Janeiro'],
            ['Europe', 'London, Amsterdam, Paris, Madrid, Milan, Bologna, Frankfurt, Warsaw, Stockholm, Bucharest'],
            ['Africa', 'Johannesburg. Planned: DR Congo, Kenya, Tanzania, Madagascar'],
            ['Asia', 'Istanbul, Riyadh, Dubai, Mumbai, Singapore, Hong Kong, Seoul, Tokyo'],
            ['Australia', 'Sydney']
          ]
        }
      }
    ]
  },
  {
    slug: 'lineguard-edge',
    name: 'LineGUARD Edge',
    short: 'LineGUARD for company networks, with policies tied to Active Directory.',
    lede: 'LineGUARD Edge applies carrier technology to a single company. It protects any device on the network and lets each team have its own rules, so marketing can reach social media while finance can’t.',
    plain: 'It also stops staff reaching tools the company has ruled out. AI apps such as DeepSeek are one category, which helps keep company data from leaking into them.',
    datasheet: UP + 'Secure64-Enterprise-Edge-Data-Sheet-4-V2.pdf',
    links: [{ label: 'Business network features', href: 'https://lineguardsecurity.com/lineguard-features/for-business-enterprise-networks/' }],
    related: ['enterprise', 'security-services'],
    sections: [
      {
        h: 'Protection',
        list: [
          'A continually updated list of command-and-control sites for malware, phishing and ransomware',
          'Content categories including social media, gambling, alcohol, adult content, tobacco, firearms, and AI tools and applications',
          'A client for Windows, macOS, Android and iOS, so the rules still apply at home or on the road'
        ]
      },
      {
        h: 'Deployment',
        p: ['Mainly a cloud service, with all DNS processing in the cloud. Setup can take as little as a few hours. Parts of it can be installed in your network, and it is also available as an image for off-the-shelf hardware with reporting kept in the cloud.'],
        list: ['Active Directory integration needs a proxy inside your network', 'IP addresses can be obscured in flight and at rest before they reach the cloud']
      }
    ]
  },
  {
    slug: 'dns-guard',
    name: 'DNS GUARD',
    short: 'Security services for DNS Cache that block malware, fraud and DNS tunnels.',
    lede: 'DNS GUARD runs in the provider’s network and protects every device behind it, without touching the devices. That matters for phones nobody patches and smart TVs nobody can.',
    plain: 'Secure64 says more than 95% of cyberthreats have a DNS element, which is why the lookup is a useful place to catch them.',
    datasheet: UP + 'Secure64-DNS-GUARD-DATA-SHEET-V2.pdf',
    links: [{ label: 'TunnelGuard data sheet (PDF)', href: UP + 'Secure64_DNS_TunnelGuard_Data-Sheet__v6.pdf' }],
    related: ['security-services', 'carriers'],
    sections: [
      {
        h: 'The services',
        p: ['Sold separately or together.'],
        table: {
          head: ['Service', 'What it blocks'],
          rows: [
            ['MalwareGuard', 'Sites that serve malware, and the traffic between infected devices and their command-and-control servers'],
            ['FraudGuard', 'Phishing, fraud and online scam sites'],
            ['TunnelGuard', 'DNS tunnels, which are used for bandwidth piracy, stealing data and getting around regulatory controls'],
            ['LineGUARD', 'Content filtering for subscribers who opt in']
          ]
        }
      },
      {
        h: 'If you don’t run Secure64 DNS',
        p: ['RPZ is an open standard for feeding block lists to a DNS server. Guard feeds are available in RPZ format for BIND, PowerDNS and other servers that support it.']
      },
      {
        h: 'Free traffic analysis',
        p: ['Send Secure64 a packet capture (PCAP) of your DNS traffic and you’ll get back a report on the malicious behavior in it.']
      }
    ]
  },
  {
    slug: 'dns-cache',
    name: 'DNS Cache',
    short: 'The resolver a carrier or enterprise runs to answer its users’ lookups.',
    lede: 'DNS Cache is a caching resolver: the server a device asks when it needs an address. It is built for carrier and enterprise networks, scales linearly and keeps working through DDoS attacks.',
    plain: 'It shares no code with BIND, the most widely deployed DNS software, so BIND’s vulnerabilities don’t apply to it.',
    datasheet: UP + 'Secure64-DNS-Cache-Product-Data-Sheet-1-V3.pdf',
    links: [{ label: 'Vizion data sheet (PDF)', href: UP + 'S64-VIZION-DATA-SHEET-2-V2.pdf' }],
    related: ['ddos', 'secure-dns', 'ipv6'],
    sections: [
      {
        h: 'What HPE and AMD measured',
        p: ['HPE and AMD tested DNS Cache on an HPE ProLiant DL325 Gen11 with a 5th Gen AMD EPYC 9555 and reported a sixfold performance improvement over BIND.'],
        source: { label: 'Read the white paper (PDF, AMD)', href: 'https://www.amd.com/content/dam/amd/en/documents/solutions/telco/hpe-secure64-white-paper.pdf' }
      },
      {
        h: 'Security',
        list: [
          'Runs the DNS GUARD services and also accepts RPZ lists',
          'Vizion shows DDoS and Guard events in near real time and exports them in a standard format for SOC and compliance tools',
          'Built-in DNS64, for networks moving to IPv6'
        ]
      },
      {
        h: 'Operations',
        p: ['Configuration and rule changes apply to a running server without interrupting service.'],
        list: ['Certified for Red Hat Enterprise Linux 9.6 (September 2026)']
      }
    ]
  },
  {
    slug: 'dns-proxy',
    name: 'DNS Proxy',
    short: 'Lets a service provider offer DNS over HTTPS without loading its resolvers.',
    lede: 'Browsers can now send DNS lookups over encrypted HTTPS to third-party resolvers, which takes that traffic off the provider’s network along with the information it needs to run the network. DNS Proxy lets providers offer DNS over HTTPS (DoH) themselves.',
    plain: 'The encryption is expensive to compute, so a separate proxy handles it and passes plain lookups to the resolvers you already have.',
    datasheet: UP + 'Secure64-DNS-Proxy-Datasheet-V2.pdf',
    related: ['carriers'],
    sections: [
      {
        h: 'How it fits',
        list: [
          'Proxy servers sit in front of your existing resolvers and take the incoming DoH traffic',
          'Resolvers aren’t affected by the cost of the encryption',
          'You keep visibility of traffic that third-party DoH would remove',
          'Proxies scale separately from resolvers as DoH use grows'
        ]
      }
    ]
  },
  {
    slug: 'dns-authority',
    name: 'DNS Authority',
    short: 'The authoritative server that publishes your domains, and keeps answering during attacks.',
    lede: 'An authoritative server is the official source for a domain’s addresses. DNS Authority is purpose-built for that one job on carrier and enterprise networks, and it supports Anycast.',
    plain: 'When a flood of attack traffic arrives, it drops those queries and keeps answering the real ones.',
    datasheet: UP + 'Secure64-DNS-Authority-Product-Data-Sheet-V2.pdf',
    related: ['ddos', 'secure-dns', 'enum', 'ipv6'],
    sections: [
      {
        h: 'Built for this job',
        list: [
          'A separate implementation that shares no code with BIND',
          'Fine-grained DDoS detection and mitigation rules',
          'Generates IPv6 reverse records on the fly from rules you define, so you don’t store huge numbers of PTR records',
          'A RESTful API for orchestration and lifecycle management'
        ]
      },
      {
        h: 'Deployment',
        table: {
          head: ['Option', 'Details'],
          rows: [
            ['Bare metal', 'A range of x86 Linux hardware'],
            ['Virtual appliance', 'For dynamic scaling and NFV']
          ]
        }
      }
    ]
  },
  {
    slug: 'dns-signer',
    name: 'DNS Signer',
    short: 'Automates DNSSEC, the digital signature that proves a DNS answer is genuine.',
    lede: 'DNSSEC lets anyone check that a DNS answer is authentic. It is also easy to get wrong, and a mistake can make your domains unreachable. DNS Signer automates the parts where those mistakes happen.',
    plain: 'A US government agency began using it to meet a federal DNSSEC mandate. A top-level domain operator in Asia uses it too.',
    datasheet: UP + 'DNS-Signer-Product-Data-Shee-V2.pdf',
    related: ['dnssec'],
    sections: [
      {
        h: 'What it automates',
        list: ['Key generation', 'Key rollover', 'Zone signing and re-signing, including incremental signing']
      },
      {
        h: 'What it works with',
        p: ['BIND, NSD and Microsoft DNS masters and slaves, and Secure64 DNS Authority. Your existing DNS stays in place.']
      },
      {
        h: 'Key storage',
        p: ['Runs on off-the-shelf Linux hardware, with optional HSM cards to hold keys and do the signing.']
      }
    ]
  },
  {
    slug: 'dns-manager',
    name: 'DNS Manager',
    short: 'One console to configure, watch and update a fleet of DNS Cache servers.',
    lede: 'DNS Manager is a graphical console for the people running a set of Secure64 DNS Cache servers. It handles software rollouts, configuration changes, and monitoring of load and health.',
    plain: 'Every change is logged and can be rolled back.',
    datasheet: UP + 'Secure64-DNS-Manager-Datasheet-V2.pdf',
    related: ['carriers', 'ddi'],
    sections: [
      {
        h: 'Configuration',
        p: ['Group servers and assign a configuration to one server, a group or all of them. Configuration and software changes are revision controlled.']
      },
      {
        h: 'Monitoring and reports',
        table: {
          head: ['Item', 'Details'],
          rows: [
            ['Monitoring', 'More than 40 KPIs, including queries per second and CPU, disk and memory use'],
            ['Alerts', 'Email, on thresholds you set'],
            ['Reports', 'More than 20, on demand or on a schedule, with CSV export']
          ]
        }
      }
    ]
  },
  {
    slug: 'provision',
    name: 'ProVision',
    short: 'DHCP and IP address management from Hilco, the other half of Secure64 DDI.',
    lede: 'ProVision comes from Hilco and forms the DHCP and IP address management layer of Secure64’s DDI offering. It plans, allocates and tracks IPv4 and IPv6 addresses, and it works with the network you already have.',
    plain: 'DHCP hands an address to each device that joins a network. IP address management keeps the records of who has what.',
    related: ['ddi', 'enterprise'],
    sections: [
      {
        h: 'What it does',
        list: [
          'IPv4 and IPv6 planning and allocation, including overlapping blocks left by mergers or multi-tenant growth',
          'Subnet scanning and auditing',
          'DHCP management across several platforms and vendors from one console',
          'DNS zones and records on your existing platforms, with validation and version control',
          'Records for customers, data center locations, circuits and other business details',
          'Delegated administration for business units, internal teams and external customers',
          'A REST API that connects to ticketing, OSS/BSS, cloud platforms and your own tools'
        ]
      },
      {
        h: 'Deployment',
        p: ['On-premises, in the cloud or both.'],
        table: {
          head: ['Model', 'Details'],
          rows: [
            ['Standard', 'One instance in your management zone, with backup included'],
            ['High availability', 'Multiple ProVision nodes'],
            ['Multi-instance', 'Separate instances for sites, business units or CI/CD environments, with central visibility']
          ]
        }
      },
      {
        h: 'Migration',
        p: ['Secure64 professional services import your data into a staging environment, so nothing goes live until it has been reviewed.']
      }
    ]
  }
]

export const productBySlug = Object.fromEntries(products.map((p) => [p.slug, p]))
