<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// A looping, plain-language demo of Protective DNS:
// a device asks for a site, Secure64 checks it, safe sites resolve, threats are blocked.
const queries = [
  { domain: 'yourbank.com', safe: true },
  { domain: 'paypa1-login.xyz', safe: false, threat: 'Phishing' },
  { domain: 'netflix.com', safe: true },
  { domain: 'free-giftcard.top', safe: false, threat: 'Malware' },
  { domain: 'school-portal.edu', safe: true },
  { domain: 'c2.botnet-relay.ru', safe: false, threat: 'Botnet' }
]

const nodes = {
  device: { x: 70, y: 190 },
  resolver: { x: 320, y: 190 },
  safe: { x: 568, y: 98 },
  threat: { x: 568, y: 282 }
}

const index = ref(0)
const phase = ref('ask') // ask -> check -> resolve
const blocked = ref(0)
const log = ref([])

const current = computed(() => queries[index.value])

const packet = computed(() => {
  if (phase.value === 'ask') return nodes.device
  if (phase.value === 'check') return nodes.resolver
  return current.value.safe ? nodes.safe : nodes.resolver
})

const caption = computed(() => {
  const q = current.value
  if (phase.value === 'ask') return `A phone asks: "Where is ${q.domain}?"`
  if (phase.value === 'check') return 'Secure64 checks the name against live threat intelligence…'
  return q.safe
    ? 'Safe. The address is returned and the page loads in milliseconds.'
    : `${q.threat} site. Blocked before the phone ever connects.`
})

const isBlocking = computed(() => phase.value === 'resolve' && !current.value.safe)
const isAllowing = computed(() => phase.value === 'resolve' && current.value.safe)

let timer
const wait = (ms) => new Promise((r) => (timer = setTimeout(r, ms)))
let running = true

async function loop() {
  while (running) {
    phase.value = 'ask'
    await wait(900)
    if (!running) return
    phase.value = 'check'
    await wait(1200)
    if (!running) return
    phase.value = 'resolve'
    const q = current.value
    if (!q.safe) blocked.value++
    log.value = [{ ...q, id: Date.now() }, ...log.value].slice(0, 4)
    await wait(1900)
    index.value = (index.value + 1) % queries.length
  }
}

onMounted(loop)
onBeforeUnmount(() => {
  running = false
  clearTimeout(timer)
})
</script>

<template>
  <figure class="demo" aria-label="Animated example of Secure64 blocking a malicious DNS lookup">
    <svg class="demo__svg" viewBox="0 0 640 380" role="img" aria-hidden="true">
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="var(--teal-400)" stop-opacity="0.35" />
          <stop offset="100%" stop-color="var(--teal-400)" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- links -->
      <line :x1="nodes.device.x + 26" :y1="nodes.device.y" :x2="nodes.resolver.x - 52" :y2="nodes.resolver.y" class="link" />
      <line :x1="nodes.resolver.x + 46" :y1="nodes.resolver.y - 18" :x2="nodes.safe.x - 32" :y2="nodes.safe.y + 8" class="link" :class="{ 'link--safe': isAllowing }" />
      <line :x1="nodes.resolver.x + 46" :y1="nodes.resolver.y + 18" :x2="nodes.threat.x - 32" :y2="nodes.threat.y - 8" class="link link--dashed" :class="{ 'link--danger': isBlocking }" />

      <!-- block marker on the threat path -->
      <g class="cross" :class="{ 'is-on': isBlocking }" :transform="`translate(${(nodes.resolver.x + nodes.threat.x) / 2 + 6}, ${(nodes.resolver.y + nodes.threat.y) / 2 + 2})`">
        <circle r="15" />
        <path d="M-5 -5 5 5 M5 -5 -5 5" />
      </g>

      <!-- device -->
      <g :transform="`translate(${nodes.device.x}, ${nodes.device.y})`">
        <rect x="-22" y="-38" width="44" height="76" rx="9" class="device" />
        <rect x="-15" y="-28" width="30" height="50" rx="3" class="device__screen" />
        <circle cy="30" r="2.5" class="device__btn" />
        <text y="64" class="label">Your device</text>
      </g>

      <!-- resolver -->
      <g :transform="`translate(${nodes.resolver.x}, ${nodes.resolver.y})`">
        <circle r="90" fill="url(#glow)" class="resolver__glow" :class="{ 'is-on': phase === 'check' }" />
        <circle r="48" class="resolver" :class="{ 'resolver--danger': isBlocking }" />
        <path d="M0 -26 20 -18v14c0 13-9 22-20 26-11-4-20-13-20-26v-14z" class="resolver__shield" :class="{ 'resolver__shield--danger': isBlocking }" />
        <text y="78" class="label label--strong">Secure64 DNS</text>
      </g>

      <!-- safe destination -->
      <g :transform="`translate(${nodes.safe.x}, ${nodes.safe.y})`" class="dest" :class="{ 'is-active': isAllowing }">
        <circle r="30" class="dest__ring dest__ring--safe" />
        <path d="M-12 0h24M0 -12c6 6 6 18 0 24M0 -12c-6 6-6 18 0 24" class="dest__globe" />
        <text y="52" class="label">{{ isAllowing ? current.domain : 'Safe site' }}</text>
      </g>

      <!-- threat destination -->
      <g :transform="`translate(${nodes.threat.x}, ${nodes.threat.y})`" class="dest" :class="{ 'is-active': isBlocking }">
        <circle r="30" class="dest__ring dest__ring--danger" />
        <path d="M0 -12 12 10H-12z M0 -4v6 M0 6v0.5" class="dest__warn" />
        <text y="52" class="label">{{ isBlocking ? current.domain : 'Known threat' }}</text>
      </g>

      <!-- moving query packet -->
      <g class="packet" :class="{ 'packet--danger': isBlocking, 'packet--safe': isAllowing }" :style="{ transform: `translate(${packet.x}px, ${packet.y}px)` }">
        <circle r="13" class="packet__halo" />
        <circle r="7" class="packet__dot" />
      </g>
    </svg>

    <figcaption class="demo__caption" aria-live="polite">
      <span class="demo__query">{{ current.domain }}</span>
      <span>{{ caption }}</span>
    </figcaption>

    <div class="demo__log">
      <div class="demo__log-head">
        <span>Live lookups</span>
        <span class="demo__count">{{ blocked }} {{ blocked === 1 ? 'threat' : 'threats' }} blocked</span>
      </div>
      <TransitionGroup name="row" tag="ul">
        <li v-for="row in log" :key="row.id">
          <span class="mono">{{ row.domain }}</span>
          <span class="tag" :class="row.safe ? 'tag--safe' : 'tag--danger'">{{ row.safe ? 'Resolved' : `Blocked · ${row.threat}` }}</span>
        </li>
      </TransitionGroup>
    </div>
  </figure>
