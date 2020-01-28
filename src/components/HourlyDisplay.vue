<template>
  <div class="flex-grow flex flex-row items-end">
    <div class="flex-grow">
      <div class="p-2 text-gray-500 text-sm">Based on {{hoursPerDay}} hours a day at ${{ hourlyRate}}/hr</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HourlyDisplay', 
  computed: {
    ...mapGetters(['hourlyRate', 'hoursPerDay']),
  },
};
</script>