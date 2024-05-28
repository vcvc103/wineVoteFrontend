<script setup lang="ts">

import Wine from "@/components/Wine.vue";
import {ref} from "vue";

const wines = ref([
  {name: "Weißer Wein" },
  {name: "Roter Wein" },
  {name: "Rose Wein" }
])

</script>

<template>
<div>Hier seht ihr den Wein des Tages.</div>
<!--  <Wine v-for="wine in wines" :key="wine.name" :name="wine.name"/>-->
</template>

<style scoped>

</style>