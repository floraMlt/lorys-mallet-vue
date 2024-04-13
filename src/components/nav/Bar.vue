<template>
  <div class="z-10 fixed h-12 w-full bg-white p-3">
    <div class="flex flex-row items-center justify-evenly w-64 mx-auto">
      <Link :to="{ name: 'Home' }">Home</Link>
      <span class="text-secondary-500 font-semibold">|</span>
      <Link :to="{ name: 'Projects' }">Projects</Link>
      <span class="text-secondary-500 font-semibold">|</span>
      <Link :to="{ name: 'About' }">A propos</Link>
    </div>
  </div>
</template>

<script setup>
import Link from "./Link.vue";
</script>
