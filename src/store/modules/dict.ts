import { defineStore } from 'pinia'
import { store } from '../index'

export interface DictState {
  isSetDict: boolean
  dictObj: Recordable
}

export const useDictStore = defineStore('dict', {
  state