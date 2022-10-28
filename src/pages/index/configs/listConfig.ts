import mn1 from '~/assets/images/mn-1.png'
import mn2 from '~/assets/images/mn-2.png'
import mn3 from '~/assets/images/mn-3.png'
import mn4 from '~/assets/images/mn-4.png'
import mn5 from '~/assets/images/mn-5.png'
import mn6 from '~/assets/images/mn-6.png'
import mn7 from '~/assets/images/mn-7.png'
import mn8 from '~/assets/images/mn-8.png'
import mn9 from '~/assets/images/mn-9.png'
import mn10 from '~/assets/images/mn-10.png'
import mn11 from '~/assets/images/mn-11.png'
import mn12 from '~/assets/images/mn-12.png'
import mj1 from '~/assets/images/mj-1.png'
import mj2 from '~/assets/images/mj-2.png'
import mj3 from '~/assets/images/mj-3.png'
import mj4 from '~/assets/images/mj-4.png'
import mj5 from '~/assets/images/mj-5.png'
import mj6 from '~/assets/images/mj-6.png'
import mj7 from '~/assets/images/mj-7.png'
import ml1 from '~/assets/images/ml-1.png'
import ml2 from '~/assets/images/ml-2.png'
import ml3 from '~/assets/images/ml-3.png'
import ml4 from '~/assets/images/ml-4.png'
import ml5 from '~/assets/images/ml-5.png'
import ml6 from '~/assets/images/ml-6.png'

export interface Lists {
  name?: string
  url?: string
  productName?: string | string[]
  desc?: string
  unit?: string
  taste?: string | string[]
  shelfLife?: string
  netWeight?: string
  specification?: string
  barcode?: string
}

export const riceGrainConfig: Lists[] = [
  {
    name: '无醇米酿·原味/蜂蜜味',
    url: mn1,
    productName: '上贝-无醇米酿',
    desc: '每一口都尝得到甜头',
    unit: '袋',
    taste: '原味/蜂蜜味',
    shelfLife: '12个月',
    netWeight: '散装称重',
    specification: '5千克/箱',
  },
  {
    name: '无醇米酿·桂花味/玫瑰味',
    url: mn2,
    productName: '上贝-无醇米酿',
    desc: '每一口都尝得到甜头',
    unit: '袋',
    taste: '桂花味/玫瑰味',
    shelfLife: '12个月',
    netWeight: '散装称重',
    specification: '5千克/箱',
  },
  {
    name: '米酿酸奶·原味/椰果味/玫瑰味',
    url: mn3,
    productName: '上贝-米酿酸奶',
    desc: '双蛋白发酵·更营养·更健康',
    unit: '袋',
    taste: '原味/椰果味/玫瑰味',
    shelfLife: '12个月',
    netWeight: '160mL',
    specification: '160mLX30袋/箱',
  },
  {
    name: '米酿酸奶·原味/椰果味/玫瑰味',
    url: mn4,
    productName: '上贝-米酿酸奶',
    desc: '双蛋白发酵·更营养·更健康',
    unit: '瓶',
    taste: '原味/椰果味/玫瑰味',
    shelfLife: '12个月',
    netWeight: '240mL',
    specification: '240mLX30瓶/箱',
  },
  {
    name: '浊酒·玫瑰米酿',
    url: mn5,
    productName: '上贝-桂花米酒',
    unit: '瓶',
    taste: '玫瑰味',
    shelfLife: '12个月',
    netWeight: '375mL/500mL',
  },
  {
    name: '浊酒·桂花米酿',
    url: mn6,
    productName: '上贝-桂花米酒',
    unit: '瓶',
    taste: '桂花味',
    shelfLife: '12个月',
    netWeight: '375mL/500mL',
  },
  {
    name: '营养米酿·原味/桂花味',
    url: mn7,
    productName: '营养米酿',
    desc: '营养美味·喝过你最红',
    unit: '袋',
    taste: '原味/桂花味',
    shelfLife: '12个月',
    netWeight: '散装称重',
  },
  {
    name: '营养米酿·紫米味/银耳味',
    url: mn8,
    productName: '营养米酿',
    desc: '营养美味·喝过你最红',
    unit: '袋',
    taste: '紫米味/银耳味',
    shelfLife: '12个月',
    netWeight: '散装称重',
  },
  {
    name: '米酿布丁·原味/乳酸菌味',
    url: mn9,
    productName: '米酿布丁',
    desc: '营养美味·Q弹爽口',
    unit: '盒',
    taste: '原味/乳酸菌味',
    shelfLife: '12个月',
    netWeight: '散装称重',
  },
  {
    name: '米酿布丁·草莓味/椰果味',
    url: mn10,
    productName: '米酿布丁',
    desc: '营养美味·Q弹爽口',
    unit: '盒',
    taste: '草莓味/椰果味',
    shelfLife: '12个月',
    netWeight: '散装称重',
  },
  {
    name: '吸吸米酿·银耳味/原味',
    url: mn11,
    productName: '吸吸米酿',
    desc: '营养美味·喝过你最红',
    unit: '袋',
    taste: '银耳味/原味',
    shelfLife: '12个月',
    netWeight: '散装称重',
  },
  {
    name: '吸吸米酿·桂花味/紫米味',
    url: mn12,
    productName: '吸吸米酿',
    desc: '营养美味·喝过你最红',
    unit: '袋',
    taste: '桂花味/紫米味',
    shelfLife: '12个月',
    netWeight: '散装称重',
  },
]

