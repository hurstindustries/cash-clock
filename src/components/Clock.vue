<template>
  <div class="clock">
    <div class="text-gray-400 text-xl">{{ timeDisplay }}</div>
    <div class="text-gray-600">Total Time Elapsed</div>
  </div>
</template>

<script>
export default {
  name: "Clock",
  props: {
    time: Number
  },
  computed: {
    timeDisplay: function(){
      var hours   = Math.floor(this.time / 3600);
      var minutes = Math.floor((this.time - (hours * 3600)) / 60);
      var seconds = this.time - (hours * 3600) - (minutes * 60);

      if (hours   < 10) {hours   = "0"+hours;}
      if (minutes < 10) {minutes = "0"+minutes;}
      if (seconds < 10) {seconds = "0"+seconds;}

      return hours+':'+minutes+':'+seconds;
    }
  }
};
</script>

<style scoped>
</style>
