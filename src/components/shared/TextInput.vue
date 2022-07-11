<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
import { stringify } from "postcss";
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value;
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
