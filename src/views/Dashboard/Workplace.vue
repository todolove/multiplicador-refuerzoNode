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
let team = reactive<Team[]>([])

const getTeam = async () => {
  const res = await getTeamApi().catch(() => {})
  if (res) {
    team = Object.assign(team, res.data)
  }
}

// 获取指数
let radarOptionData = reactive<EChartsOption>(radarOption) as EChartsOption

const getRadar = async () => {
  const res = await getRadarApi().catch(() => {})
  if (res) {
    set(
      radarOptionData,
      'radar.indicator',
      res.data.map((v) => {
        return {
          name: t(v.name),
          max: v.max
        }
      })
    )
    set(radarOptionData, 'series', [
      {
        name: `xxx${t('workplace.index')}`,
        type: 'radar',
        data: [
          {
            value: res.data.map((v) => v.personal),
            name: t('workplace.personal')
          },
          {
            value: res.data.map((v) => v.team),
            name: t('workplace.team')
          }
        ]
      }
    ])
  }
}

const getAllApi = async () => {
  await Promise.all([getCount(), getProject(), getDynamic(), getTeam(), getRadar()])
  loading.value = false
}

getAllApi()

const { t } = useI18n()
</script>

<template>
  <div>
    <ElCard shadow="never">
      <ElSkeleton :loading="loading" animated>
        <ElRow :gutter="20" justify="space-between">
          <ElCol :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
            <div class="flex items-center">
              <img
                src="@/assets/imgs/avatar.jpg"
                alt=""
                class="w-70px h-70px rounded-[50%] mr-20px"
              />
              <div>
                <div class="text-20px text-700">
                  {{ t('workplace.goodMorning') }}，Archer，{{ t('workplace.happyDay') }}
                </div>
                <div class="mt-10px text-14px text-gray-500">
                  {{ t('workplace.toady') }}，20℃ - 32℃！
                </div>
              </div>
            </div>
          </ElCol>
          <ElCol :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
            <div class="flex h-70px items-center justify-end <sm:mt-20px">
              <div class="px-8px text-right">
                <div class="text-14px text-gray-400 mb-20px">{{ t('workplace.project') }}</div>
                <CountTo
                  class="text-20px"
                  :start-val="0"
                  :end-val="totalSate.project