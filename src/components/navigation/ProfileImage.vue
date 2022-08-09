<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWOiXypqMnk_iFcn1zyOP-sspRJsRwLrSvg&usqp=CAU",
    };
  },
});
</script>
