<script setup>
import PageHead from '@/components/PageHead.vue'
import SubNav from '@/components/SubNav.vue'
import { companyLinks } from '@/data/companyLinks'
import { partners } from '@/data/company'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/company' }
]
const named = partners.filter((p) => p.note)
const others = partners.filter((p) => !p.note).map((p) => p.name)
</script>

<template>
  <PageHead
    title="Partners"
    lede="Partners help Secure64 sell and support its DNS products around the world."
    :crumbs="crumbs"
  />
  <SubNav :links="companyLinks" />

  <section class="band band--flush">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Recent work together</h2></div>
      <ul class="rows">
        <li v-for="p in named" :key="p.name">
          <span class="rows__name">{{ p.name }}</span>
          <span>{{ p.note }}</span>
        </li>
      </ul>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Also</h2></div>
      <p class="measure">{{ others.join(', ') }}.</p>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Already a partner?</h2></div>
      <p class="measure">Training materials, reseller documents and deal registration are on the <RouterLink to="/resources#partners">resources page</RouterLink>.</p>
    </div>
  </section>
</template>
