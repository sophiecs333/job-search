<template>
  <img :src="imageLink" class="w-8 h-8 object-contain" />
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "@/assets/deutsche_akademie.png",
    };
  },
};
</script>
