<script setup>
import BrandMark from './BrandMark.vue'

const columns = [
  {
    title: 'Solutions',
    links: [
      ['Carriers & ISPs', '/solutions/carriers'],
      ['Enterprise & government', '/solutions/enterprise'],
      ['Schools & libraries', '/solutions/education'],
      ['DDoS defense', '/solutions/ddos'],
      ['DNSSEC', '/solutions/dnssec']
    ]
  },
  {
    title: 'Products',
    links: [
      ['LineGUARD', '/products/lineguard'],
      ['DNS Cache', '/products/dns-cache'],
      ['DNS Authority', '/products/dns-authority'],
      ['DNS Signer', '/products/dns-signer'],
      ['DNS Manager', '/products/dns-manager']
    ]
  },
  {
    title: 'Resources',
    links: [
      ['Case studies', '/resources/case-studies'],
      ['White papers', '/resources/white-papers'],
      ['Datasheets', '/resources/datasheets'],
      ['Blog', '/blog'],
      ['DNS explained', '/resources/dns-explained']
    ]
  },
  {
    title: 'Company',
    links: [
      ['About', '/company'],
      ['Leadership', '/company/leadership'],
      ['Partners', '/company/partners'],
      ['Careers', '/careers'],
      ['Contact', '/contact']
    ]
  }
]

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <BrandMark />
          <p>Protective DNS and DDI for carriers, enterprises and public networks. Fort Collins, Colorado.</p>
          <a href="tel:+13032425890" class="footer__phone">+1 303 242 5890</a>
        </div>
        <nav v-for="col in columns" :key="col.title" class="footer__col" :aria-label="col.title">
          <h4>{{ col.title }}</h4>
          <RouterLink v-for="[label, to] in col.links" :key="label" :to="to">{{ label }}</RouterLink>
        </nav>
      </div>
      <div class="footer__bottom">
        <span>© {{ year }} Secure64 Software Corporation</span>
        <span class="footer__legal">
          <RouterLink to="/privacy">Privacy</RouterLink>
          <RouterLink to="/cookies">Cookies</RouterLink>
          <a href="https://www.linkedin.com/company/secure64-software/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://x.com/Secure_64" target="_blank" rel="noopener">X</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--navy-950);
  color: var(--on-dark-soft);
  padding: 72px 0 32px;
  font-size: 15px;
}

.footer__top {
  display: grid;
  grid-template-columns: 1.6fr repeat(4, 1fr);
  gap: 32px;
}

.footer__brand p {
  margin: 16px 0 12px;
  max-width: 32ch;
}

.footer__phone {
  color: var(--on-dark);
  font-weight: 600;
  text-decoration: none;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__col h4 {
  color: var(--on-dark);
  font-size: 14px;
  margin-bottom: 4px;
}

.footer a {
  text-decoration: none;
  transition: color 0.15s;
}

.footer__col a:hover,
.footer__legal a:hover {
  color: var(--teal-400);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 14px;
}

.footer__legal {
  display: flex;
  gap: 20px;
}

@media (max-width: 900px) {
  .footer__top {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}
</style>
