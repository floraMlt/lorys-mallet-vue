<template>
  <div class="relative mt-12 pb-16 z-0">
    <div>
      <img
        :src="projectPage?.attributes.imgCover"
        alt="Image du projet"
        class="w-screen h-[150px] object-cover"
      />

      <div class="py-4 sm:px-24 s:px-8">
        <router-link
          :to="{ name: 'Projects' }"
          class="border border-primary-500 rounded text-texts-normal py-1 px-2 hover:bg-primary-500 hover:cursor-pointer hover:text-white transition-all"
        >
          Retour aux projets
        </router-link>

        <h1
          class="text-3xl text-primary-500 font-primary font-semibold text-center mt-6"
        >
          {{ projectPage?.attributes.title }}
        </h1>

        <h5 class="text-m text-primary-700 text-center mt-3">
          {{ `Compétence associée : ${projectPage?.attributes.category}` }}
        </h5>

        <div
          class="p-2 mx-2 my-4 flex row flex-wrap justify-center items-center"
        >
          <p
            v-for="tag in projectPage?.attributes.tags"
            :key="tag"
            class="inline-block rounded-full bg-secondary-300 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {{ `#${tag}` }}
          </p>
        </div>

        <div v-html="projectPage?.html" class="project-content" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import * as docs from "@/assets/docs";

const { params } = useRoute();

const projectPage = computed(() => {
  if (!params.id) return null;
  return docs[params.id] ?? null;
});
</script>
