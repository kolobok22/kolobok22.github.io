<script setup>
defineProps(['isCorrectAnswer'])
</script>
<template>
  <p v-if="isCorrectAnswer" class="text-green-600">ПРАВИЛЬНО!</p>
  <p v-else class="text-red-600">НЕПРАВИЛЬНО!</p>
</template>