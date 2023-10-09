<script setup>
import { ref, reactive, onBeforeMount, computed, shallowRef } from 'vue'
import Expression from './Expression.vue'
import AnswerStatus from './AnswerStatus.vue'
import StatisticsEnd from './StatisticsEnd.vue'
import Main from './Main.vue'
const isStarted = ref(false)
const isBusy = ref(false)
const isEnd = ref(false)
const isCorrectAnswer = ref(false)
const count = ref(0)
const sign = ref('/')
const success = ref(0)
const failed = ref(0)
const current = ref(0)
const startTime = ref(null)
const endTime = ref(null)
let expressions = reactive([])

const activeComponent = shallowRef(Expression)

const spentTime = computed(() => {
  if (!startTime.value || !endTime.value) return 0
  return millisecondsToTime(endTime.value - startTime.value)
})

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}

function start(c){
  count.value = c
  generateExpressions()
  isStarted.value = true
  startTime.value = new Date().getTime()
}

function next(answer) {
  if (answer == expressions[current.value].result) {
    success.value++
    isCorrectAnswer.value = true
  }
  else {
    failed.value++
    isCorrectAnswer.value = false
  }
  activeComponent.value = AnswerStatus
  
  if (current.value === expressions.length-1) {
    setTimeout(()=> {
      isEnd.value = true;
    }, 2000)
    endTime.value = new Date().getTime()
    return
  }else {
    setTimeout(()=> activeComponent.value = Expression, 1000)
    current.value++
  }
}

function generateExpressions () {
  expressions = []
  for (let index = 0; index < count.value; index++) {
    let x,y,z,variants
    
    y = getRandomInt(1,9)
    z = getRandomInt(1,9)
    x = y*z

    do {
      variants = [...new Set([
        x/y,
        getRandomInt(1,99),
        getRandomInt(1,99),
      ])]
    } while (variants.length !== 3)

    variants.sort(() => Math.random() - 0.5);

    expressions.push({
      x: x,
      y: y,
      result: x/y,
      variants: variants,
    })
  }
}

function restart() {
  success.value = 0
  failed.value = 0
  isEnd.value = false
  isStarted.value = false
  isCorrectAnswer.value = false
  current.value = 0
  startTime.value = null
  endTime.value = null
  activeComponent.value = Expression
  generateExpressions()
}

function millisecondsToTime(m)
{
  var seconds = Math.floor((m / 1000) % 60);
  var minutes = Math.floor((m / (60 * 1000)) % 60);

  if (minutes) return minutes + ' мин. ' + seconds + ' сек.'
  return  seconds + ' сек.'
}

onBeforeMount(() => {
  generateExpressions()
})
</script>

<template>
  <div class="flex justify-center items-center h-96">
  <div class="text-center">
    <div v-if="!isStarted && !isEnd" class="flex flex-col">
      <Main @start="start"/>
    </div>
    <div v-if="!isEnd && isStarted && !isBusy">
      <Transition name="slide-up">
        <component :is="activeComponent"
          :x="expressions[current].x"
          :y="expressions[current].y"
          :sign="sign"
          :current="current"
          :total="count"
          :variants="expressions[current].variants"
          :isCorrectAnswer="isCorrectAnswer"
          @do="next"
        />
      </Transition>
    </div>
    <div class="justify-center text-lg" v-if="isEnd && isStarted">
      <StatisticsEnd :success="success" :failed="failed" :spentTime="spentTime" @restart="restart" />
    </div>
  </div>
</div>
</template>

<style scoped>
  .number {
    font-size: 24px;
    text-align: center;
  }
  /* CSS для анимации */

  .td {
    text-align: right;
  }
  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.3s ease-out;
  }

  .slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
</style>
