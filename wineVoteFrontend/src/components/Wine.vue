<script setup lang="ts">
defineProps<{
  name: string
  price: string
  age: string
}>()
</script>

<template>
<div>{{ name }}</div>
<div>{{ price }}</div>
<div>{{ age }}</div>
</template>

<style scoped>

</style>