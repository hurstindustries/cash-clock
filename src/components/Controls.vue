<template>
  <div class="m-12">
      <button v-if="!active" name="button" class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-20 mr-4 rounded text-xl" @click="start" v-bind:disabled="active">Start</button>
      <button v-if="active" name="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-20 rounded text-xl" @click="stop" v-bind:disabled="!active">Stop</button>
      <button v-if="!active" name="button" class="bg-gray-500 hover:bg-gray-600 text-gray-900 font-bold py-4 px-4 text-xl rounded" @click="reset" v-bind:disabled="active">Reset</button>
   </div>
</template>


<script>
import { mapActions } from 'vuex'

export default {
  name: "Controls",
  computed: {
    active () {
      return this.$store.state.clockRunning
    },
  },
  methods: {...mapActions(['start', 'stop', 'reset'])},
}
</script>