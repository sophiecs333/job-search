<template>
  <div>Job Page for job {{ currentJobId }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useRoute } from "vue-router";

export default defineComponent({
  name: "JobView",
  setup() {
    const route = useRoute();
    const currentJobId = route.params.id;
    return { currentJobId };
  },
  // computed: {
  //   currentJobId() {
  //     return this.$route.params.id;
  //   },
  // },
});
</script>
