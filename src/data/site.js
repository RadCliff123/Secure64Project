// Homepage content. Claims are sourced from secure64.com (see docs/company-research.md).

export const proofPoints = [
  { stat: '1.5B+', label: 'people on networks running Secure64' },
  { stat: '20 yrs', label: 'building DNS for carriers' },
  { stat: '#1', label: 'fastest protective DNS, per DNSperf' },
  { stat: '24/7/365', label: 'expert support, every customer' }
]

export const credentials = [
  { name: 'CISA', detail: 'Listed Protective DNS vendor' },
  { name: 'DNSperf', detail: 'Fastest protective DNS' },
  { name: 'Red Hat', detail: 'RHEL 9.6 certified' },
  { name: 'HPE + AMD', detail: 'Joint performance paper' }
]

// Placeholder wordmarks; replace with approved logo files from Secure64.
export const customers = [
  'T-Mobile',
  'Verizon Business',
  'Lumen',
  'Vodafone Idea',
  'Reliance Jio',
  'Telefónica',
  'Virgin Plus',
  'ARIN',
  'Converge ICT',
  'Grupo ICE'
]

export const steps = [
  {
    title: 'Every connection starts with a lookup',
    body: 'Before a phone, laptop or smart TV can open a website, it asks DNS for the address. DNS is the internet’s phone book, and it’s used billions of times a day.'
  },
  {
    title: 'Secure64 checks each name instantly',
    body: 'Our DNS compares every request against continuously updated threat intelligence: phishing, malware, botnets, and any categories you choose to filter.'
  },
  {
    title: 'Threats never get an address',
    body: 'Safe sites resolve in milliseconds. Dangerous ones are stopped before a connection is ever made, for every device on the network, with nothing to install.'
  }
]

export const audiences = [
  {
    id: 'carriers',
    eyebrow: 'Carriers & ISPs',
    title: 'Carrier-grade DNS that pays for itself',
    body: 'Serve millions of subscribers on fewer servers, ride out DDoS attacks, and turn subscriber protection into a new revenue line.',
    points: ['Fewer servers, lower cost of ownership', 'Survives volumetric DDoS', 'Resell LineGUARD as a premium add-on'],
    cta: 'Solutions for carriers',
    to: '/solutions/carriers'
  },
  {
    id: 'enterprise',
    eyebrow: 'Enterprise & government',
    title: 'Protective DNS, the way CISA recommends',
    body: 'Block threats for every device, on and off the network, and unify DNS, DHCP and IP address management in one platform.',
    points: ['Meets federal Protective DNS guidance', 'Active Directory–aware policies', 'Full DDI with ProVision'],
    cta: 'Solutions for enterprise',
    to: '/solutions/enterprise'
  },
  {
    id: 'education',
    eyebrow: 'Schools & libraries',
    title: 'Safe internet for students and patrons',
    body: 'Filter harmful content and stop threats across campus and take-home devices, with policies ready on day one.',
    points: ['150+ filtering categories', 'Safe Search and YouTube restrictions', 'Protection that follows the device'],
    cta: 'Solutions for education',
    to: '/solutions/education'
  }
]

export const productGroups = [
  {
    job: 'Protect',
    summary: 'Stop threats and unwanted content at the lookup.',
    products: [
      { name: 'LineGUARD', body: 'Cyberthreat protection and content filtering, in the cloud, hybrid or in your network.', to: '/products/lineguard' },
      { name: 'LineGUARD Edge', body: 'LineGUARD for enterprise networks and remote workers.', to: '/products/lineguard-edge' },
      { name: 'DNS GUARD', body: 'Finds infected devices on your network and cuts off their command servers.', to: '/products/dns-guard' }
    ]
  },
  {
    job: 'Resolve',
    summary: 'Answer every subscriber’s lookups, fast and without fail.',
    products: [
      { name: 'DNS Cache', body: 'High-performance recursive DNS. Not built on BIND, so BIND’s vulnerabilities don’t apply.', to: '/products/dns-cache' },
      { name: 'DNS Proxy', body: 'Scales and shields your DNS infrastructure under heavy load.', to: '/products/dns-proxy' }
    ]
  },
  {
    job: 'Publish',
    summary: 'Keep your domains online and tamper-proof.',
    products: [
      { name: 'DNS Authority', body: 'Authoritative DNS that keeps answering real users during DDoS attacks.', to: '/products/dns-authority' },
      { name: 'DNS Signer', body: 'Fully automated DNSSEC signing and key rollover.', to: '/products/dns-signer' }
    ]
  },
  {
    job: 'Manage',
    summary: 'Run it all from one place.',
    products: [
      { name: 'DNS Manager', body: 'Configure, monitor and roll back changes across your DNS fleet.', to: '/products/dns-manager' },
      { name: 'ProVision DDI', body: 'DHCP and IP address management, unified with Secure64 DNS.', to: '/products/provision' }
    ]
  }
]
