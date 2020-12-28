import { makeAutoObservable } from "mobx"

export { default as $consts } from '@/plugins/const'
export { default as $api} from '@/plugins/api'

class DCommon {
  constructor () {
    this.data = {
      count: 0
    }
    makeAutoObservable(this)
  }

  increaseCount () {
    this.data.count++
  }
}

export default new DCommon()