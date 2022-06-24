import introJs from 'intro.js'
import { IntroJs, Step, Options } from 'intro.js'
import 'intro.js/introjs.css'
import { useI18n } from '@/hooks/web/useI18n'
import { useDesign } from '@/hooks/web/useDesign'

export const useIntro = (setps?: Step[], options?: Options) => {
  const { t } = useI18n()

  const { variables } = useDesign()

  const default