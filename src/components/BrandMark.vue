<script setup>
// Placeholder wordmark. Swap for Secure64's official logo files once supplied.
defineProps({ light: { type: Boolean, default: true } })
</script>

<template>
  <span class="brand" :class="{ 'brand--dark': !light }">
    <svg width="30" height="32" viewBox="0 0 30 32" aria-hidden="true">
      <path d="M15 1 28 6v9c0 8-5.6 13.6-13 16C7.6 28.6 2 23 2 15V6z" fill="none" stroke="currentColor" stroke-width="2.2" />
      <path d="M9 16.5 13.2 20.5 21.5 11.5" fill="none" stroke="var(--teal-400)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <span class="brand__word">Secure<b>64</b></span>
  </span>
</template>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--on-dark);
}

.brand--dark {
  color: var(--ink);
}

.brand__word {
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.brand__word b {
  color: var(--teal-400);
  font-weight: 800;
}

.brand--dark .brand__word b {
  color: var(--teal-600);
}
</style>
