<script setup>
import { stringify } from "postcss";

defineProps({
  selectedDay: String,
});
</script>

<template>
  <div class="grid grid-cols-5 gap-2 items-center">
    <!-- selected -->
    <div class="pl-5 col-span-2">
      <label
        for="Date"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Time
      </label>
      <input
        type="text"
        id="Date"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="<%=selectedDay%>"
        pattern="Phone"
        disabled
      />
    </div>

    <!-- time -->
    <div class="pt-6">
      <select
        id="Time"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Time</option>
      </select>
    </div>

    <div class="col-span-2 grid grid-cols-6 gap-0 justify-self-center pt-6">
      <!-- clock -->
      <div>
        <img src="clock.png" class="w-8 h-8" />
      </div>
      <!-- minutes -->
      <div class="col-span-2">
        <select
          id="Time"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
        </select>
      </div>

      <div class="justify-self-center">
        <p class="text-2xl text-center text-green-700">:</p>
      </div>

      <!-- seconds -->
      <div class="pr-8">
        <select
          id="Time"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option selected value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style></style>
