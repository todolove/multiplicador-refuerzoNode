<script lang="tsx">
import { computed, defineComponent, unref, PropType } from 'vue'
import { ElMenu, ElScrollbar } from 'element-plus'
import { useAppStore } from '@/store/modules/app'
import { usePermissionStore } from '@/store/modules/permission'
import { useRenderMenuItem } from './components/useRenderMenuItem'
import { useRouter } from 'vue-router'
import { isUrl } from '@/utils/is'
import { useDesign } from '@/hooks/web/useDesign'
import { Layou