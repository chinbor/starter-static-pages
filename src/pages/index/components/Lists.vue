<script setup lang="ts">
import type { Lists } from '../configs/index'

const props = defineProps<{
  lists: Lists[]
}>()

const page = ref(1)
const cards = ref(props.lists.slice(0, 8))
const pageSize = 8
const count = Math.ceil(props.lists.length / 8)

const updatePage = (page: number) => {
  cards.value = props.lists.slice((page - 1) * pageSize, page * pageSize)
}
</script>

<template>
  <div class="w100% h100% pt56px pb-28px px80px box-border flex flex-col justify-between">
    <div class="grid grid-cols-4 grid-rows-2 grid-gap-60px w100% h570px">
      <div v-for="card in cards" :key="card.url" class=" bg-white relative card" animate-fade>
        <div class="text-18px font-400 text-center">
          <n-image width="275" height="216" class="mb-12px" :src="card.url" />
          <span>{{ card.name }}</span>
        </div>
        <div class="cover w100% h100% absolute top-0 left-0 bg-[rgba(0,0,0,0.3)] rounded-8px flex items-center justify-center">
          <div class="text-16px font-400 text-white w223px">
            <p flex>
              <span>产品名称：</span>
              <span class="inline-block">
                <span v-if="!Array.isArray(card.productName)">{{ card.productName }}</span>
                <template v-else>
                  <span v-for="(name, index) in card.productName" :key="index" class="block">{{ name }}</span>
                </template>
              </span>
            </p>
            <p v-if="card.desc">
              {{ card.desc }}
            </p>
            <p>
              单&emsp;&emsp;位：{{ card.unit }}
            </p>
            <p v-if="card.taste" flex>
              <span>口&emsp;&emsp;味：</span>
              <span class="inline-block">
                <span v-if="!Array.isArray(card.taste)">{{ card.taste }}</span>
                <template v-else>
                  <span v-for="(name, index) in card.taste" :key="index" class="block">{{ name }}</span>
                </template>
              </span>
            </p>
            <p>
              保&ensp;质&ensp;期：{{ card.shelfLife }}
            </p>
            <p>
              净&ensp;含&ensp;量：{{ card.netWeight }}
            </p>
            <p v-if="card.specification">
              规&emsp;&emsp;格：{{ card.specification }}
            </p>
            <p v-if="card.barcode">
              商品条码：{{ card.barcode }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="h25px flex justify-center">
      <n-pagination v-model:page="page" :page-count="count" @update:page="updatePage">
        <template #prev>
          <div class="prev w20px h20px rounded-50% bg-[#6CC4AA] relative" />
        </template>
        <template #next>
          <div class="next w20px h20px rounded-50% bg-[#6CC4AA] relative" />
        </template>
      </n-pagination>
    </div>
  </div>
</template>

<style lang="scss" scoped>
::v-deep(.n-pagination .n-pagination-item:not(.n-pagination-item--disabled).n-pagination-item--active) {
  border: none;
  color: #6CC4AA;
}

::v-deep(.n-pagination .n-pagination-item) {
  font-size: 18px;
  font-weight: 400;
  color: #555555;
}

::v-deep(.n-pagination .n-pagination-item:hover) {
  color: #6CC4AA;
}

::v-deep(.n-pagination .n-pagination-item.n-pagination-item--disabled) {
  opacity: .5;
}
</style>

<style lang="scss" scoped>
.prev::after {
  content: '';
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6.36px;
  height: 6.36px;
  border-top: 1px solid #FFFFFF;
  border-left: 1px solid #FFFFFF;
  transform: translate(-2px, -50%) rotate(-45deg);
}

.next::after {
  content: '';
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6.36px;
  height: 6.36px;
  border-bottom: 1px solid #FFFFFF;
  border-right: 1px solid #FFFFFF;
  transform: translate(-3px, -50%) rotate(-45deg);
}

.card:hover {
  .cover {
    backdrop-filter: blur(15px);
    transform: scale(1, 1);
    opacity: 1;
  }
}

.cover {
  backdrop-filter: blur(15px);
  transform: scale(0.5, 0.5);
  opacity: 0;
  transition: all 0.2s linear;
}
</style>
