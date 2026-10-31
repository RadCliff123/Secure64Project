<script setup>
import DnsLookupDemo from '@/components/DnsLookupDemo.vue'
import { audiences, credentials, customers, productGroups, proofPoints, steps } from '@/data/site'
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="hero__grid-bg" aria-hidden="true"></div>
    <div class="container hero__inner">
      <div class="hero__copy">
        <span class="eyebrow">Protective DNS · Carrier-grade DDI</span>
        <h1 class="hero__title">Every attack starts with a lookup. <span>We stop it there.</span></h1>
        <p class="hero__lede">
          Secure64 blocks phishing, malware and botnets at the DNS layer, before any device connects.
          It protects the networks of the world’s largest carriers and the 1.5 billion people who use them.
        </p>
        <div class="hero__actions">
          <RouterLink to="/demo" class="btn btn--primary">Book a demo</RouterLink>
          <a href="#how-it-works" class="btn btn--ghost">How it works</a>
        </div>
        <ul class="hero__creds">
          <li v-for="c in credentials" :key="c.name">
            <strong>{{ c.name }}</strong><span>{{ c.detail }}</span>
          </li>
        </ul>
      </div>
      <DnsLookupDemo class="hero__demo" />
    </div>
  </section>

  <!-- Customer logos -->
  <section id="proof" class="logos" aria-label="Trusted by">
    <div class="container">
      <p class="logos__label">Trusted by carriers and operators worldwide</p>
    </div>
    <div class="logos__track">
      <ul class="logos__row">
        <li v-for="(name, i) in [...customers, ...customers]" :key="i" :aria-hidden="i >= customers.length">{{ name }}</li>
      </ul>
    </div>
  </section>

  <!-- How it works -->
  <section id="how-it-works" class="section">
    <div class="container">
      <span class="eyebrow">How Protective DNS works</span>
      <h2 class="section-title">The simplest place to stop a threat is before it starts.</h2>
      <p class="section-lede">
        No agents to install and no traffic to reroute. Protection happens at the one step every device
        already takes: looking up where to go.
      </p>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title" class="step">
          <span class="step__num">0{{ i + 1 }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.body }}</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- Audiences -->
  <section id="audiences" class="section section--soft">
    <div class="container">
      <span class="eyebrow">Solutions</span>
      <h2 class="section-title">Built for the networks you run.</h2>
      <div class="audiences">
        <article v-for="a in audiences" :key="a.id" class="audience">
          <span class="audience__tag">{{ a.eyebrow }}</span>
          <h3>{{ a.title }}</h3>
          <p>{{ a.body }}</p>
          <ul>
            <li v-for="p in a.points" :key="p">{{ p }}</li>
          </ul>
          <RouterLink :to="a.to" class="audience__link">{{ a.cta }} →</RouterLink>
        </article>
      </div>
    </div>
  </section>

  <!-- Numbers -->
  <section class="section section--dark numbers">
    <div class="container">
      <div class="numbers__grid">
        <div v-for="p in proofPoints" :key="p.label" class="numbers__item">
          <strong>{{ p.stat }}</strong>
          <span>{{ p.label }}</span>
        </div>
      </div>
      <div class="callout">
        <div>
          <span class="eyebrow">Different by design</span>
          <h2>Our code. Not someone else’s vulnerabilities.</h2>
        </div>
        <p>
          Most DNS products are built on BIND, the same open-source software, so one bug can hit them all
          at once. Secure64 wrote its DNS from scratch and runs it on a hardened operating system.
          When the next BIND flaw lands, your network isn’t part of the blast radius.
        </p>
      </div>
    </div>
  </section>

  <!-- Products -->
  <section id="products" class="section">
    <div class="container">
      <span class="eyebrow">Products</span>
      <h2 class="section-title">One platform for the whole DNS lifecycle.</h2>
      <div class="products">
        <div v-for="g in productGroups" :key="g.job" class="product-group">
          <h3 class="product-group__job">{{ g.job }}</h3>
          <p class="product-group__summary">{{ g.summary }}</p>
          <RouterLink v-for="p in g.products" :key="p.name" :to="p.to" class="product">
            <strong>{{ p.name }}</strong>
            <span>{{ p.body }}</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta">
    <div class="container cta__inner">
      <div>
        <h2>See what your network is letting through.</h2>
        <p>Run Secure64 alongside your current DNS and get a report of the threats it would have stopped.</p>
      </div>
      <div class="cta__actions">
        <RouterLink to="/demo" class="btn btn--primary">Book a demo</RouterLink>
        <RouterLink to="/try" class="btn btn--ghost">Try Secure64</RouterLink>
      </div>
    </div>
    <div class="container">
      <p class="cta__urgent">
        <span aria-hidden="true">●</span> Under attack right now? Call
        <a href="tel:+13032425890">+1 303 242 5890</a>, 24/7.
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Hero */
.hero {
  position: relative;
  overflow: hidden;
  background: radial-gradient(1200px 600px at 75% 20%, rgba(20, 200, 184, 0.14), transparent 60%),
    var(--navy-950);
  color: var(--on-dark);
  padding: clamp(48px, 7vw, 96px) 0 clamp(56px, 8vw, 104px);
}

