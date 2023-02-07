<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="flex bg-gray-100 w-2/3">
    <div class="w-96 ...">12</div>
    <div class="w-80 ...">31</div>
    <div class="w-64 ...">43</div>
    <div class="w-48 ...">49</div>
    <div class="w-40 ..."></div>
    <div class="w-32 ..."></div>
    <div class="w-24 ..."></div>
  </div>
  <div class="flex bg-zinc-900">
    <div class="w-2/5 bg-blue-800">w-2/5</div>
    <div class="w-3/5 bg-blue-800">w-3/5</div>
  </div>
  <div class="flex ...">
    <div class="w-1/3 ...">w-1/3</div>
    <div class="w-2/3 ...">w-2/3</div>
  </div>
  <div class="flex ...">
    <div class="w-1/4 ...">w-1/4</div>
    <div class="w-3/4 ...">w-3/4</div>
  </div>
  <div class="flex ...">
    <div class="w-1/5 ...">w-1/5</div>
    <div class="w-4/5 ...">w-4/5</div>
  </div>
  <div class="flex ...">
    <div class="w-1/6 ...">w-1/6</div>
    <div class="w-5/6 ...">w-5/6</div>
  </div>
  <div class="w-full ...">w-full</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
