<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// Names use the .example domain, which is reserved for documentation (RFC 2606),
// and 192.0.2.10 is a documentation address (RFC 5737).
const examples = [
  { name: 'www.yourbank.example', safe: true },
  { name: 'yourbank-login.example', service: 'FraudGuard', kind: 'a phishing site' },
  { name: 'update.malware.example', service: 'MalwareGuard', kind: 'a malware download' },
  { name: 'a1b2c3.tunnel.example', service: 'TunnelGuard', kind: 'a DNS tunnel' }
]

const current = ref(0)
const stage = ref(3)
const pinned = ref(false)
const ex = computed(() => examples[current.value])

const steps = computed(() => {
  const e = ex.value
  return [
    `The device asks its DNS server for the address of ${e.name}.`,
    e.safe
      ? 'Secure64 checks the name against its threat lists. No match.'
      : `Secure64 checks the name against its threat lists. ${e.service} lists it as ${e.kind}.`,
    e.safe
      ? 'The address comes back and the device connects to the site.'
      : 'No address comes back, so the device never connects.'
  ]
})

let timers = []
function clear() {
  timers.forEach(clearTimeout)
  timers = []
}

function play() {
  clear()
  stage.value = 1
  timers.push(setTimeout(() => (stage.value = 2), 1300))
  timers.push(setTimeout(() => (stage.value = 3), 2800))
}

function choose(i) {
  pinned.value = true
  clearInterval(cycle)
  current.value = i
  play()
}

let cycle
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  play()
  cycle = setInterval(() => {
    current.value = (current.value + 1) % examples.length
    play()
  }, 7500)
})
onBeforeUnmount(() => {
  clear()
  clearInterval(cycle)
})
</script>

<template>
  <figure class="fig">
    <figcaption class="fig__cap"><b>Fig. 1</b> What happens during a DNS lookup. Pick a name to follow it.</figcaption>

    <div class="fig__names" role="group" aria-label="Example names">
      <button
        v-for="(e, i) in examples"
        :key="e.name"
        class="fig__name"
        :aria-pressed="i === current"
        @click="choose(i)"
      >
        {{ e.name }}
      </button>
    </div>

    <svg viewBox="0 0 460 210" role="img" :aria-label="steps.join(' ')">
      <defs>
        <marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 8 4 0 8z" fill="context-stroke" />
        </marker>
      </defs>

      <g class="who">
        <text x="50" y="16">Device</text>
        <text x="230" y="16">Secure64 DNS</text>
        <text x="410" y="16">Website</text>
      </g>
      <g class="life">
        <line x1="50" y1="26" x2="50" y2="204" />
        <line x1="230" y1="26" x2="230" y2="204" />
        <line x1="410" y1="26" x2="410" y2="204" />
      </g>

      <g class="msg" :class="{ on: stage >= 1 }">
        <line x1="52" y1="62" x2="226" y2="62" marker-end="url(#arrow)" />
        <text x="139" y="54">Where is this name?</text>
      </g>

      <g class="msg" :class="{ on: stage >= 2 }">
        <rect x="222" y="76" width="16" height="30" />
        <text x="246" y="95" class="left">{{ ex.safe ? 'Not on any list' : `On ${ex.service}` }}</text>
      </g>

      <template v-if="ex.safe">
        <g class="msg msg--good" :class="{ on: stage >= 3 }">
          <line x1="226" y1="134" x2="54" y2="134" marker-end="url(#arrow)" />
          <text x="139" y="126" class="mono">192.0.2.10</text>
          <line x1="52" y1="178" x2="406" y2="178" marker-end="url(#arrow)" />
          <text x="230" y="170">Page loads</text>
        </g>
      </template>
      <template v-else>
        <g class="msg msg--bad" :class="{ on: stage >= 3 }">
          <line x1="226" y1="134" x2="54" y2="134" marker-end="url(#arrow)" />
          <text x="139" y="126">Blocked, no address</text>
          <line x1="52" y1="178" x2="200" y2="178" stroke-dasharray="4 5" />
          <path d="M204 171l14 14m0-14l-14 14" />
          <text x="314" y="182">No connection made</text>
        </g>
      </template>
    </svg>

    <ol class="fig__steps">
      <li v-for="(s, i) in steps" :key="i" :class="{ dim: stage <= i }">{{ s }}</li>
    </ol>
    <p class="note fig__note">An illustration with made-up names, not live data.</p>
  </figure>
</template>

<style scoped>
.fig {
  margin: 0;
  padding: 14px 16px;
  border: 1px solid var(--rule);
  background: #fff;
}

.fig__cap {
  font-size: 14.5px;
  margin-bottom: 10px;
}

.fig__names {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
  margin-bottom: 10px;
}

.fig__name {
  padding: 5px 8px;
  background: #fff;
  border: 1px solid var(--rule);
  border-radius: 2px;
  font-family: var(--mono);
  font-size: 12.5px;
  text-align: left;
  color: var(--ink);
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fig__name:hover {
  border-color: var(--navy);
}

.fig__name[aria-pressed='true'] {
  background: var(--navy);
  border-color: var(--navy);
  color: #fff;
}

svg {
  display: block;
  width: 100%;
  height: auto;
}

text {
  font-family: var(--body);
  font-size: 13.5px;
  text-anchor: middle;
  fill: var(--ink);
}

text.left {
  text-anchor: start;
}

text.mono {
  font-family: var(--mono);
}

.who text {
  font-family: var(--head);
  font-size: 16px;
  font-weight: 600;
  fill: var(--navy);
}

.life line {
  stroke: var(--rule);
  stroke-width: 1;
}

.msg {
  opacity: 0;
  transition: opacity 0.25s linear;
}

.msg.on {
  opacity: 1;
}

.msg line,
.msg path {
  fill: none;
  stroke: var(--navy);
  stroke-width: 1.5;
}

.msg rect {
  fill: var(--navy);
}

.msg--good line {
  stroke: var(--green-text);
}

.msg--bad line,
.msg--bad path {
  stroke: var(--red);
}

.msg--good text {
  fill: var(--green-text);
}

.msg--bad text {
  fill: var(--red);
}

.fig__steps {
  margin: 10px 0 0;
  padding: 10px 0 0 1.2em;
  border-top: 1px solid var(--rule-light);
  font-size: 14.5px;
  min-height: 118px;
}

.fig__steps li {
  transition: color 0.25s linear;
}

.fig__steps .dim {
  color: #a6adb6;
}

.fig__note {
  margin: 8px 0 0;
  font-size: 13px;
}

@media (max-width: 560px) {
  .fig__names {
    grid-template-columns: minmax(0, 1fr);
  }

  text {
    font-size: 17px;
  }

  .who text {
    font-size: 19px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .msg,
  .fig__steps li {
    transition: none;
  }
}
</style>
