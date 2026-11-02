<script setup>
import LookupFigure from '@/components/LookupFigure.vue'
import { productBySlug, productGroups } from '@/data/products'
import { blog, formatDate, press } from '@/data/news'
import { customers } from '@/data/company'
import { solutions } from '@/data/solutions'

const networks = solutions.filter((s) => s.group === 'network')
const latest = [press[0], blog[0], blog[1], press[1]]

const proof = [
  {
    who: 'DNSperf',
    when: 'June 2025',
    what: 'Test results placed LineGUARD as the fastest protective DNS vendor.',
    href: press[6][2]
  },
  {
    who: 'HPE and AMD',
    when: 'August 2025',
    what: 'DNS Cache on an HPE ProLiant DL325 Gen11 with a 5th Gen AMD EPYC 9555 showed a sixfold performance improvement over BIND.',
    href: 'https://www.amd.com/content/dam/amd/en/documents/solutions/telco/hpe-secure64-white-paper.pdf'
  },
  {
    who: 'CISA and NSA',
    when: 'April 2025',
    what: 'Secure64 is listed as a vendor in CISA and NSA guidance on selecting a Protective DNS service.',
    href: press[7][2]
  },
  {
    who: 'Red Hat',
    when: 'September 2026',
    what: 'DNS Cache is certified for Red Hat Enterprise Linux 9.6.',
    href: blog[0][2]
  }
]
</script>

<template>
  <div class="wrap hero">
    <div class="hero__text">
      <h1>The DNS inside networks serving more than 1.5&nbsp;billion users</h1>
      <p class="lede">
        Every website, app and email starts with a DNS lookup: a device asking where a name lives.
        Secure64 builds the servers that answer those lookups for phone companies, ISPs, enterprises and
        government, and blocks the ones headed for phishing or malware.
      </p>
      <p class="hero__actions">
        <RouterLink to="/contact" class="btn">Talk to Secure64</RouterLink>
        <RouterLink to="/resources/dns-explained">New to DNS? Start here</RouterLink>
      </p>
      <p class="note">20 years in DNS. Privately held, based in Fort Collins, Colorado.</p>
    </div>
    <LookupFigure class="hero__fig" />
  </div>

  <section class="story">
    <div class="wrap story__grid">
      <div>
        <h2>A major US carrier moved 6 million users off Cisco Umbrella in under six weeks</h2>
        <p>
          The carrier replaced a working Umbrella deployment with LineGUARD, covering children, schools and
          businesses on its network. Secure64 reports lower cost and better performance after the move.
        </p>
        <p><a :href="press[8][2]" target="_blank" rel="noopener">Read the press release</a></p>
      </div>
      <table class="story__nums">
        <tbody>
          <tr><th scope="row">6 million</th><td>users protected</td></tr>
          <tr><th scope="row">100 million</th><td>threats blocked each day</td></tr>
          <tr><th scope="row">50%</th><td>lower cybersecurity cost</td></tr>
          <tr><th scope="row">3x</th><td>performance</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="band band--flush">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>Who runs it</h2>
      </div>
      <div>
        <ul class="rows">
          <li v-for="n in networks" :key="n.slug">
            <RouterLink :to="`/solutions/${n.slug}`" class="rows__name">{{ n.name }}</RouterLink>
            <span>{{ n.short }}</span>
          </li>
        </ul>
        <p class="customers">
          <b>Customers named on secure64.com:</b> {{ customers.join(', ') }}.
        </p>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>Products</h2>
        <p><RouterLink to="/products">Compare all products</RouterLink></p>
      </div>
      <div class="prod">
        <div v-for="g in productGroups" :key="g.name">
          <h3>{{ g.name }}</h3>
          <dl>
            <template v-for="s in g.slugs" :key="s">
              <dt><RouterLink :to="`/products/${s}`">{{ productBySlug[s].name }}</RouterLink></dt>
              <dd>{{ productBySlug[s].short }}</dd>
            </template>
          </dl>
        </div>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>Why it isn&rsquo;t built on BIND</h2>
      </div>
      <div class="measure">
        <p>
          BIND is the most widely deployed DNS software in the world, so a BIND flaw is a problem for a great many
          networks on the same day. DNS Cache and DNS Authority share no code with it.
        </p>
        <p>
          That independence goes back to the founding. Co-founder Bill Worley was principal architect of HP&rsquo;s
          PA-RISC processors, then led HP research on secure system architecture, and went on to invent
          SourceT, Secure64&rsquo;s own secure operating system.
          <RouterLink to="/company">The company&rsquo;s history</RouterLink>
        </p>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>Outside checks</h2>
      </div>
      <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Source</th>
              <th scope="col">Date</th>
              <th scope="col">Finding</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in proof" :key="p.who">
              <th scope="row" class="nowrap">{{ p.who }}</th>
              <td class="nowrap">{{ p.when }}</td>
              <td><a :href="p.href" target="_blank" rel="noopener">{{ p.what }}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>Latest</h2>
        <p><RouterLink to="/news">All news</RouterLink></p>
      </div>
      <ul class="rows">
        <li v-for="n in latest" :key="n[2]">
          <span class="note">{{ formatDate(n[0]) }}</span>
          <a :href="n[2]" target="_blank" rel="noopener">{{ n[1] }}</a>
        </li>
      </ul>
    </div>
  </section>

  <section class="offer">
    <div class="wrap offer__in">
      <div>
        <h2>See what&rsquo;s in your own DNS traffic</h2>
        <p class="measure">
          Send Secure64 a packet capture of your DNS traffic and they&rsquo;ll send back a free report on the
          malicious behavior in it.
        </p>
      </div>
      <RouterLink to="/contact" class="btn">Ask for a traffic analysis</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 40px;
  padding-top: 40px;
  padding-bottom: 44px;
  align-items: start;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 18px;
  margin: 22px 0 18px;
}

.hero h1 {
  margin-bottom: 18px;
}

.story {
  padding: 36px 0;
  background: var(--navy);
  color: #e7ebf1;
}

.story h2 {
  margin-bottom: 12px;
  color: #fff;
}

.story a {
  color: #fff;
}

.story__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 1fr);
  gap: 40px;
  align-items: start;
}

.story__nums th,
.story__nums td {
  border-bottom-color: rgba(255, 255, 255, 0.22);
  vertical-align: baseline;
}

.story__nums th {
  font-family: var(--head);
  font-size: 24px;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
}

.customers {
  margin-top: 18px;
  font-size: 15px;
}

.prod {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px 40px;
}

.prod h3 {
  padding-bottom: 6px;
  border-bottom: 2px solid var(--navy);
}

dl {
  margin: 0;
}

dt {
  margin-top: 12px;
  font-weight: 600;
}

dd {
  margin: 0;
  font-size: 15px;
  color: var(--ink-2);
}

.offer {
  margin-top: 8px;
  padding: 30px 0;
  background: var(--wash);
  border-top: 1px solid var(--rule);
}

.offer h2 {
  margin-bottom: 8px;
}

.offer__in {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 18px 32px;
}

@media (max-width: 900px) {
  .hero,
  .story__grid,
  .prod {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
