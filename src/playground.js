export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// Home View
<template>
  <hero />
</template>

<script>
import Hero from "@/components/jobsearch/Hero.vue";

export default {
  name: "HomeView",
  components: {
    Hero,
  },
};
</script>
