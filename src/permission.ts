import router from './router'
import { useAppStoreWithOut } from '@/store/modules/app'
import { useCache } from '@/hooks/web/useCache'
import type { RouteRecordRaw } from 'vue-router'
import { useTitle } from '@/hooks/web/useTitle'
import { useNProgress } from '@/hooks/web/useNProgress'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { useDictStoreWithOut } from '@/store/modules/dict'
import { usePageLoading } from '@/hooks/web/usePageLoading'
import { getDictApi } from '@/api/common'

const permissionStore = usePermissionStoreWithOut()

const appStore = useAppStoreWithOut()

const dictStore = useDictStoreWithOut()

const { wsCache } = useCache()

const { start, done } = useNProgress()

const { loadStart, loadDone } = usePageLoading()

const whiteList = ['/login'] // 不重定向白名单

router.beforeEach(async (to, from, next) => {
  start()
  loadStart()
  if (wsCache.get(appStore.getUserInfo)) {
    if (to.path === '/login') {
      