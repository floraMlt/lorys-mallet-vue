<template>
  <div
    class="relative flex flex-col items-center sm:pt-32 sm:px-24 z-0 max-w-screen-xl s:pt-20 s:px-8"
  >
    <div class="sm:flex sm:flex-row s:flex-col">
      <img
        src="../assets/img/img-hp.jpg"
        alt="illustration biology"
        class="sm:max-h-80 sm:mr-10 rounded-3xl s:max-h-48 s:mx-auto"
      />

      <div>
        <div>
          <h1
            class="flex text-primary-500 mb-6 font-semibold font-primary sm:text-6xl sm:justify-start s:mt-5 s:text-center s:text-5xl s:leading-tight s:justify-center"
          >
            Lorys Mallet
          </h1>

          <h3
            class="text-3xl text-primary-500 mb-8 flex font-semibold font-primary sm:justify-start s:text-center s:justify-center"
          >
            Étudiant en biologie
          </h3>

          <h5
            class="w-3/4 text-s text-texts-normal mb-14 flex font-secondary sm:text-left sm:mx-0 s:text-center s:mx-auto"
          >
            Je suis passionné par les sciences et plus précisément par la
            biologie. Venez découvrir mes projets !
          </h5>
        </div>

        <div class="flex sm:justify-start s:justify-center">
          <button
            class="bg-secondary-500 hover:bg-secondary-700 w-28 text-white font-semibold py-2 px-4 mr-4 rounded transition-all"
            @click="openModal"
          >
            Mon CV
          </button>

          <Transition>
            <ModalCV v-if="isModalOpen" @close-modal="closeModal" />
          </Transition>

          <router-link :to="{ name: 'Projects' }">
            <button
              class="bg-secondary-500 hover:bg-secondary-700 w-30 text-white font-semibold py-2 px-4 rounded transition-all"
            >
              Mes projets
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="h-fit rounded-xl shadow-lg px-6 py-4 mt-16 mx-auto text-xl text-center hover:shadow-xl hover:cursor-pointer sm:w-2/4 s:w-full transition-all"
    >
      <p class="text-lg text-texts-normal">Contactez-moi par mail :</p>

      <a
        href="mailto:lorysmallet@gmail.com"
        class="text-lg text-primary-500 hover:text-primary-600 transition-all"
      >
        lorysmallet@gmail.com
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalCV from "@/components/ModalCV.vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
