<script setup>
import PageHead from '@/components/PageHead.vue'

const crumbs = [{ label: 'Home', to: '/' }]

const engagements = [
  ['1&1 Drillisch', 'Germany', 'DNS and IPAM for a greenfield 5G network, described as Europe’s largest 5G greenfield start-up'],
  ['A major US carrier', 'United States', 'CI/CD with Ansible for a 125-million-subscriber ISP, later retained as Ansible experts'],
  ['Mavenir', 'Global', 'Kubernetes deployment of the DDI solution on public and private cloud'],
  ['Reliance Jio', 'India', 'Integration with NMS, SIEM and data warehouses'],
  ['Djezzy', 'Algeria', 'Periodic DDI health checks for the country’s largest mobile operator']
]

const skills = [
  ['DNS and DDI', 'DNS, DHCP and IP address management specialists'],
  ['Security', 'SSCP- and CISSP-qualified staff, with alerting on DDoS and malware thresholds'],
  ['Networking', 'BGP, with CCNA and CCNP qualifications'],
  ['Automation', 'CI/CD using Ansible, Puppet and Chef']
]

const managed = [
  ['Configuration and change management', 'Configuration changes tested and carried out for you'],
  ['Security optimization', 'Tuning DNS as a control point for security'],
  ['Performance management', 'Improving DNS performance against agreed KPIs'],
  ['Software upgrades', 'Planning and doing the upgrades'],
  ['Operational governance', 'A DDI expert in your service reviews'],
  ['Extended DNS support', 'Looking into problems in the third-party DNS path that affect your customers']
]
</script>

<template>
  <PageHead
    title="Services"
    lede="Secure64 can help you put its products into your network, or run them for you afterward."
    :crumbs="crumbs"
  />

  <section id="professional" class="band">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>Professional services</h2>
        <p>Design, build and skills transfer for DNS and DDI projects.</p>
      </div>
      <div>
        <div class="measure">
          <ul>
            <li>Security and performance design, high level and low level</li>
            <li>Deployment on any platform, with a DNS or DDI expert assigned as project manager</li>
            <li>Integration with your existing infrastructure</li>
            <li>End-to-end testing and training for your team</li>
          </ul>
        </div>

        <div class="table-scroll block">
          <table>
            <caption>Example engagements</caption>
            <thead>
              <tr><th scope="col">Customer</th><th scope="col">Where</th><th scope="col">Work</th></tr>
            </thead>
            <tbody>
              <tr v-for="e in engagements" :key="e[0]">
                <th scope="row" class="nowrap">{{ e[0] }}</th>
                <td class="nowrap">{{ e[1] }}</td>
                <td>{{ e[2] }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="table-scroll block">
          <table>
            <caption>Skills on the team</caption>
            <tbody>
              <tr v-for="s in skills" :key="s[0]">
                <th scope="row" class="nowrap">{{ s[0] }}</th>
                <td>{{ s[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section id="managed" class="band">
    <div class="wrap band__grid">
      <div class="band__side">
        <h2>Managed services</h2>
        <p>Secure64 runs your DNS and DDI day to day.</p>
      </div>
      <div class="table-scroll">
        <table>
          <tbody>
            <tr v-for="m in managed" :key="m[0]">
              <th scope="row">{{ m[0] }}</th>
              <td>{{ m[1] }}</td>
            </tr>
          </tbody>
        </table>
        <p class="block"><RouterLink to="/contact" class="btn">Talk to Secure64</RouterLink></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.block {
  margin-top: 26px;
}
</style>
