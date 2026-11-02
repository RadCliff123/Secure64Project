<script setup>
// Typeset stand-in. Swap for the official logo file once Secure64 supplies it.
defineProps({ reversed: { type: Boolean, default: false } })
</script>

<template>
  <span class="mark" :class="{ 'mark--reversed': reversed }">SECURE6<i>4</i></span>
</template>

<style scoped>
.mark {
  font-family: var(--head);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1;
  color: var(--navy);
}

.mark i {
  font-style: normal;
  color: var(--green);
}

.mark--reversed {
  color: #fff;
}
</style>
