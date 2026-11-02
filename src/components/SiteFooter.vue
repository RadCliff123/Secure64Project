<script setup>
import Wordmark from './Wordmark.vue'
import { menus } from '@/data/nav'
import { contact } from '@/data/company'

const columns = menus.filter((m) => ['Services', 'Resources', 'News', 'Company'].includes(m.label))
const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot">
    <div class="wrap foot__top">
      <div class="foot__id">
        <Wordmark reversed />
        <p>
          Secure64 Software Corporation<br />
          {{ contact.address[0] }}<br />
          {{ contact.address[1] }}
        </p>
        <p>
          Tel <a :href="contact.phoneHref">{{ contact.phone }}</a><br />
          Fax {{ contact.fax }}
        </p>
      </div>
      <nav v-for="c in columns" :key="c.label" class="foot__col" :aria-label="c.label">
        <h2>{{ c.label }}</h2>
        <template v-for="g in c.groups" :key="g.name">
          <RouterLink v-for="l in g.links" :key="l.to" :to="l.to">{{ l.label }}</RouterLink>
        </template>
      </nav>
    </div>
    <div class="wrap foot__end">
      <span>&copy; {{ year }} Secure64. Concept redesign, not the official site.</span>
      <span class="foot__legal">
        <RouterLink to="/privacy">Privacy</RouterLink>
        <RouterLink to="/cookies">Cookies</RouterLink>
        <a :href="contact.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a :href="contact.x" target="_blank" rel="noopener">X</a>
      </span>
    </div>
  </footer>
</template>

<style scoped>
.foot {
  margin-top: 56px;
  padding: 40px 0 20px;
  background: var(--navy);
  color: #d5dce6;
  font-size: 14.5px;
}

.foot a {
  color: #fff;
  text-decoration: none;
}

.foot a:hover {
  text-decoration: underline;
}

.foot__top {
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 28px;
}

.foot__id p {
  margin: 12px 0 0;
}

.foot h2 {
  margin-bottom: 8px;
  font-size: 17px;
  color: #fff;
}

.foot__col a {
  display: block;
  padding: 2px 0;
}

.foot__end {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  margin-top: 32px;
  padding-top: 14px;
  font-size: 13.5px;
}

.foot__legal {
  display: flex;
  gap: 16px;
}

@media (max-width: 820px) {
  .foot__top {
    grid-template-columns: repeat(2, 1fr);
  }

  .foot__id {
    grid-column: 1 / -1;
  }
}
</style>
