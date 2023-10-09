<script setup>
const props = defineProps({
  x: {
    type: Number,
    required: true
  },
  y: {
    type: Number,
    required: true
  },
  sign: {
    type: Number,
    required: true
  },
  variants: {
    type: Array,
    required: true
  },
  current: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['do'])

function next(e) {
    emit('do', e.target.dataset.answer)
}
</script>

<template>
  <div>
    <div class="m-3">Решите пример ({{ props.current }}/{{ props.total }}):</div>
    <div class="flex space-x-4 justify-center">
    <div class="w-1/4 bg-gray-300 p-4 border-4 border-grey number">{{ props.x }}</div>
    <div class="w-1/4 bg-gray-300 p-4 border-4 border-grey number">{{ props.sign }}</div>
    <div class="w-1/4 bg-gray-300 p-4 border-4 border-grey number">{{ props.y }}</div>
    </div>
    <div class="m-3">Выберите правильный ответ:</div>
    <div class="flex space-x-4 mt-3 justify-center">
        <div class="w-1/4 bg-gray-300 p-4 bg-indigo-500 rounded-lg font-semibold shadow-md number cursor-pointer" :data-answer="props.variants[0]" @click="next($event)">{{ props.variants[0] }}</div>
        <div class="w-1/4 bg-gray-300 p-4 bg-indigo-500 rounded-lg font-semibold shadow-md number cursor-pointer" :data-answer="props.variants[1]" @click="next($event)">{{ props.variants[1] }}</div>
        <div class="w-1/4 bg-gray-300 p-4 bg-indigo-500 rounded-lg font-semibold shadow-md number cursor-pointer" :data-answer="props.variants[2]" @click="next($event)">{{ props.variants[2] }}</div>
    </div>
  </div>
</template>