import { useTimeAgo as useTimeAgoCore, UseTimeAgoMessages } from '@vueuse/core'
import { computed, unref } from 'vue'
import { useLocaleStoreWithOut } from '@/store/modules/locale'

const TIME_AGO_MESSAGE_MAP: {
  'zh-CN': UseTimeAgoMessages
  en: UseTimeAgoMessages
} = {
  'zh-CN': {
    justNow: '刚刚',
    invalid: '无效时间',
    past: (n) => (n.match(/\d/) ? `${n}前` : n),
    future: (n) => (n.m