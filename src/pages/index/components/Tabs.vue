<script setup lang="ts">
import { makgeolliConfig, miLuConfig, riceGrainConfig } from '../configs/index'
import Lists from './Lists.vue'
</script>

<template>
  <!-- n-tabs不满足需求，真实操了狗了 -->
  <zo-tabs default-key="1">
    <zo-tab label="休闲米酿" active-key="1" class="w100% h744px">
      <Lists :lists="riceGrainConfig" />
    </zo-tab>
    <zo-tab label="米酒（醪糟）" active-key="2" class="w100% h744px">
      <Lists :lists="makgeolliConfig" />
    </zo-tab>
    <zo-tab label="饮料型米露" active-key="3" class="w100% h744px">
      <Lists :lists="miLuConfig" />
    </zo-tab>
  </zo-tabs>
</template>

