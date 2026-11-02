<script setup>
// Renders the { h, p, list, table, source } sections used by product and solution data.
defineProps({ sections: { type: Array, required: true } })
</script>

<template>
  <section v-for="s in sections" :key="s.h" class="band">
    <div class="wrap band__grid">
      <div class="band__side"><h2>{{ s.h }}</h2></div>
      <div class="measure">
        <p v-for="(t, i) in s.p" :key="i">{{ t }}</p>
        <ul v-if="s.list">
          <li v-for="l in s.list" :key="l">{{ l }}</li>
        </ul>
        <div v-if="s.table" class="table-scroll">
          <table>
            <thead>
              <tr><th v-for="h in s.table.head" :key="h" scope="col">{{ h }}</th></tr>
            </thead>
            <tbody>
              <tr v-for="(r, i) in s.table.rows" :key="i">
                <component :is="j === 0 ? 'th' : 'td'" v-for="(c, j) in r" :key="j" :scope="j === 0 ? 'row' : null">{{ c }}</component>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-if="s.source"><a :href="s.source.href" target="_blank" rel="noopener">{{ s.source.label }}</a></p>
      </div>
    </div>
  </section>
</template>
