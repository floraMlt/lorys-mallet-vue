<template>
  <RouterLink
    :to="{ name: 'Project', params: { id: project.id } }"
    class="sm:w-auto s:w-full"
  >
    <div
      class="sm:max-w-sm h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all s:w-full"
    >
      <img
        :src="project.imgCover"
        alt="Project image cover"
        class="w-full h-52 object-cover object-center"
      />

      <div class="px-6 py-4">
        <div class="font-bold text-xl text-gray-800 mb-2">
          {{ project.title }}
        </div>
      </div>

      <div class="px-6 pt-4 pb-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="inline-block rounded-full bg-secondary-300 px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>
