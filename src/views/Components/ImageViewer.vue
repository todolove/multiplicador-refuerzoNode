<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { createImageViewer } from '@/components/ImageViewer'
import { ElButton } from 'element-plus'
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

const open = () => {
  createImageViewer({
    urlList: [
      'https://img1.baidu.com/it/u=657828739,1486746195&fm=26&fmt=auto&gp=0.jpg',
      'https://img0.bai