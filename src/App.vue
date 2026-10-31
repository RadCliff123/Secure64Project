<script setup>
import ConceptBanner from './components/ConceptBanner.vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <ConceptBanner />
  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
