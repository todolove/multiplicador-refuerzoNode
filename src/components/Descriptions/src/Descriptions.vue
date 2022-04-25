<script setup lang="ts">
import { ElCollapseTransition, ElDescriptions, ElDescriptionsItem, ElTooltip } from 'element-plus'
import { useDesign } from '@/hooks/web/useDesign'
import { propTypes } from '@/utils/propTypes'
import { ref, unref, PropType, computed, useAttrs, useSlots } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { DescriptionsSchema } from '@/types/descriptions'

const appStore = useAppStore()

const mobile = computed(() => appStore.getMobile)

const attrs = useAttrs()

const slots = useSlots()

const props = defineProps({
  title: propTypes.string.def(''),
  message: propTypes.string.def(''),
  collapse: propTypes.bool.def(true),
  schema: {
    type: Array as PropType<DescriptionsSchema[]>,
    default: () => []
  },
  data: {
    type: Object as PropType<any>,
    default: () => ({})
  }
})

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('descriptions')

const getBindValue = computed(() => {
  const delArr: string[] = ['title', 'message', 'collapse', 'schema', 'data', 'class']
  const obj = { ...attrs, ...props }
  for (const key in obj) {
    if (delArr.indexOf(key) !== -1) {
      delete obj[key]
    }
  }
  return obj
})

const getBindItemValue = (item: DescriptionsSchema) => {
  const delArr: string