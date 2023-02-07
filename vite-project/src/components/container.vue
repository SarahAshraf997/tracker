<script setup>
defineProps({
  selectedDate: String,
});
</script>
<template>
  <div class="bg-gray-100 w-full flex">
    <form>
      <div class="grid grid-cols-5 gap-4">
        <!-- first paragraph -->
        <div class="col-span-2">
          <p class="text-blue-700 font-serif">The next date has been set:</p>
          <p v-if="selectedDate.length > 0" class="text-gray-400">
            At 4:30 on {{ selectedDate }}
          </p>
        </div>

        <!-- right sign -->
        <div class="mx-0">
          <img src="checked-png-7.png" class="w-9 h-9" />
        </div>

        <!-- second paragraph -->
        <div class="col-span-2">
          <h3 class="text-blue-700 font-serif">Please Click Submit</h3>
          <p class="text-blue-700 font-serif">if you sure</p>
        </div>
      </div>
      <button
        type="submit"
        class="justify-self-center w-1/2 ocus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-3.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Register new account
      </button>
    </form>
  </div>
</template>
