<script setup lang="ts">
import Footer from './components/Footer.vue'
import Navigator from './components/Navigator.vue'
</script>

<template>
  <div class="wrapper w100% relative overflow-x-hidden">
    <Navigator />
    <main class="w100%">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
