<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
import { stringify } from 'postcss';
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      value:
    }
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value
      this.$emit("handleInput", this.value)
    }
  }
};
</script>
