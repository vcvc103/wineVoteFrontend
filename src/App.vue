<script setup lang="ts">
import {RouterLink} from 'vue-router'
import WineView from "@/views/WineView.vue";
import {loadThings} from "./scripts"
import {defineComponent, onMounted, ref} from "vue";
console.log("farhan1");

const items = ref<any[]>([]);

const loadData = async () => {
  try {
    console.log("farhan");
    const data = await loadThings(); // Await sollte hier verwendet werden
    items.value = data;
    console.log('Loaded things:', items.value);
  } catch (error) {
    console.error('Error loading things:', error);
  }
};

// Automatisches Laden von Daten, wenn die Komponente gemountet wird
onMounted(() => {
  loadData();
});



</script>

<template>
  <div>Navigation Bar
  <router-link to="/">Home</router-link> |
  <router-link to="/test">Test</router-link>
</div>
  <WineView></WineView>

  <v-btn @click="loadThings">Load Wines</v-btn>

  <div>
    {{items}}
  </div>

</template>

<!--<template>

  <div>
    Hello World
  </div>

</template>-->

<style scoped>

</style>
