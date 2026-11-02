<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ContentBands from '@/components/ContentBands.vue'
import PageHead from '@/components/PageHead.vue'
import { productBySlug } from '@/data/products'
import { solutionBySlug } from '@/data/solutions'

const route = useRoute()
const s = computed(() => solutionBySlug[route.params.slug])
const items = computed(() => s.value.products.map((slug) => productBySlug[slug]))
const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' }
]
</script>

<template>
  <PageHead :title="s.name" :lede="s.lede" :crumbs="crumbs" />

  <ContentBands :sections="s.sections" />

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>Products used</h2>
      </div>
      <div>
        <ul class="rows">
          <li v-for="p in items" :key="p.slug">
            <RouterLink :to="`/products/${p.slug}`" class="rows__name">{{ p.name }}</RouterLink>
            <span>{{ p.short }}</span>
          </li>
        </ul>
        <p v-if="s.whitepaper" class="more"><a :href="s.whitepaper.href" target="_blank" rel="noopener">{{ s.whitepaper.label }}</a></p>
        <p v-if="s.datasheet" class="more"><a :href="s.datasheet" target="_blank" rel="noopener">ENUM solution brochure (PDF)</a></p>
        <p class="more"><RouterLink to="/contact" class="btn">Talk to Secure64</RouterLink></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.more {
  margin-top: 16px;
}
</style>
