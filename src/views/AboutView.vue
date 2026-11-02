<script setup>
import PageHead from '@/components/PageHead.vue'
import SubNav from '@/components/SubNav.vue'
import { companyLinks } from '@/data/companyLinks'
import { customers, history } from '@/data/company'

const crumbs = [{ label: 'Home', to: '/' }]
</script>

<template>
  <PageHead
    title="About Secure64"
    lede="Secure64 is a privately held software company in Fort Collins, Colorado. It has worked on DNS for about 20 years, and its products now run on every continent."
    :crumbs="crumbs"
  />
  <SubNav :links="companyLinks" />

  <section class="band band--flush">
    <div class="wrap band__grid">
      <div class="band__side"><h2>History</h2></div>
      <div class="table-scroll">
        <table class="hist">
          <tbody>
            <tr v-for="h in history" :key="h[0]">
              <th scope="row">{{ h[0] }}</th>
              <td>{{ h[1] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Customers</h2></div>
      <div class="measure">
        <p>{{ customers.join(', ') }}.</p>
        <p>
          Customers also named in Secure64 announcements include Ooredoo Qatar, Sunrise in Switzerland, ePLDT in the Philippines
          and Djezzy in Algeria.
        </p>
      </div>
    </div>
  </section>

  <section class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>Headquarters</h2></div>
      <div class="measure">
        <p>2900 S College Ave. #2A, Fort Collins, Colorado 80525. <RouterLink to="/contact">Contact details</RouterLink></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hist th {
  font-family: var(--head);
  font-size: 21px;
  color: var(--navy);
  width: 70px;
}
</style>
