<script setup lang="ts">
import { Form } from '@/components/Form'
import { PropType, computed, unref, ref } from 'vue'
import { propTypes } from '@/utils/propTypes'
import { ElButton } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import { useForm } from '@/hooks/web/useForm'
import { findIndex } from '@/utils'
import { cloneDeep } from 'lodash-es'
import { FormSchema } from '@/types/form'

const { t } = useI18n()

const props = defineProps({
  // 生成Form的布局结构数组
  schema: {
    type: Array as PropType<FormSchema[]>,
    default: () => []
  },
  // 是否需要栅格布局
  isCol: propTypes.bool.def(false),
  // 表单label宽度
  labelWidth: propTypes.oneOfType([String, Number]).def('auto'),
  // 操作按钮风格位置
  layout: propTypes.string.validate((v: string) => ['inline', 'bottom'].includes(v)).def('inline'),
  // 底部按钮的对齐方式
  buttomPosition: prop