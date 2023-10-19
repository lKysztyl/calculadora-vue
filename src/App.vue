<script setup lang="ts">
  import { ref, watch } from "vue";

  const soma = ref<number>(0);
  const some = ref<number>(0);
  const option = ref<string>("+");
  const result = ref<number>(0);

  const selectOption = () => {
    if (soma.value !== null && some.value !== null) {
      switch (option.value) {
        case "+":
          result.value = soma.value + some.value;
          break;
        case "-":
          result.value = soma.value - some.value;
          break;
        case "*":
          result.value = soma.value * some.value;
          break;
        case "/":
          result.value = soma.value / some.value;
          break;
      }
    }
  };

  watch([soma, some], () => {
  selectOption();
});
</script>

<template>
  <div class="container bg-blue-300 h-screen">
    <form class="m-auto text-center space-x-4">
      <input v-model="soma" class="text-center rounded-md border-none outline-vue-4 bg-vue-3 placeholder-white" type="number" placeholder="0">
      <select v-model="option" @change="selectOption" class="w-8 text-center rounded-md bg-green-600 appearance-none" name="" id="">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input v-model="some" class="text-center rounded-md bg-vue-3 border-none outline-vue-4 placeholder-white" type="number" placeholder="0">
      {{ result }}
    </form>
  </div>
</template>