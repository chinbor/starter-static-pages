<script setup lang="ts">
import logo from '~/assets/images/logo.png'
import logoActive from '~/assets/images/logo-active.png'

const isUp = ref<boolean>(true)
const scrollTop = ref<number>(0)
const route = useRoute()
const curPath = ref<string>('')
let distance = 0
const menus = [
  {
    name: '关于乙元',
    path: '/about',
  },
  {
    name: '企业荣誉',
    path: '/honor',
  },
  {
    name: '产品展示',
    path: '/products',
  },
  {
    name: 'OEM代工',
    path: '/oem',
  },
]

useEventListener(window, 'scroll', (_evt) => {
  scrollTop.value = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop

  const scroll = scrollTop.value - distance
  distance = scrollTop.value

  if (scroll < 0)
    isUp.value = true

  else
    isUp.value = false
})

watch(() => route.path, (val) => {
  curPath.value = val
}, {
  immediate: true,
})
</script>

<template>
  <ul
    :class="{ 'bg-white!': scrollTop >= 50, 'top-[-70px]!': !isUp && scrollTop >= 100 }" transition-nav items-center
    h60px top-0 left-0 fixed="~" flex="~" z-1
    shadow-nav
    pl60px
    box-border
    class="bg-[rgba(0,0,0,0.1)] backdrop-blur-20px w-100%"
  >
    <li flex="~" items-center cursor-pointer select-none @click="$router.push('/')">
      <n-image v-show="scrollTop < 50" width="52" height="44" :src="logo" preview-disabled />
      <n-image v-show="scrollTop >= 50" width="52" height="44" :src="logoActive" preview-disabled />
    </li>
    <li
      v-for="(menu, index) in menus" :key="index"
      :class="{ 'text-black!': scrollTop >= 50, 'active': menu.path === curPath }" class="menu" cursor-pointer
      select-none text-16px font-400 text-white ml-40px @click="$router.push(menu.path)"
    >
      {{ menu.name }}
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.bg-white\! {
  .menu:after {
    background: $black;
  }

  .menu.active:after {
    background: $black;
  }
}

.menu {
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: -8px;
    left: 0px;
    background: $white;
    opacity: 0;
    transition: transform 0.2s ease-out, opacity 0.2s ease-out;
    transform-origin: 50% 0%;
    transform: scale(0.01, 1);
  }

  &:hover:after {
    opacity: 1;
    transform: scale(1, 1);
  }

  &.active {
    &:after {
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      position: absolute;
      bottom: -8px;
      left: 0px;
      background: $white;
      opacity: 1;
      transition: transform 0.2s ease-out, opacity 0.2s ease-out;
      transform-origin: 50% 0%;
      transform: scale(1, 1);
    }
  }
}
</style>
