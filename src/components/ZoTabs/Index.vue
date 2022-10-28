<script setup lang="ts">
import type { RendererElement, RendererNode, VNode } from 'vue'

type jiedian = VNode<RendererNode, RendererElement, { [key: string]: string }>

const props = defineProps<{
  defaultKey: string
}>()

const activeKey = ref(props.defaultKey)

const tabs: jiedian[] = useSlots().default!()

const onTabClick = (tab: jiedian) => {
  // NOTE: 属性会被解析为连线方式
  activeKey.value = tab.props!['active-key']
}

provide('activeKey', activeKey)
</script>

<template>
  <div class="flex items-center justify-center h76px text-20px text-[#555555] font-400 b-color-[#DAD6D6] b-b-1px">
    <div
      v-for="(item) in tabs" :key="item.props!['active-key']"
      class="h100% cursor-pointer w200px flex hover:(text-[#6CC4AA]) relative text-16px items-center justify-center select-none"
      :class="{ active: activeKey === item.props!['active-key'] }" @click="onTabClick(item)"
    >
      {{ item.props!.label }}
    </div>
  </div>
  <div class="max-w1440px my0 mx-auto">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.active {
  @apply b-b-2px b-color-[#6CC4AA] text-[#6CC4AA];
}
</style>