</template>

<style scoped>
.demo {
  margin: 0;
  background: linear-gradient(180deg, rgba(27, 51, 82, 0.55), rgba(10, 24, 40, 0.7));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 20px 20px 16px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
}

.demo__svg {
  width: 100%;
  height: auto;
  overflow: visible;
}

.link {
  stroke: rgba(159, 179, 198, 0.35);
  stroke-width: 2;
  transition: stroke 0.3s;
}

.link--dashed {
  stroke-dasharray: 5 6;
}

.link--safe {
  stroke: var(--safe);
}

.link--danger {
  stroke: var(--danger);
}

.cross {
  opacity: 0;
  transition: opacity 0.25s;
}

.cross.is-on {
  opacity: 1;
}

.cross circle {
  fill: var(--danger);
}

.cross path {
  stroke: #fff;
  stroke-width: 2.6;
  stroke-linecap: round;
}

.device {
  fill: var(--navy-800);
  stroke: var(--on-dark-soft);
  stroke-width: 2;
}

.device__screen {
  fill: var(--navy-700);
}

.device__btn {
  fill: var(--on-dark-soft);
}

.resolver {
  fill: var(--navy-800);
  stroke: var(--teal-400);
  stroke-width: 2.5;
  transition: stroke 0.3s;
}

.resolver--danger {
  stroke: var(--danger);
}

.resolver__glow {
  opacity: 0.4;
  transition: opacity 0.4s;
}

.resolver__glow.is-on {
  opacity: 1;
}

.resolver__shield {
  fill: rgba(46, 230, 214, 0.15);
  stroke: var(--teal-400);
  stroke-width: 2;
  transition: all 0.3s;
}

.resolver__shield--danger {
  fill: rgba(255, 90, 95, 0.2);
  stroke: var(--danger);
}

.dest {
  opacity: 0.55;
  transition: opacity 0.3s;
}

.dest.is-active {
  opacity: 1;
}

.dest__ring {
  fill: var(--navy-800);
  stroke-width: 2;
}

.dest__ring--safe {
  stroke: var(--safe);
}

.dest__ring--danger {
  stroke: var(--danger);
}

.dest__globe {
  fill: none;
  stroke: var(--safe);
  stroke-width: 2;
}

.dest__warn {
  fill: none;
  stroke: var(--danger);
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
}

.label {
  fill: var(--on-dark-soft);
  font-size: 13px;
  font-family: var(--font-mono);
  text-anchor: middle;
}

.label--strong {
  fill: var(--on-dark);
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 14px;
}

.packet {
  transition: transform 0.75s cubic-bezier(0.65, 0, 0.35, 1);
}

.packet__halo {
  fill: var(--teal-400);
  opacity: 0.25;
}

.packet__dot {
  fill: var(--teal-400);
}

.packet--safe .packet__dot,
.packet--safe .packet__halo {
  fill: var(--safe);
}

.packet--danger .packet__dot,
.packet--danger .packet__halo {
  fill: var(--danger);
}

.demo__caption {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 64px;
  padding: 12px 4px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 15px;
  color: var(--on-dark);
}

.demo__query {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--teal-400);
}

.demo__log {
  padding-top: 12px;
  font-size: 13px;
}

.demo__log-head {
  display: flex;
  justify-content: space-between;
  color: var(--on-dark-soft);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
}

.demo__count {
  color: #ffb3b5;
}

.demo__log ul {
  list-style: none;
  margin: 0;
  padding: 0;
  min-height: 128px;
}

.demo__log li {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.06);
  color: var(--on-dark);
}

.mono {
  font-family: var(--font-mono);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tag {
  flex: none;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 999px;
}

.tag--safe {
  color: var(--safe);
  background: rgba(61, 220, 132, 0.12);
}

.tag--danger {
  color: #ff8a8e;
  background: rgba(255, 90, 95, 0.14);
}

.row-enter-active {
  transition: all 0.35s ease;
}

.row-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.row-leave-active {
  display: none;
}
</style>
