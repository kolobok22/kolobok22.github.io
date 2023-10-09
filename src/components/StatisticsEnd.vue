<script setup>
defineProps(['success','failed','spentTime'])
const emit = defineEmits(['restart'])
</script>
<template>
  <table class="table-fixed">
    <tr><td colspan="2" class="font-semibold">Результат:</td></tr>
    <tr><td class="text-green-600">Правильно</td><td class="td">{{ success }}</td></tr>
    <tr><td class="text-red-600">Неправильно</td><td class="td">{{ failed }}</td></tr>
    <tr><td>Время</td><td class="td">{{ spentTime }}</td></tr>
  </table>

  <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800 m-3" @click="emit('restart')">
    Заново
  </button>
</template>