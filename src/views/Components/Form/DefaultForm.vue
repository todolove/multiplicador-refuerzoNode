<script setup lang="ts">
import { Form } from '@/components/Form'
import { reactive, ref, onMounted, computed } from 'vue'
import { useI18n } from '@/hooks/web/useI18n'
import { useIcon } from '@/hooks/web/useIcon'
import { ContentWrap } from '@/components/ContentWrap'
import { useAppStore } from '@/store/modules/app'
import { FormSchema } from '@/types/form'
import { ComponentOptions } from '@/types/components'

const appStore = useAppStore()

const { t } = useI18n()

const isMobile = computed(() => appStore.getMobile)

const restaurants = ref<Recordable[]>([])
const querySearch = (queryString: string, cb: Fn) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
const createFilter = (queryString: string) => {
  return (restaurant: Recordable) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' }
  ]
}
const handleSelect = (item: Recordable) => {
  console.log(item)
}
onMounted(() => {
  restaurants.value = loadAll()
})

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const options = ref<ComponentOptions[]>(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`
  }))
)
const options2 = ref<ComponentOptions[]>(
  Array.from({ length: 10 }).map((_, idx) => {
    const label = idx + 1
    return {
      value: `Group ${label}`,
      label: `Group ${label}`,
      options: Array.from({ length: 10 }).map((_, idx) => ({
        value: `Option ${idx + 1 + 10 * label}`,
        label: `${initials[idx % 10]}${idx 