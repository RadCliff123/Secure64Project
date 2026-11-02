<script setup>
import { contact } from '@/data/company'
</script>

<template>
  <section class="alarm">
    <div class="wrap">
      <h1>Under attack?</h1>
      <p class="alarm__call">Call <a :href="contact.phoneHref">{{ contact.phone }}</a></p>
      <p>Or send the details through the form on the current Secure64 site.</p>
      <p><a href="https://secure64.com/under-attack/" target="_blank" rel="noopener" class="alarm__btn">Open the Under Attack form</a></p>
    </div>
  </section>

  <section class="band band--flush">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Once things are calm</h2></div>
      <ul class="measure">
        <li><RouterLink to="/solutions/ddos">The six levels of DDoS protection in Secure64 DNS</RouterLink></li>
        <li><a href="https://secure64.com/white_papers/surviving-dns-ddos-attacks/" target="_blank" rel="noopener">Surviving DNS DDoS Attacks (white paper)</a></li>
        <li><a href="https://secure64.com/white_papers/death-by-a-thousand-paper-cuts/" target="_blank" rel="noopener">Death by a Thousand Paper Cuts (white paper)</a></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.alarm {
  padding: 36px 0 40px;
  background: var(--red);
  color: #fff;
}

.alarm h1 {
  color: #fff;
}

.alarm__call {
  margin: 12px 0 18px;
  font-family: var(--head);
  font-size: clamp(30px, 5vw, 46px);
  font-weight: 600;
  line-height: 1.1;
}

.alarm__call a {
  color: #fff;
}

.alarm__btn {
  display: inline-block;
  margin-top: 4px;
  padding: 10px 18px;
  background: #fff;
  border-radius: 2px;
  font-family: var(--head);
  font-size: 18px;
  font-weight: 600;
  color: var(--red);
  text-decoration: none;
}
</style>
