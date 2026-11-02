<script setup>
import PageHead from '@/components/PageHead.vue'
import { contact } from '@/data/company'

const crumbs = [{ label: 'Home', to: '/' }]
</script>

<template>
  <PageHead title="Contact" :crumbs="crumbs" />

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Sales and general</h2></div>
      <div class="measure">
        <p class="big"><a :href="contact.phoneHref">{{ contact.phone }}</a></p>
        <p>Or use the contact form on the current Secure64 site.</p>
        <p><a href="https://secure64.com/contact-us/" target="_blank" rel="noopener" class="btn">Open the contact form</a></p>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Existing customers</h2></div>
      <p class="measure">
        Log a case through the <a :href="contact.login" target="_blank" rel="noopener">customer portal</a>, or see
        <RouterLink to="/company/support">how support works</RouterLink>.
      </p>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Office</h2></div>
      <div class="table-scroll">
        <table>
          <tbody>
            <tr><th scope="row">Address</th><td>Secure64 Software Corporation, {{ contact.address.join(', ') }}</td></tr>
            <tr><th scope="row">Telephone</th><td>{{ contact.phone }}</td></tr>
            <tr><th scope="row">Fax</th><td>{{ contact.fax }}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.big {
  font-family: var(--head);
  font-size: 34px;
  font-weight: 600;
}

.big a {
  text-decoration: none;
}
</style>
