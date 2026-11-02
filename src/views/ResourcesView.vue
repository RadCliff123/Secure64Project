<script setup>
import PageHead from '@/components/PageHead.vue'
import { caseStudies, datasheets, partnerDocs, videos, whitePapers } from '@/data/library'

const crumbs = [{ label: 'Home', to: '/' }]
const groups = [...new Set(datasheets.map((d) => d.group))].map((name) => ({
  name,
  items: datasheets.filter((d) => d.group === name)
}))
</script>

<template>
  <PageHead
    title="Resources"
    lede="Everything Secure64 has published, on one page. Documents open from secure64.com."
    :crumbs="crumbs"
  >
    <p><RouterLink to="/resources/dns-explained">New to DNS? Read the plain-language guide first.</RouterLink></p>
  </PageHead>

  <section id="case-studies" class="band">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>Case studies</h2>
        <p>Customers are unnamed in these four.</p>
      </div>
      <ul class="rows">
        <li v-for="c in caseStudies" :key="c.href">
          <a :href="c.href" target="_blank" rel="noopener" class="rows__name">{{ c.title }}</a>
          <span>{{ c.what }}</span>
        </li>
      </ul>
    </div>
  </section>

  <section id="white-papers" class="band">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>White papers</h2>
        <p>Delivered by email after a short form.</p>
      </div>
      <ul class="rows">
        <li v-for="w in whitePapers" :key="w.href">
          <a :href="w.href" target="_blank" rel="noopener" class="rows__name">{{ w.title }}</a>
          <span>{{ w.what }}</span>
        </li>
      </ul>
    </div>
  </section>

  <section id="data-sheets" class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Data sheets</h2><p>All PDF.</p></div>
      <div class="sheets">
        <div v-for="g in groups" :key="g.name">
          <h3>{{ g.name }}</h3>
          <ul>
            <li v-for="d in g.items" :key="d.href"><a :href="d.href" target="_blank" rel="noopener">{{ d.title }}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="videos" class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Videos</h2></div>
      <div class="measure">
        <ul>
          <li v-for="v in videos" :key="v">{{ v }}</li>
        </ul>
        <p><a href="https://secure64.com/videos/" target="_blank" rel="noopener">Watch on secure64.com</a></p>
      </div>
    </div>
  </section>

  <section id="partners" class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>For partners</h2><p>Hosted on Microsoft 365.</p></div>
      <ul class="measure">
        <li v-for="d in partnerDocs" :key="d.href"><a :href="d.href" target="_blank" rel="noopener">{{ d.title }}</a></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.sheets {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px 32px;
}

.sheets h3 {
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 2px solid var(--navy);
}

.sheets ul {
  list-style: none;
  padding: 0;
}
</style>
