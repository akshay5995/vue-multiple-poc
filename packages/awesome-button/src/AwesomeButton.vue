<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
   <button type="button" @click="count++">{{ msg }} count is: {{ count }}</button>
</template>

<style>

</style>
