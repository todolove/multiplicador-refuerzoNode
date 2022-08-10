<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useI18n } from '@/hooks/web/useI18n'
import { Table } from '@/components/Table'
import { getUserListApi } from '@/api/login'
import { UserType } from '@/api/login/types'
import { ref, h } from 'vue'
import { ElButton } from 'element-plus'
import { TableColumn, TableSlotDefault } from '@/types/table'

interface Params {
  pageIndex?: number
  pageSize?: number
}

const { t } = useI18n()

const columns: TableColumn[] = [
  {
    field: 'index',
    label: t('userDemo.index'),
    type: 'index'
  },
  {
    field: 'username',
    label: t('userDemo.username')
  },
  {
    field: 'password',
    label: t('userDemo.password')
  },
  {
    field: 'role',
    label: t('userDemo.role')
  },
  {
    field: 'remark',
    label: t('userDemo.remark'),
    formatter: (row: UserType)