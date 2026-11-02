<script setup>
import PageHead from '@/components/PageHead.vue'
import { solutions } from '@/data/solutions'

const crumbs = [{ label: 'Home', to: '/' }]
const groups = [
  { name: 'By network', items: solutions.filter((s) => s.group === 'network') },
  { name: 'By problem', items: solutions.filter((s) => s.group === 'topic') }
]
</script>

<template>
  <PageHead title="Solutions" lede="Start from the kind of network you run, or from the problem in front of you." :crumbs="crumbs" />

  <section v-for="g in groups" :key="g.name" class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>{{ g.name }}</h2></div>
      <ul class="rows">
        <li v-for="s in g.items" :key="s.slug">
          <RouterLink :to="`/solutions/${s.slug}`" class="rows__name">{{ s.name }}</RouterLink>
          <span>{{ s.short }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
