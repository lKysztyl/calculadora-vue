<script setup lang="ts">
  import { ref, watch } from "vue";

  const operandoLeft = ref<number>(0);
  const operandoRight = ref<number>(0);
  const option = ref<string>("+");
  const result = ref<number>(0);

  const selectOption = () => {
    if (operandoLeft.value !== null && operandoRight.value !== null) {
      switch (option.value) {
        case "+":
          result.value = operandoLeft.value + operandoRight.value;
          break;
        case "-":
          result.value = operandoLeft.value - operandoRight.value;
          break;
        case "*":
          result.value = operandoLeft.value * operandoRight.value;
          break;
        case "/":
          result.value = operandoLeft.value / operandoRight.value;
          break;
      }
    }
  };

  watch([operandoLeft, operandoRight], () => {
  selectOption();
});
</script>

<template>
  <div class="container bg-vue-2 w-screen h-screen relative m-auto">
    <h1 class="text-3xl text-center pt-52 max-md:pt-44 font-Roboto max-md:text-lg">Calculadora com Vite + Vue + TS</h1>
    <form class="text-center space-x-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150 max-lg:space-x-0">
      <input v-model="operandoLeft" class="text-center rounded-md border-none outline-vue-4 bg-vue-3 placeholder-white mb-4 max-lg:block" type="number" placeholder="0">
      <select v-model="option" @change="selectOption" class="w-8 text-center rounded-md bg-vue-4 hover:cursor-pointer hover:ring hover:ring-vue-1 delay-200 appearance-none">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input v-model="operandoRight" class="text-center rounded-md border-none outline-vue-4 bg-vue-3 placeholder-white mt-4 max-lg:block" type="number" placeholder="0">
    </form>
    <div class="absolute top-60% max-lg:top-[65%] max-md:top-68% max-lg:scale-[142%] left-1/2 w-1/4 h-6 bg-white text-vue-3 rounded-md text-center -translate-x-1/2 -translate-y-1/2">
      {{ result }}
    </div>
  </div>
</template>