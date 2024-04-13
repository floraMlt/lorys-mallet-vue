<template>
  <h1
    class="sm:text-3xl text-primary-500 font-primary font-semibold text-center pt-20 mb-8 z-0 s:text-4xl"
  >
    Mes projets
  </h1>
  <ProjectFilterBar @sortProjectByTag="sortProjects($event)" />

  <div class="py-5 sm:px-20 flex row flex-wrap justify-center s:px-8">
    <ProjectCard
      v-for="project in filteredProjectsInfo"
      :key="project.title"
      :project="project"
      class="m-3"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ProjectFilterBar from "@/components/project/FilterBar.vue";
import ProjectCard from "@/components/project/Card.vue";

import * as docs from "@/assets/docs";

const projectsInfo = Object.entries(docs).map(([key, value]) => {
  return {
    ...value.attributes,
    id: key,
  };
});

const selectedCategory = ref([]);

const sortProjects = (cat) => {
  const category = cat.target?.labels?.[0]?.innerText;

  if (category) {
    toggleCategory(category);
  }
};

const toggleCategory = (category) => {
  if (selectedCategory.value.includes(category)) {
    selectedCategory.value = selectedCategory.value.filter(
      (cat) => cat !== category
    );
  } else {
    selectedCategory.value.push(category);
  }
};

const filteredProjectsInfo = computed(() => {
  if (selectedCategory.value.length === 0) {
    return projectsInfo;
  }

  return projectsInfo.filter((project) =>
    selectedCategory.value.includes(project.category)
  );
});
</script>
