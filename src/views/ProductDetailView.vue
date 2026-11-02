<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ContentBands from '@/components/ContentBands.vue'
import PageHead from '@/components/PageHead.vue'
import { productBySlug } from '@/data/products'
import { solutionBySlug } from '@/data/solutions'

const route = useRoute()
const p = computed(() => productBySlug[route.params.slug])
const related = computed(() => (p.value.related || []).map((s) => solutionBySlug[s]))
const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' }
]
</script>

<template>
  <PageHead :title="p.name" :lede="p.lede" :crumbs="crumbs">
    <p class="plain">{{ p.plain }}</p>
  </PageHead>

  <ContentBands :sections="p.sections" />

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>More</h2></div>
      <div class="measure">
        <ul>
          <li v-if="p.datasheet"><a :href="p.datasheet" target="_blank" rel="noopener">{{ p.name }} data sheet (PDF)</a></li>
          <li v-for="l in p.links" :key="l.href"><a :href="l.href" target="_blank" rel="noopener">{{ l.label }}</a></li>
          <li v-for="r in related" :key="r.slug"><RouterLink :to="`/solutions/${r.slug}`">{{ r.name }}</RouterLink></li>
        </ul>
        <p><RouterLink to="/contact" class="btn">Talk to Secure64 about {{ p.name }}</RouterLink></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.plain {
  margin-top: 14px;
  padding-left: 14px;
  border-left: 3px solid var(--green);
  max-width: 62ch;
}
</style>
