<script setup lang="ts">
import {itemsWine} from "@/scripts";
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
  <Wine v-for="wine in itemsWine" :key="wine.name" :name="wine.name"/>
</template>

<style scoped>

</style>