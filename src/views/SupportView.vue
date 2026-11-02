<script setup>
import PageHead from '@/components/PageHead.vue'
import SubNav from '@/components/SubNav.vue'
import { companyLinks } from '@/data/companyLinks'
import { contact } from '@/data/company'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Company', to: '/company' }
]
</script>

<template>
  <PageHead
    title="Support"
    lede="Premium Maintenance and Support is for organizations that need round-the-clock access to support. Staff help with deployment and product questions, and they troubleshoot software defects."
    :crumbs="crumbs"
  />
  <SubNav :links="companyLinks" />

  <section class="band band--flush">
    <div class="wrap band__grid">
      <div class="band__side"><h2>How to reach support</h2></div>
      <div class="table-scroll">
        <table>
          <thead>
            <tr><th scope="col">Channel</th><th scope="col">Availability</th><th scope="col">Details</th></tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Support website</th>
              <td>7 x 24</td>
              <td>
                Log and review cases, register users, read documentation and search the knowledge base.
                <a :href="contact.login" target="_blank" rel="noopener">Customer login</a>
              </td>
            </tr>
            <tr>
              <th scope="row">Email</th>
              <td>Through the support website</td>
              <td>Every issue goes into the case system, where you can track it.</td>
            </tr>
            <tr>
              <th scope="row">Telephone</th>
              <td>Business hours, under your contract SLA</td>
              <td><a :href="contact.phoneHref">{{ contact.phone }}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Details</h2></div>
      <p class="measure">
        <a href="https://secure64.com/wp-content/uploads/Secure64-Support-V2.pdf" target="_blank" rel="noopener">Support data sheet (PDF)</a>.
        For anything else about maintenance and support, <RouterLink to="/contact">contact a representative</RouterLink>.
      </p>
    </div>
  </section>
</template>
