<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <spotlight class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
        >
          <img :src="img" class="object-contain" />

          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>

            <p class="mt-3 text-sm">
              {{ description }}
            </p>
          </div>

          <router-link
            to="/jobs/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs</router-link
          >
        </router-link>
      </template>
    </spotlight>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Headline from "@/components/jobsearch/Headline.vue";
import JobSearchForm from "@/components/jobsearch/JobSearchForm.vue";
import Spotlight from "@/components/jobsearch/Spotlight.vue";

export default defineComponent({
  name: "Hero",
  components: {
    Headline,
    JobSearchForm,
    Spotlight,
  },
});
</script>
