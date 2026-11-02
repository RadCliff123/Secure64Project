<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHead from '@/components/PageHead.vue'
import SubNav from '@/components/SubNav.vue'
import { blog, events, formatDate, press } from '@/data/news'

const route = useRoute()
const crumbs = [{ label: 'Home', to: '/' }]
const links = [
  { label: 'Press releases', to: '/news' },
  { label: 'Blog', to: '/news/blog' },
  { label: 'Events', to: '/news/events' }
]

const section = computed(() => route.meta.section)
const title = computed(() => ({ press: 'Press releases', blog: 'Blog', events: 'Events' })[section.value])

const years = computed(() => {
  const list = section.value === 'blog' ? blog : press
  const out = []
  for (const row of list) {
    const y = row[0].slice(0, 4)
    if (!out.length || out[out.length - 1].year !== y) out.push({ year: y, rows: [] })
    out[out.length - 1].rows.push(row)
  }
  return out
})
</script>

<template>
  <PageHead :title="title" :crumbs="crumbs" />
  <SubNav :links="links" />

  <template v-if="section === 'events'">
    <section class="band band--flush">
      <div class="wrap table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">When</th>
              <th scope="col">Event</th>
              <th scope="col">Where</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="e in events" :key="e.title">
              <td class="nowrap">{{ e.when }}</td>
              <th scope="row">{{ e.title }}</th>
              <td>{{ e.where }}</td>
              <td>
                {{ e.what }}
                <a v-if="e.href" :href="e.href" target="_blank" rel="noopener">White paper (PDF)</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>

  <template v-else>
    <section v-for="(y, i) in years" :key="y.year" class="band" :class="{ 'band--flush': i === 0 }">
      <div class="wrap band__grid">
        <div class="band__side"><h2>{{ y.year }}</h2></div>
        <ul class="news">
          <li v-for="r in y.rows" :key="r[2]">
            <span class="news__date">{{ formatDate(r[0]) }}</span>
            <a :href="r[2]" target="_blank" rel="noopener">{{ r[1] }}</a>
          </li>
        </ul>
      </div>
    </section>
  </template>
</template>

<style scoped>
.news {
  list-style: none;
  margin: 0;
  padding: 0;
}

.news li {
  display: grid;
  grid-template-columns: 105px minmax(0, 1fr);
  gap: 2px 16px;
  margin: 0;
  padding: 7px 0;
  border-bottom: 1px solid var(--rule-light);
}

.news__date {
  font-size: 14.5px;
  color: var(--ink-2);
}

@media (max-width: 520px) {
  .news li {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
