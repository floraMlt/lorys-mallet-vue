<template>
  <div class="h-screen flex flex-col items-center">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from "@/components/nav/Bar.vue";
</script>
