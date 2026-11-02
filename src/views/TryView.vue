<script setup>
import PageHead from '@/components/PageHead.vue'

const crumbs = [{ label: 'Home', to: '/' }]

const ways = [
  {
    name: 'Request a trial',
    what: 'Fill in the Try Secure64 form on the current site.',
    label: 'Open the form',
    href: 'https://secure64.com/try-secure64/'
  },
  {
    name: 'Check your own traffic',
    what: 'Send a packet capture of your DNS traffic and get a free report on the malicious behavior in it.',
    label: 'Ask for an analysis',
    href: 'https://secure64.com/contact-us/'
  },
  {
    name: 'See LineGUARD reporting',
    what: 'Click through a demo of the advanced reports.',
    label: 'Open the demo',
    href: 'https://app.storylane.io/share/4sljzvydhrzz'
  },
  {
    name: 'Watch the product videos',
    what: 'DNS tunneling in action, Vizion, and Extended DNS Errors in operation.',
    label: 'Watch',
    href: 'https://secure64.com/videos/'
  }
]
</script>

<template>
  <PageHead title="Try Secure64" lede="Four ways to find out whether Secure64 suits your network, starting with the most involved." :crumbs="crumbs" />

  <section class="band band--flush">
    <div class="wrap table-scroll">
      <table>
        <tbody>
          <tr v-for="w in ways" :key="w.name">
            <th scope="row">{{ w.name }}</th>
            <td>{{ w.what }}</td>
            <td class="nowrap"><a :href="w.href" target="_blank" rel="noopener">{{ w.label }}</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
