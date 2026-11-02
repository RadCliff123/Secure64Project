<script setup>
import PageHead from '@/components/PageHead.vue'
import SubNav from '@/components/SubNav.vue'
import { companyLinks } from '@/data/companyLinks'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/company' }
]
</script>

<template>
  <PageHead title="Careers" :crumbs="crumbs" />
  <SubNav :links="companyLinks" />

  <section class="band band--flush">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Open roles</h2></div>
      <div>
        <ul class="rows">
          <li>
            <span class="rows__name">Senior IT Operations Engineer</span>
            <a href="https://secure64.com/careers/" target="_blank" rel="noopener">Apply on secure64.com</a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Good to know</h2></div>
      <div class="measure">
        <p>Employment depends on a background check and signing a proprietary inventions agreement. Secure64 is an Equal Opportunity Employer.</p>
        <p>Secure64 doesn't accept candidates submitted by recruiters it has no signed agreement with, and won't pay fees for them.</p>
      </div>
    </div>
  </section>
</template>
