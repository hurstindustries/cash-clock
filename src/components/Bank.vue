<template>
  <div class="my-10 w-full max-w-md m-auto border-4 rounded border-gray-600 bg-gray-700 py-4">
    <div class="text-6xl text-green-400">
      ${{ money }}
    </div>
    <div class="text-gray-500">
      Today's Wage
    </div>
  </div>
</template>

<script>
export default {
  name: "Bank",
  props: {
    money: String,
    hourlyRate: Number
  }
};
</script>

<style scoped>
</style>
