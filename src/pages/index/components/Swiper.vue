<script setup lang="ts">
import banner from '~/assets/images/banner1.png'
import banner2 from '~/assets/images/banner2.png'
import banner2Text from '~/assets/images/banner2-text.png'
import bannerText from '~/assets/images/banner1-text.png'
import bannerBg from '~/assets/images/banner1-bg.png'

const texts = [
  '据史载徐霞客传记记载',
  '“有数家当南峡，是为弯子桥，有卖浆者，连糟而啜之，即余地之酒酿也”',
  '我国用优质糙糯米酿酒，已有千年以上的历史',
  '形成了独特的米酒文化',
]
</script>

<template>
  <n-carousel autoplay>
    <section class="w100% h760px bg-[#070B0C]" flex="~">
      <div class="w50% h100%" relative="~">
        <n-image :src="banner" alt="" width="523" height="633" bottom-0 right-60px absolute="~" preview-disabled />
      </div>
      <div class="w50% h100%" bg-white>
        <div max-w615px text-right>
          <n-image :src="bannerText" alt="" width="491" height="100" mt-120px preview-disabled />
          <p v-for="(text, index) in texts" :key="index" text-16px font-400 class="color-[#555555] mt-20px fuck">
            {{ text }}
          </p>
          <div btn-1 mt40px @click="$router.push('/detail')">
            了解详情
          </div>
          <n-image :src="bannerBg" alt="" width="565" height="159" mt-40px preview-disabled />
        </div>
      </div>
    </section>
    <section class="w100% h760px bg-[#070B0C]" relative>
      <n-image class="w100% h100%" :src="banner2" alt="" preview-disabled object-fit="cover" />
      <div absolute top-120px class="left-50% translate-x-[-70%]">
        <n-image :src="banner2Text" alt="" width="870" height="476" block preview-disabled />
        <div class="btn-2" mt54px @click="$router.push('/about')">
          了解详情
        </div>
      </div>
    </section>
    <template #dots="{ total, currentIndex, to }">
      <ul class="flex m0 p0 absolute bottom-30px left-60px">
        <li
          v-for="index of total"
          :key="index"
          :class="{ ['is-active']: currentIndex === index - 1 }"
          class="inline-block w12px h12px mx2px my0 rounded-109px bg-[rgba(255,255,255,.4)] cursor-pointer transition-dot"
          @click="to(index - 1)"
        />
      </ul>
    </template>
  </n-carousel>
</template>

<style lang="scss" scoped>
.fuck:nth-child(2) {
  margin-top: 40px;
}

li.is-active {
  width: 40px;
  background: #fff;
}
</style>
