<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Sticky } from '@/components/Sticky'
import { ElAffix } from 'element-plus'

const { t } = useI18n()
</script>

<template>
  <ContentWrap :title="t('stickyDemo.sticky')">
    <Sticky :offset="90">
      <div style="padding: 10px; background-color: lightblue"> Sticky 距离顶部90px </div>
    </Sticky>

    <p style="margi