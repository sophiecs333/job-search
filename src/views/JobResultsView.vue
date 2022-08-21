<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobFiltersSidebar from "@/components/jobresults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/jobresults/JobListings.vue";

export default defineComponent({
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
});
</script>
