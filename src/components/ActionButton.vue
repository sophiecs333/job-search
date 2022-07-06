<template>
  <button class="primary">
    {{ Text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text"],
};
</script>

<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}

.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue
}

.secondary {
  bla
}
</style>
