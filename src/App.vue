<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="bg-white shadow dark:bg-gray-800">
    <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
      <router-link
        to="/addition"
        :active-class="'border-blue-500 text-gray-800'"
        class="border-b-2 mx-1.5 sm:mx-6 dark:text-neutral-50">Сложение</router-link>

      <router-link
        to="/subtraction"
        :active-class="'border-blue-500 text-gray-800'"
        class="border-b-2 500 mx-1.5 sm:mx-6 dark:text-neutral-50">Вычитание</router-link>

      <router-link
        to="/multiplication"
        :active-class="'border-blue-500 text-gray-800'"
        class="border-b-2 mx-1.5 sm:mx-6 dark:text-neutral-50">Умножение</router-link>

      <router-link
        to="/division"
        :active-class="'border-blue-500 text-gray-800'"
          class="border-b-2 mx-1.5 sm:mx-6 dark:text-neutral-50">Деление</router-link>
    </div>
  </nav>
  <RouterView />
</template>