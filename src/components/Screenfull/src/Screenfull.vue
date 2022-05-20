<script setup lang="ts">
import { Icon } from '@/components/Icon'
import { useFullscreen } from '@vueuse/core'
import { propTypes } from '@/utils/propTypes'
import { useDesign } from '@/hooks/web/useDesign'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('screenfull')

defineProps({
  color: propTypes.string.def('')
})

const { toggle, isFullscreen } = useFullscreen()

c