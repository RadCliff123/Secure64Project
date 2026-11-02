<script setup>
import PageHead from '@/components/PageHead.vue'
import { productBySlug, productGroups } from '@/data/products'

const crumbs = [{ label: 'Home', to: '/' }]
</script>

<template>
  <PageHead
    title="Products"
    lede="Nine products, sorted by the job each one does on a network. If you're not sure where to start, the DNS explained page covers the vocabulary."
    :crumbs="crumbs"
  >
    <p><RouterLink to="/resources/dns-explained">DNS explained</RouterLink></p>
  </PageHead>

  <section v-for="g in productGroups" :key="g.name" class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>{{ g.name }}</h2></div>
      <ul class="rows">
        <li v-for="s in g.slugs" :key="s">
          <RouterLink :to="`/products/${s}`" class="rows__name">{{ productBySlug[s].name }}</RouterLink>
          <span>{{ productBySlug[s].short }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
