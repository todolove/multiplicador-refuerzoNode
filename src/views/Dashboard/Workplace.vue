<script setup lang="ts">
import { useTimeAgo } from '@/hooks/web/useTimeAgo'
import { ElRow, ElCol, ElSkeleton, ElCard, ElDivider, ElLink } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'
import { ref, reactive } from 'vue'
import { CountTo } from '@/components/CountTo'
import { formatTime } from '@/utils'
import { Echart } from '@/components/Echart'
import { EChartsOption } from 'echarts'
import { radarOption } from './echarts-data'
import { Highlight } from '@/components/Highlight'
import {
  getCountApi,
  getProjectApi,
  getDynamicApi,
  getTeamApi,
  getRadarApi
} from '@/api/dashboard/workplace'
import type { WorkplaceTotal, Project, Dynamic, Team } from '@/api/dashboard/workplace/types'
import { set } from 'lodash-es'

const loading = ref(true)

// 获取统计数
let totalSate = reactive<WorkplaceTotal>({
  project: 0,
  access: 0,
  todo: 0
})

const getCount = async () => {
  const res = await getCountApi().catch(() => {})
  if (res) {
    totalSate = Object.assign(totalSate, res.data)
  }
}

let projects = reactive<Project[]>([])

// 获取项目数
const getProject = async () => {
  const res = await getProjectApi().catch(() => {})
  if (res) {
    projects = Object.assign(projects, res.data)
  }
}

// 获取动态
let dynamics = reactive<Dynamic[]>([])

const getDynamic = async () => {
  const res = await getDynamicApi().catch(() => {})
  if (res) {
    dynamics = Object.assign(dynamics, res.data)
  }
}

// 获取团队
le