export const makgeolliConfig: Lists[] = [
  {
    name: '甜米酒·草本酒曲',
    url: mj1,
    productName: '上贝-甜米酒',
    desc: '草本酒曲·双曲发酵',
    unit: '瓶',
    shelfLife: '12个月',
    netWeight: '900克',
    specification: '900克X6瓶/箱',
    barcode: '39180',
  },
  {
    name: '甜米酒·随饮随倒',
    url: mj2,
    productName: '上贝-甜米酒',
    desc: '随饮随倒·快乐分享',
    unit: '袋',
    shelfLife: '12个月',
    netWeight: '500克',
    specification: '500克X20瓶/箱',
    barcode: '31023',
  },
  {
    name: '手工醪糟·原汁米酒',
    url: mj3,
    productName: '上贝-手工醪糟',
    desc: '手工醪糟·原汁米酒',
    unit: '瓶',
    shelfLife: '12个月',
    netWeight: '600克',
    specification: '600克X8瓶/箱',
    barcode: '39258',
  },
  {
    name: '原味醪糟·精心酿造',
    url: mj4,
    productName: '璞米佳-醪糟米酒',
    desc: '精心酿造·口口香甜',
    unit: '瓶',
    shelfLife: '18个月',
    netWeight: '660克',
    specification: '660克X12瓶/箱',
    barcode: '38572',
  },
  {
    name: '紫米醪糟·口口香甜',
    url: mj5,
    productName: '紫米醪糟米酒',
    desc: '精心酿造·口口香甜',
    unit: '瓶',
    shelfLife: '18个月',
    netWeight: '660克',
    specification: '660克X12瓶/箱',
    barcode: '38572',
  },
  {
    name: '甜米酒',
    url: mj6,
    productName: '璞米佳-甜米酒',
    unit: '碗（PET）',
    shelfLife: '12个月',
    netWeight: '880克',
  },
  {
    name: '甜米酒/红糖米酒/紫米酒',
    url: mj7,
    productName: ['璞米佳-甜米酒', '红糖米酒', '紫米酒'],
    unit: '碗（PET）',
    shelfLife: '12个月',
    netWeight: '400克',
  },
]

export const miLuConfig: Lists[] = [
  {
    name: '无醇米酿·原味',
    url: ml1,
    productName: '糯U益-米露',
    desc: '发酵轻饮·零脂肪',
    unit: '瓶',
    taste: '原味',
    shelfLife: '12个月',
    netWeight: '410毫升',
    barcode: '37735',
  },
  {
    name: '无醇米酿·玫瑰味',
    url: ml2,
    productName: '糯U益-米露',
    desc: '发酵轻饮·零脂肪',
    unit: '瓶',
    taste: '玫瑰味',
    shelfLife: '12个月',
    netWeight: '410毫升',
    barcode: '37735',
  },
  {
    name: '无醇米酿·桂花味',
    url: ml3,
    productName: '糯U益-米露',
    desc: '发酵轻饮·零脂肪',
    unit: '瓶',
    taste: '黑糖味',
    shelfLife: '12个月',
    netWeight: '410毫升',
    barcode: '37735',
  },
  {
    name: '无醇米酿·蜂蜜味',
    url: ml4,
    productName: '糯U益-米露',
    desc: '发酵轻饮·零脂肪',
    unit: '瓶',
    taste: '蜂蜜味',
    shelfLife: '12个月',
    netWeight: '410毫升',
    barcode: '37735',
  },
  {
    name: '无醇米露·原味/玫瑰味/乳酸菌味',
    url: ml5,
    productName: '无醇米露',
    desc: '只有玫瑰和米露',
    unit: '瓶(玻璃)',
    taste: ['原味/玫瑰味', '乳酸菌味'],
    shelfLife: '12个月',
    netWeight: '300ML',
  },
  {
    name: '米露·原味/玫瑰味',
    url: ml6,
    productName: '原味米露',
    desc: '只有玫瑰和米露',
    unit: '瓶(玻璃)',
    taste: '原味/玫瑰味',
    shelfLife: '12个月',
    netWeight: '300ML',
  },
]
