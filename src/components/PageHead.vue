<script setup>
defineProps({
  title: { type: String, required: true },
  lede: { type: String, default: '' },
  crumbs: { type: Array, default: () => [] }
})
</script>

<template>
  <div class="wrap pagehead">
    <nav v-if="crumbs.length" class="crumbs" aria-label="Breadcrumb">
      <template v-for="c in crumbs" :key="c.to">
        <RouterLink :to="c.to">{{ c.label }}</RouterLink>
        <span aria-hidden="true"> / </span>
      </template>
    </nav>
    <h1>{{ title }}</h1>
    <p v-if="lede" class="lede">{{ lede }}</p>
    <slot />
  </div>
</template>

<style scoped>
.pagehead {
  padding-top: 26px;
  padding-bottom: 30px;
}

.crumbs {
  margin-bottom: 14px;
  font-size: 14px;
  color: var(--ink-2);
}

.crumbs a {
  color: var(--ink-2);
}

h1 {
  max-width: 24ch;
}

.lede {
  margin-top: 14px;
}
</style>
