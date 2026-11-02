// Topic pages follow the Solutions pages on secure64.com. The three network
// pages are new, assembled from facts published elsewhere on the site.

export const solutions = [
  {
    slug: 'carriers',
    group: 'network',
    name: 'Carriers and ISPs',
    short: 'Resolvers, security services and filtering you can sell to subscribers.',
    lede: 'Secure64’s customer list is mostly phone and internet companies. If your subscribers can’t resolve a name, they call you, so the resolver has to keep answering through whatever the network throws at it.',
    products: ['dns-cache', 'dns-authority', 'dns-guard', 'lineguard', 'dns-manager', 'dns-proxy'],
    sections: [
      {
        h: 'A recent migration',
        p: ['A major US carrier replaced its Cisco Umbrella platform with LineGUARD in under six weeks. LineGUARD now covers 6 million of its users and blocks 100 million threats a day. Secure64 reports that the carrier cut its cybersecurity costs by 50% and tripled performance.']
      },
      {
        h: 'Work with named operators',
        table: {
          head: ['Operator', 'Where', 'Work'],
          rows: [
            ['1&1 Drillisch', 'Germany', 'DNS and IPAM for a greenfield 5G network'],
            ['Reliance Jio', 'India', 'Integration with NMS, SIEM and data warehouses'],
            ['Djezzy', 'Algeria', 'Periodic DDI health checks'],
            ['Ooredoo', 'Qatar', 'DNS GUARD for business broadband customers'],
            ['Sunrise', 'Switzerland', 'DNS and security services']
          ]
        }
      },
      {
        h: 'Security as a service',
        p: ['Endpoint software has to be installed on each device, and in-line network security adds latency to every packet. Filtering at DNS inspects only DNS traffic and applies network-wide, which is what makes it practical to sell as an add-on.']
      }
    ]
  },
  {
    slug: 'enterprise',
    group: 'network',
    name: 'Enterprise and government',
    short: 'Protective DNS with policies per team, on and off the network.',
    lede: 'Protective DNS stops devices reaching known-bad sites. CISA and NSA have published guidance on selecting a Protective DNS service, and Secure64 is one of the vendors listed.',
    products: ['lineguard-edge', 'lineguard', 'provision', 'dns-signer'],
    sections: [
      {
        h: 'Rules that follow the org chart',
        p: ['LineGUARD Edge reads users and groups from Microsoft Active Directory, so policies can differ by team. A client for Windows, macOS, Android and iOS keeps them in force on public Wi-Fi.']
      },
      {
        h: 'Government DNSSEC',
        p: ['A US government agency started using DNS Signer because of a federal DNSSEC mandate, then went on to build out its secure DNS with Secure64.'],
        source: { label: 'Read the case study (PDF)', href: 'https://secure64.com/wp-content/uploads/US-GOVERNMENT-AGENCY-BUILDS-SECURE-DNS-NETWORK-CASE-STUDY-V2.pdf' }
      },
      {
        h: 'DNS, DHCP and addressing together',
        p: ['Teams that run these separately tend to end up with slow provisioning and configuration errors. ProVision and Secure64 DNS bring them under one set of workflows.']
      }
    ]
  },
  {
    slug: 'education',
    group: 'network',
    name: 'Schools and libraries',
    short: 'Content filtering by age group, with protection on take-home devices.',
    lede: 'LineGUARD filters at the lookup, so it covers every device on a school or library network with nothing to install on them.',
    products: ['lineguard'],
    sections: [
      {
        h: 'What you can set',
        list: [
          'Ready-made policies for children, tweens, teenagers and adults',
          'More than 150 categories and applications',
          'Safe modes for Google, Bing, DuckDuckGo and YouTube',
          'A block page with your own message, so people know why a site didn’t load'
        ]
      },
      {
        h: 'Off campus',
        p: ['A remote client keeps the same policy in force when a device goes home. Reports can be emailed on a schedule.']
      }
    ]
  },
  {
    slug: 'secure-dns',
    group: 'topic',
    name: 'Building a secure DNS',
    short: 'DNS servers that defend themselves, so they can face the internet directly.',
    lede: 'DNS has to be on all the time and has to be reachable from the internet, which makes it an obvious target. Attackers try to knock it over with denial-of-service traffic or exploit a flaw to crash the server or take it over.',
    products: ['dns-authority', 'dns-cache', 'dns-signer'],
    sections: [
      {
        h: 'Secure64’s approach',
        p: ['Purpose-built servers that don’t use BIND. That removes BIND patching from your schedule and reduces the need for security appliances in front of the DNS.']
      }
    ]
  },
  {
    slug: 'ddi',
    group: 'topic',
    name: 'DDI',
    short: 'DNS, DHCP and IP address management on one platform.',
    lede: 'DDI stands for DNS, DHCP and IP address management. Run separately, they cause poor visibility, slow provisioning and configuration errors. Secure64 launched a combined offering with Hilco’s ProVision in October 2026.',
    products: ['provision', 'dns-authority', 'dns-cache', 'dns-signer', 'dns-guard', 'lineguard'],
    sections: [
      {
        h: 'What you get',
        list: [
          'Carrier-grade DNS from Secure64, with DNSSEC signing',
          'DHCP and IPv4/IPv6 management from ProVision, across physical, virtual, container and 5G environments',
          'Security policy enforced in the DNS layer, without separate appliances or endpoint agents',
          'Revision history and rollback'
        ]
      },
      {
        h: 'Who it’s for',
        p: ['Telecom operators, ISPs, data centers, cable and mobile providers, government and enterprises.']
      }
    ]
  },
  {
    slug: 'security-services',
    group: 'topic',
    name: 'Security services through the DNS',
    short: 'Network-wide protection that inspects DNS traffic only.',
    lede: 'Endpoint security needs installing on every device and drains phone batteries. Network security is costly at high traffic volumes, adds latency, and sees less as more web traffic is encrypted. DNS-based security avoids most of that.',
    products: ['dns-guard', 'lineguard'],
    sections: [
      {
        h: 'What it stops',
        p: ['Malware, phishing, DNS tunnels and hijacking, along with any content you choose to filter.']
      },
      {
        h: 'Why providers like it',
        list: [
          'Only DNS traffic is inspected, which keeps latency and cost down',
          'Policy is set centrally',
          'It scales with your DNS',
          'It offers a revenue line that protects subscribers'
        ]
      }
    ]
  },
  {
    slug: 'ddos',
    group: 'topic',
    name: 'Defending against DDoS',
    short: 'Six layers of protection built into the DNS server.',
    lede: 'A DDoS attack tries to overwhelm DNS with traffic. Firewalls and dedicated DDoS equipment add cost and latency and only partly solve it. Secure64 servers identify and drop attack traffic themselves while answering legitimate queries.',
    products: ['dns-authority', 'dns-cache'],
    whitepaper: { label: 'Surviving DNS DDoS Attacks (white paper)', href: 'https://secure64.com/white_papers/surviving-dns-ddos-attacks/' },
    sections: [
      {
        h: 'The six levels',
        table: {
          head: ['', 'Attack', 'Response'],
          rows: [
            ['1', 'Protocol exploits', 'Malformed packets and invalid header-bit combinations are dropped automatically'],
            ['2', 'TCP SYN floods', 'Detected and mitigated with pre-connect and aging'],
            ['3', 'Malformed DNS requests', 'Detected by inspecting the DNS packet'],
            ['4', 'UDP and TCP packet floods', 'Automatic blacklisting and rules-based flood protection'],
            ['5', 'Floods larger than your bandwidth', 'Rules set router filters automatically to drop the traffic upstream'],
            ['6', 'DNS application attacks, including PRSD', 'Excess recursive queries are dropped while every cache hit is still answered']
          ]
        }
      }
    ]
  },
  {
    slug: 'dnssec',
    group: 'topic',
    name: 'Deploying DNSSEC',
    short: 'Signed DNS answers, deployed in days.',
    lede: 'DNSSEC lets a recipient confirm that a DNS response is authentic and hasn’t been altered. It mitigates redirection, cache poisoning and pharming. The risk is in deployment, because a mistake can make your domains unreachable.',
    products: ['dns-signer'],
    whitepaper: { label: 'Have I Reached the Party to Whom I am Speaking? (white paper)', href: 'https://secure64.com/white_papers/have-i-reached-the-party-to-whom-i-am-speaking/' },
    sections: [
      {
        h: 'How DNS Signer helps',
        p: ['It works with your existing DNS and automates the key handling and signing. Secure64 says that takes implementation from months to days.']
      }
    ]
  },
  {
    slug: 'ipv6',
    group: 'topic',
    name: 'Transitioning to IPv6',
    short: 'NAT64 and DNS64 as an alternative to running two networks.',
    lede: 'Unallocated IPv4 addresses ran out at the top level in January 2011, and by September 2015 four of the five regional registries had run out too. Dual stack is expensive and tunneling is complex, so many providers look at NAT64 with DNS64.',
    products: ['dns-cache', 'dns-authority'],
    sections: [
      {
        h: 'Where Secure64 fits',
        list: [
          'DNS Cache has DNS64 built in and works with third-party NAT64 products',
          'DNS Authority generates reverse records dynamically, so PTR records don’t have to be stored for huge IPv6 ranges'
        ]
      }
    ]
  },
  {
    slug: 'enum',
    group: 'topic',
    name: 'Migrating to ENUM',
    short: 'Number mapping for voice and messaging in IMS networks.',
    lede: 'ENUM maps phone numbers to the internet addresses that route calls and messages, and it reaches the mobile number portability database. When it slows down or fails, calls fail.',
    datasheet: 'https://secure64.com/wp-content/uploads/Secure64-ENUM-Solution-Brochure-V2.pdf',
    products: ['dns-authority'],
    sections: [
      {
        h: 'Secure64 ENUM',
        list: [
          'Runs as virtual machines on commodity hardware',
          'Every component is deployed in a redundant pair with automatic failover',
          'A RESTful API for third-party management and orchestration',
          'Scales to hundreds of millions of subscribers'
        ]
      },
      {
        h: 'In use',
        p: ['A tier-1 Indian carrier selected Secure64 for ENUM in its IMS architecture in 2019.']
      }
    ]
  },
  {
    slug: 'virtualizing',
    group: 'topic',
    name: 'Virtualizing the DNS',
    short: 'NFV-ready DNS with a REST interface for automation.',
    lede: 'Service providers are moving network functions to virtual machines for flexibility and cost. Products that lean on specialized hardware struggle to scale that way, and Secure64 describes BIND as very limited in virtual environments.',
    products: ['dns-authority', 'dns-cache'],
    sections: [
      {
        h: 'What Secure64 offers',
        list: [
          'Up to 400k queries per second in virtual environments, by Secure64’s figures',
          'A RESTful interface to configure, monitor and manage the system',
          'Support for automation and elastic scaling'
        ]
      }
    ]
  }
]

export const solutionBySlug = Object.fromEntries(solutions.map((s) => [s.slug, s]))
