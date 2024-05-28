<script setup lang="ts">
import {RouterLink} from 'vue-router'
import WineView from "@/views/WineView.vue";
import {loadThings} from "./scripts"
import {onMounted, ref} from "vue";

const items = ref<any[]>([]);

const loadData = async () => {
  try {
    console.log("farhan");
    const data = loadThings(); // Await sollte hier verwendet werden
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

    <span>
    {{items}}
  </span>

</template>

<!--<template>

  <div>
    Hello World
  </div>

</template>-->

<style scoped>

</style>
