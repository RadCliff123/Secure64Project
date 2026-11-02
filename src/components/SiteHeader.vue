<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Wordmark from './Wordmark.vue'
import { menus } from '@/data/nav'
import { contact } from '@/data/company'

const openMenu = ref(null)
const mobileOpen = ref(false)
const root = ref(null)
const route = useRoute()

function closeAll() {
  openMenu.value = null
  mobileOpen.value = false
}

function onDocClick(e) {
  if (root.value && !root.value.contains(e.target)) openMenu.value = null
}

function onKey(e) {
  if (e.key === 'Escape') openMenu.value = null
}

watch(() => route.fullPath, closeAll)
onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <header ref="root" class="head">
    <div class="util">
      <div class="wrap util__in">
        <a :href="contact.phoneHref">{{ contact.phone }}</a>
        <span class="util__right">
          <a :href="contact.login" target="_blank" rel="noopener">Customer login</a>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/under-attack" class="util__alert">Under attack?</RouterLink>
        </span>
      </div>
    </div>

    <div class="wrap main">
      <RouterLink to="/" class="main__brand" aria-label="Secure64 home"><Wordmark /></RouterLink>

      <button class="main__toggle" :aria-expanded="mobileOpen" aria-controls="site-nav" @click="mobileOpen = !mobileOpen">
        {{ mobileOpen ? 'Close' : 'Menu' }}
      </button>

      <nav id="site-nav" class="nav" :class="{ 'is-open': mobileOpen }" aria-label="Main">
        <div v-for="m in menus" :key="m.label" class="nav__item">
          <button
            class="nav__btn"
            :aria-expanded="openMenu === m.label"
            @click="openMenu = openMenu === m.label ? null : m.label"
          >
            {{ m.label }}<span class="nav__caret" aria-hidden="true"></span>
          </button>
          <div v-show="openMenu === m.label" class="panel" :class="{ 'panel--wide': m.wide }">
            <div v-for="(g, i) in m.groups" :key="i" class="panel__group">
              <p v-if="g.name" class="panel__name">{{ g.name }}</p>
              <RouterLink v-for="l in g.links" :key="l.to" :to="l.to" class="panel__link" @click="closeAll">{{ l.label }}</RouterLink>
            </div>
            <RouterLink v-if="m.all" :to="m.all.to" class="panel__all" @click="closeAll">{{ m.all.label }}</RouterLink>
          </div>
        </div>
        <RouterLink to="/try" class="btn nav__try">Try Secure64</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.head {
  border-bottom: 3px solid var(--green);
  background: #fff;
}

.util {
  background: var(--navy);
  font-size: 13.5px;
}

.util a {
  color: #fff;
  text-decoration: none;
}

.util a:hover {
  text-decoration: underline;
}

.util__in {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.util__right {
  display: flex;
  gap: 18px;
}

.util .util__alert {
  color: var(--gold);
  font-weight: 600;
}

.main {
  display: flex;
  align-items: center;
  gap: 24px;
  min-height: 66px;
}

.main__brand {
  text-decoration: none;
  margin-right: auto;
}

.main__toggle {
  display: none;
  padding: 6px 12px;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 2px;
  font: inherit;
  color: var(--navy);
  cursor: pointer;
}

.nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav__item {
  position: relative;
}

.nav__btn {
  padding: 8px 10px;
  background: none;
  border: 0;
  font-family: var(--head);
  font-size: 18.5px;
  font-weight: 500;
  color: var(--navy);
  cursor: pointer;
}

.nav__btn:hover,
.nav__btn[aria-expanded='true'] {
  color: var(--green-text);
}

.nav__caret {
  display: inline-block;
  margin-left: 6px;
  vertical-align: 3px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentColor;
}

.nav__try {
  margin-left: 10px;
  padding: 7px 14px;
  white-space: nowrap;
}

.panel {
  position: absolute;
  z-index: 20;
  top: 100%;
  left: 0;
  min-width: 220px;
  padding: 12px 16px;
  background: #fff;
  border: 1px solid var(--rule);
  border-top: 2px solid var(--navy);
}

.panel--wide {
  display: grid;
  grid-template-columns: repeat(2, 230px);
  gap: 12px 24px;
}

.panel__name {
  margin: 0 0 4px;
  font-size: 13.5px;
  color: var(--ink-2);
}

.panel__group {
  margin-bottom: 4px;
}

.panel__link {
  display: block;
  padding: 3px 0;
  text-decoration: none;
  font-size: 15.5px;
}

.panel__link:hover {
  text-decoration: underline;
}

.panel__all {
  grid-column: 1 / -1;
  padding-top: 8px;
  border-top: 1px solid var(--rule-light);
  font-size: 14.5px;
}

@media (max-width: 1020px) {
  .main {
    flex-wrap: wrap;
  }

  .main__toggle {
    display: block;
  }

  .nav {
    display: none;
    flex-basis: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding-bottom: 14px;
  }

  .nav.is-open {
    display: flex;
  }

  .nav__item {
    border-top: 1px solid var(--rule-light);
  }

  .nav__btn {
    width: 100%;
    padding: 11px 0;
    text-align: left;
  }

  .panel {
    position: static;
    padding: 0 0 12px 12px;
    border: 0;
  }

  .panel--wide {
    display: block;
  }

  .panel__group {
    margin-bottom: 12px;
  }

  .panel__link {
    padding: 6px 0;
  }

  .panel__all {
    display: block;
  }

  .nav__try {
    margin: 12px 0 0;
    text-align: center;
  }
}

@media (max-width: 460px) {
  .util__in > a {
    display: none;
  }

  .util__right {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
