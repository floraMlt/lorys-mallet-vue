<template>
  <div
    class="sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:items-center sm:px-20 s:px-8 s:flex-col"
  >
    <ProjectTag id="analyses" @click="sortProjectByTag">
      Réaliser des analyses dans les domaines de la biologie
    </ProjectTag>
    <ProjectTag id="molecular-engineering" @click="sortProjectByTag">
      Mettre en œuvre des techniques d'ingénierie moléculaire en biologie de la
      santé
    </ProjectTag>
    <ProjectTag id="medical-biology" @click="sortProjectByTag">
      Réaliser des examens de biologie médicale
    </ProjectTag>
    <ProjectTag id="biology" @click="sortProjectByTag">
      Expérimenter dans le génie biologique
    </ProjectTag>
    <ProjectTag id="health" @click="sortProjectByTag">
      Mener des études à l'échelle de l'organisme et de la cellule en biologie
      de la santé
    </ProjectTag>
  </div>
</template>

<script setup>
import ProjectTag from "./Tag.vue";

const emit = defineEmits(["sortProjectByTag"]);

const sortProjectByTag = (cat) => {
  emit("sortProjectByTag", cat);
};
</script>
