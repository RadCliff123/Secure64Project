<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHead from '@/components/PageHead.vue'

const route = useRoute()
const crumbs = [{ label: 'Home', to: '/' }]
const page = computed(() =>
  route.meta.legal === 'cookies'
    ? { title: 'Cookie policy', href: 'https://secure64.com/cookie-policy-eu/' }
    : { title: 'Privacy policy', href: 'https://secure64.com/privacy-policy' }
)
</script>

<template>
  <PageHead :title="page.title" :crumbs="crumbs">
    <p class="measure">
      Legal text belongs to Secure64, so this concept doesn't reproduce it.
      <a :href="page.href" target="_blank" rel="noopener">Read the official {{ page.title.toLowerCase() }}</a>.
    </p>
    <p class="measure note">
      This concept site has no forms and sets no cookies of its own. It loads its fonts from Google Fonts.
    </p>
  </PageHead>
</template>
