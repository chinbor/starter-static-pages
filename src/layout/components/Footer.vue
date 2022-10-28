<script setup lang="ts">
import wechat from '~/assets/images/wechat.png'
import douyin from '~/assets/images/douyin.png'
import miniProgram from '~/assets/images/mini-program.png'

const images = [
  {
    name: '微信账号',
    icon: 'wechat',
    image: wechat,
  },
  {
    name: '抖音账号',
    icon: 'douyin',
    image: douyin,
  },
  {
    name: '微信商城',
    icon: 'mini-mall',
    image: miniProgram,
  },
]
</script>

<template>
  <footer class="max-w100% h418px bg-[rgba(142,210,194,1)] p-t-70px px70px box-border flex flex-col">
    <div class="b-color-white w100% h100% b-t-0.7px b-b-0.7px flex">
      <div class="flex-1 text-white">
        <dl class="mt-34px">
          <dt class="text-18px">
            联系方式
          </dt>
          <dd class="flex items-center mt20px">
            <SvgIcon name="company" class="w24px h24px mr10px" />
            云南乙元食品开发有限公司
          </dd>
          <dd class="flex items-center mt20px">
            <SvgIcon name="map" class="w24px h24px mr10px" />
            云南省昭通市昭阳区昭阳工业园区滇粤产业园22栋
          </dd>
          <dd class="mt20px flex">
            <SvgIcon name="telephone" class="w24px h24px mr10px" />
            <span>
              服务电话：028-85374700&nbsp;&nbsp;&nbsp;&nbsp;0870-3193128
              <br>
              联系电话：136 3888 1107
            </span>
          </dd>
        </dl>
      </div>
      <div class="flex-1 flex justify-end">
        <div v-for="(image, index) in images" :key="index" class="w160px ml80px mt29px flex flex-col items-center">
          <div class="flex items-center text-white text-18px font-400 py10px px16px bg-[#6CC4AA] rounded-52px box-border mb20px">
            <SvgIcon :name="image.icon" class="w24px h24px mr8px" color="white" />
            {{ image.name }}
          </div>
          <n-image width="160" height="160" :src="image.image" preview-disabled />
        </div>
      </div>
    </div>
    <div class="right h60px leading-[60px] text-right text-white text-14px font-400 w100%">
      技术支持：零一跃动 | 备案号：xxxxxxxxxxxxxxx
    </div>
  </footer>
</template>

