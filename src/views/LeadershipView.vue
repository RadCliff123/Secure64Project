<script setup>
import PageHead from '@/components/PageHead.vue'
import SubNav from '@/components/SubNav.vue'
import { companyLinks } from '@/data/companyLinks'
import { board, management } from '@/data/company'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/company' }
]
const groups = [
  { name: 'Management', people: management },
  { name: 'Board of directors', people: board }
]
</script>

<template>
  <PageHead title="Leadership" :crumbs="crumbs" />
  <SubNav :links="companyLinks" />

  <section v-for="(g, i) in groups" :key="g.name" class="band" :class="{ 'band--flush': i === 0 }">
    <div class="wrap band__grid">
      <div class="band__side"><h2>{{ g.name }}</h2></div>
      <ul class="rows">
        <li v-for="p in g.people" :key="p.name">
          <div>
            <div class="rows__name">{{ p.name }}</div>
            <div class="note">{{ p.title }}</div>
          </div>
          <span>{{ p.bio }}</span>
        </li>
      </ul>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>In memory</h2></div>
      <div class="measure">
        <p>
          <b>William S. Worley, Jr., Ph.D.</b>, co-founder and Director Emeritus, was the principal inventor of SourceT. He spent
          13 years at IBM and retired from HP in 2002 as an HP Fellow and Chief Scientist, having been principal architect of the
          PA-RISC and PA-Wide Word processor architectures. He is credited with 16 patents. Bill died on December 26, 2020.
        </p>
      </div>
    </div>
  </section>
</template>
