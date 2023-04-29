<template>
  <v-app class="white" id="inspire">
    <div id="app">
      {{ message }}
    </div>
  </v-app>
</template>    
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
</script>
 