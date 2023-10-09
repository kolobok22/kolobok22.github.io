<script setup>
import { ref } from 'vue'
const count = ref(30)

const emit = defineEmits(['start'])
</script>
<template>
<div>
  <label class="block text-gray-700 text-sm font-bold mb-2" for="inputField">Количество примеров</label>
  <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-indigo" id="count" type="text" placeholder="Количество примеров" v-model="count">
</div>
<div class="justify-center">
  <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800 m-3" @click="emit('start', count)">Старт</button>
</div>
</template>