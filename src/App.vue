<template>
  <div id="app" class="min-h-screen bg-gray-800 text-center flex flex-col">
    
    <Bank  class="m-12" :money="earnedWage" :hourlyRate="hourlyRate"></Bank>
    <Clock class="m-12" :time="elapsedTime"></Clock>
    <Controls ></Controls>
   
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Bank from "./components/Bank.vue";
import Clock from "./components/Clock.vue";
import Controls from "./components/Controls.vue";

export default {
  name: 'app', 
  computed: {
    ...mapGetters(['hourlyRate']),
    elapsedTime () {
      return this.$store.state.elapsedTime
    },
    earnedWage () {
      return (this.$store.state.elapsedTime * this.ratePerSecond).toFixed(2)
    },
    ratePerSecond () {
      return (this.$store.state.hourlyRate / 60 / 60);
    }

  },
  
  components: {
    Clock,
    Bank,
    Controls    
  }
};
</script>

<style>

</style>
