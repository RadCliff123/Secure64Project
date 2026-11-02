<script setup>
import PageHead from '@/components/PageHead.vue'
</script>

<template>
  <PageHead title="Page not found" lede="That address doesn't match anything on this site.">
    <p><RouterLink to="/">Go to the homepage</RouterLink> or <RouterLink to="/products">see the products</RouterLink>.</p>
  </PageHead>
</template>
