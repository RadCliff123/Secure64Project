<script setup>
defineProps({ links: { type: Array, required: true } })
</script>

<template>
  <div class="wrap">
    <nav class="subnav" aria-label="In this section">
      <RouterLink v-for="l in links" :key="l.to" :to="l.to" exact-active-class="is-here">{{ l.label }}</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.subnav {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 22px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--rule);
  font-family: var(--head);
  font-size: 18px;
}

.subnav a {
  text-decoration: none;
  padding-bottom: 8px;
  margin-bottom: -9px;
}

.subnav a:hover {
  text-decoration: underline;
}

.subnav .is-here {
  border-bottom: 3px solid var(--green);
  font-weight: 600;
}
</style>
