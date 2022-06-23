import type { App, Directive, DirectiveBinding } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { useCache } from '@/hooks/web/useCache'
import { intersection } from 'lodash-es'
import { isArray } from '@/utils/is'
import { useAppStoreWithOut } from '@/store/modules/app'

const { t } = useI18n()
const { wsCache } = useCache()
const appStore = useAppStoreWithOut()

// 全部权限
const all_permission = ['*.*.*']
const hasPermission = (value: string | string[]): boolean => {
  const permissions = wsCache.get(appStore.getUserInfo).permissions as string[]
  if (!value) {
    throw new Error(t('permission.hasPermission'))
  }
  if (!isArray(value)) {
    return permissions?.includes(value 