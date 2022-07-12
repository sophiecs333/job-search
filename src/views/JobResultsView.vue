<template>
  <div>
    <h1 class="text-6xl font-bold">Job Results View</h1>
    <button @click="goToHome">Home</button>
  </div>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$route.push({ name: "Home" });
    },
  },
};
</script>
