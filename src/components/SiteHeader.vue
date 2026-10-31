<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BrandMark from './BrandMark.vue'

const links = [
  { label: 'Solutions', to: '/#audiences' },
  { label: 'Products', to: '/#products' },
  { label: 'Why Secure64', to: '/#proof' },
  { label: 'Resources', to: '/resources' },
  { label: 'Company', to: '/company' }
]

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <RouterLink to="/" class="header__brand" aria-label="Secure64 home">
        <BrandMark />
      </RouterLink>

      <button
        class="header__toggle"
        :aria-expanded="open"
        aria-controls="primary-nav"
        @click="open = !open"
      >
        <span class="sr-only">Menu</span>
        <span class="header__bars" :class="{ 'is-open': open }"></span>
      </button>

      <nav id="primary-nav" class="header__nav" :class="{ 'is-open': open }">
        <RouterLink v-for="l in links" :key="l.label" :to="l.to" class="header__link">
          {{ l.label }}
        </RouterLink>
        <div class="header__actions">
          <RouterLink to="/under-attack" class="header__alert">
            <span class="header__pulse" aria-hidden="true"></span>Under attack?
          </RouterLink>
          <RouterLink to="/demo" class="btn btn--primary header__cta">Book a demo</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(5, 13, 24, 0.86);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--on-dark);
}

.header__inner {
  display: flex;
  align-items: center;
  height: 72px;
  gap: 24px;
}

.header__brand {
  text-decoration: none;
  margin-right: auto;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

.header__link,
.header__alert,
.header__cta {
  white-space: nowrap;
}

.header__link {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: var(--on-dark-soft);
  transition: color 0.15s;
}

.header__link:hover {
  color: var(--on-dark);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: 12px;
}

.header__alert {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #ffb3b5;
  text-decoration: none;
}

.header__pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--danger);
  box-shadow: 0 0 0 0 rgba(255, 90, 95, 0.6);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  70% {
    box-shadow: 0 0 0 8px rgba(255, 90, 95, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 90, 95, 0);
  }
}

.header__cta {
  padding: 10px 18px;
  font-size: 15px;
}

.header__toggle {
  display: none;
  width: 44px;
  height: 44px;
  background: none;
  border: 0;
  cursor: pointer;
  position: relative;
}

.header__bars,
.header__bars::before,
.header__bars::after {
  position: absolute;
  left: 11px;
  width: 22px;
  height: 2px;
  background: var(--on-dark);
  transition: transform 0.2s, opacity 0.2s;
}

.header__bars {
  top: 21px;
}

.header__bars::before,
.header__bars::after {
  content: '';
  left: 0;
}

.header__bars::before {
  top: -7px;
}

.header__bars::after {
  top: 7px;
}

.header__bars.is-open {
  background: transparent;
}

.header__bars.is-open::before {
  transform: translateY(7px) rotate(45deg);
}

.header__bars.is-open::after {
  transform: translateY(-7px) rotate(-45deg);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}

@media (max-width: 1100px) {
  .header__toggle {
    display: block;
  }

  .header__nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 8px var(--gutter) 24px;
    background: var(--navy-950);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    display: none;
  }

  .header__nav.is-open {
    display: flex;
  }

  .header__link {
    padding: 14px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    font-size: 17px;
  }

  .header__actions {
    margin: 20px 0 0;
    justify-content: space-between;
  }
}
</style>