.hero__grid-bg {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(180deg, #000 30%, transparent 95%);
}

.hero__inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
}

.hero .eyebrow {
  color: var(--teal-400);
}

.hero__title {
  font-size: clamp(38px, 5.4vw, 64px);
  font-weight: 800;
  letter-spacing: -0.035em;
}

.hero__title span {
  color: var(--teal-400);
}

.hero__lede {
  font-size: 19px;
  color: var(--on-dark-soft);
  max-width: 52ch;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 28px 0 36px;
}

.hero__creds {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 18px;
  justify-content: start;
}

.hero__creds li {
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  border-left: 2px solid rgba(46, 230, 214, 0.35);
}

.hero__creds strong {
  font-size: 14px;
}

.hero__creds span {
  font-size: 12px;
  color: var(--on-dark-soft);
}

/* Logos */
.logos {
  background: var(--navy-900);
  color: var(--on-dark-soft);
  padding: 28px 0 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.logos__label {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 18px;
}

.logos__track {
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.logos__row {
  display: flex;
  gap: 56px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: max-content;
  animation: marquee 40s linear infinite;
}

.logos__row li {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: rgba(232, 241, 248, 0.6);
  white-space: nowrap;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

/* Steps */
.steps {
  list-style: none;
  padding: 0;
  margin: 48px 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  counter-reset: none;
}

.step {
  padding: 28px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: var(--paper);
}

.step__num {
  font-family: var(--font-mono);
  color: var(--teal-600);
  font-size: 14px;
  display: block;
  margin-bottom: 18px;
}

.step h3 {
  font-size: 21px;
}

.step p {
  color: var(--ink-soft);
  margin: 0;
}

/* Audiences */
.audiences {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.audience {
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: var(--paper);
  border-radius: var(--radius);
  border: 1px solid var(--line);
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}

.audience:hover {
  border-color: var(--teal-500);
  transform: translateY(-3px);
  box-shadow: 0 18px 40px rgba(13, 27, 42, 0.08);
}

.audience__tag {
  font-family: var(--font-mono);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--teal-600);
  margin-bottom: 12px;
}

.audience h3 {
  font-size: 23px;
}

.audience p {
  color: var(--ink-soft);
}

.audience ul {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
}

.audience li {
  position: relative;
  padding-left: 24px;
  margin-bottom: 8px;
  font-size: 15px;
}

.audience li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 7px;
  width: 10px;
  height: 6px;
  border-left: 2px solid var(--teal-600);
  border-bottom: 2px solid var(--teal-600);
  transform: rotate(-45deg);
}

.audience__link {
  margin-top: auto;
  font-weight: 600;
  color: var(--teal-600);
  text-decoration: none;
}

/* Numbers */
.numbers__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.numbers__item strong {
  display: block;
  font-size: clamp(36px, 4.5vw, 56px);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--teal-400);
}

.numbers__item span {
  color: var(--on-dark-soft);
  font-size: 15px;
}

.callout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 40px;
  padding-top: 56px;
  align-items: start;
}

.callout h2 {
  font-size: clamp(28px, 3.4vw, 38px);
  font-weight: 800;
}

.callout p {
  color: var(--on-dark-soft);
  font-size: 18px;
}

/* Products */
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.product-group__job {
  font-size: 15px;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--teal-600);
  margin-bottom: 6px;
}

.product-group__summary {
  font-size: 15px;
  color: var(--ink-soft);
  min-height: 48px;
}

.product {
  display: block;
  padding: 18px;
  margin-bottom: 12px;
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}

.product:hover {
  border-color: var(--teal-500);
  background: var(--paper-soft);
}

.product strong {
  display: block;
  font-size: 17px;
  margin-bottom: 4px;
}

.product span {
  font-size: 14px;
  color: var(--ink-soft);
  line-height: 1.5;
}

/* CTA */
.cta {
  background: linear-gradient(135deg, var(--navy-800), var(--navy-950));
  color: var(--on-dark);
  padding: clamp(56px, 8vw, 96px) 0 40px;
}

.cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.cta h2 {
  font-size: clamp(28px, 3.6vw, 42px);
  font-weight: 800;
  max-width: 20ch;
}

.cta p {
  color: var(--on-dark-soft);
  max-width: 52ch;
  margin: 0;
}

.cta__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.cta__urgent {
  margin: 48px 0 0;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 15px;
  color: var(--on-dark-soft);
}

.cta__urgent span {
  color: var(--danger);
  margin-right: 6px;
}

.cta__urgent a {
  color: var(--on-dark);
  font-weight: 600;
}

/* Responsive */
@media (max-width: 1024px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero__creds {
    grid-template-columns: repeat(2, auto);
  }
}

@media (max-width: 900px) {
  .hero__inner,
  .callout {
    grid-template-columns: 1fr;
  }

  .steps,
  .audiences {
    grid-template-columns: 1fr;
  }

  .numbers__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .products {
    grid-template-columns: 1fr;
  }

  .product-group__summary {
    min-height: 0;
  }
}
</style>
