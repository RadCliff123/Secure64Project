<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <section class="section soon">
    <div class="container">
      <span class="eyebrow">In design</span>
      <h1 class="section-title">This page is next on the build list.</h1>
      <p class="section-lede">
        <code>{{ route.path }}</code> will be part of the new Secure64 site. For now, head back to the homepage.
      </p>
      <RouterLink to="/" class="btn btn--outline">← Back to home</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.soon {
  min-height: 60vh;
}

code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--paper-soft);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
