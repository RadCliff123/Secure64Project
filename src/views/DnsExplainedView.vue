<script setup>
import PageHead from '@/components/PageHead.vue'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Resources', to: '/resources' }
]

const terms = [
  ['Anycast', 'One address served from many locations at once. Lookups go to the nearest one.'],
  ['BIND', 'The most widely deployed DNS software, and open source. Secure64’s DNS shares no code with it.'],
  ['DDI', 'DNS, DHCP and IP address management, considered as one job.'],
  ['DHCP', 'The system that gives a device an address when it joins a network.'],
  ['DoH', 'DNS over HTTPS. Lookups sent encrypted, the way web pages are.'],
  ['ENUM', 'A way to use DNS to map phone numbers to the addresses that route calls.'],
  ['IPAM', 'IP address management. The records of which addresses are in use, and by whom.'],
  ['PCAP', 'A file holding a recording of network traffic.'],
  ['RPZ', 'Response Policy Zone, an open standard for sending block lists to DNS servers.'],
  ['TLD', 'Top-level domain. The last part of a name, like .com or .uk.']
]
</script>

<template>
  <PageHead
    title="DNS explained"
    lede="A short guide for people who don't work on networks. It covers what DNS does, how it fails, and where Secure64's products fit."
    :crumbs="crumbs"
  />

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>What it does</h2></div>
      <div class="measure">
        <p>
          Computers find each other by number. People use names. DNS, the Domain Name System, converts one to the other.
          It's often called the internet's phone book, which is close enough to start with.
        </p>
        <p>
          When you open a website, your device has to ask for the site's address before anything else can happen. The same
          goes for apps and email. Nobody sees this step unless it breaks, and when it breaks, the internet seems to be down
          even when every other part of it is working.
        </p>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>The two kinds of server</h2></div>
      <div class="measure">
        <p>
          <b>A resolver</b> does the asking. Yours is usually run by your phone company or ISP. It remembers recent answers
          (the memory is called a cache), so most lookups finish without going any further. Secure64's resolver is
          <RouterLink to="/products/dns-cache">DNS Cache</RouterLink>.
        </p>
        <p>
          <b>An authoritative server</b> holds the official records for a domain. The resolver asks it when it doesn't already
          have the answer. Secure64's is <RouterLink to="/products/dns-authority">DNS Authority</RouterLink>.
        </p>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>How it gets attacked</h2></div>
      <div class="table-scroll">
        <table>
          <thead>
            <tr><th scope="col">Attack</th><th scope="col">What happens</th><th scope="col">What helps</th></tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">DDoS</th>
              <td>A flood of junk traffic overwhelms the server, so real lookups go unanswered.</td>
              <td><RouterLink to="/solutions/ddos">Built-in DDoS defense</RouterLink></td>
            </tr>
            <tr>
              <th scope="row">Cache poisoning</th>
              <td>A forged answer gets stored, and people are sent to the wrong place.</td>
              <td><RouterLink to="/solutions/dnssec">DNSSEC</RouterLink></td>
            </tr>
            <tr>
              <th scope="row">Software flaws</th>
              <td>A bug lets an attacker crash the server or take it over.</td>
              <td><RouterLink to="/solutions/secure-dns">Purpose-built DNS</RouterLink></td>
            </tr>
            <tr>
              <th scope="row">DNS tunnels</th>
              <td>Stolen data is smuggled out, disguised as DNS lookups.</td>
              <td><RouterLink to="/products/dns-guard">TunnelGuard</RouterLink></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>DNS as a security tool</h2></div>
      <div class="measure">
        <p>
          Since nearly every connection begins with a lookup, the DNS server is in a good position to refuse the bad ones.
          If a device asks for a known phishing site and doesn't get an address, it can't connect. This is called Protective
          DNS, and the US agencies CISA and NSA have published guidance on choosing such a service.
        </p>
        <p>
          It has one big practical advantage: nothing has to be installed on the device. Phones, printers and smart TVs are all
          covered because they all use DNS. Secure64 sells this as
          <RouterLink to="/products/dns-guard">DNS GUARD</RouterLink> and <RouterLink to="/products/lineguard">LineGUARD</RouterLink>.
        </p>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Other terms you'll see</h2></div>
      <div class="table-scroll">
        <table>
          <tbody>
            <tr v-for="t in terms" :key="t[0]">
              <th scope="row">{{ t[0] }}</th>
              <td>{{ t[1] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
