<template>
  <div class="w-full h-full bg-white fixed pin z-50 overflow-auto bg-smoke-light flex text-left">
    <div class="mx-auto px-8 pt-6 pb-8 mb-4">
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="hourlyRate"
        >How much do you make per hour?</label>
        <input
          v-model="hourlyRate"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="hourlyRate"
          type="text"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="hoursPerday"
        >How many hours do you work per day?</label>
        <input
          v-model="hoursPerday"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="hoursPerday"
          type="text"
        />
      </div>
      <button
        v-if="!active"
        name="button"
        class="w-full bg-green-500 hover:bg-green-700 text-white font-bold mt-4 py-4 px-20 rounded text-lg"
        @click="submit"
        v-bind:disabled="active"
      >Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RateForm',
  data() {
    return {
      hourlyRate: 0,
      hoursPerday: 8,
    };
  },
  computed: {
    active() {
      return this.$store.state.clockRunning;
    },
  },
  methods: {
    ...mapActions(['setHourlyRate', 'setHoursPerDay']),
    submit: function() {
      this.setHourlyRate(parseFloat(this.hourlyRate));
      this.setHoursPerDay(parseFloat(this.hoursPerday));
    },
  },
};
</script>