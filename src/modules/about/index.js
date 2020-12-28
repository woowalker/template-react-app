import React from 'react'
import { observer } from "mobx-react"
import DCommon, { $api, $consts } from '@/stores/common'

function About (props) {
  const { count } = DCommon.data
  return (
    <div>
      <h2>welcome to About page</h2>
      <h4>observer count：{count}</h4>
      <div onClick={() => {
        DCommon.increaseCount()
      }}>increase count</div>
      <h4>const：{$consts['APP/BASE_URL']}</h4>
      <div onClick={() => {
        $api['common/getOrgList']().then(data => {
          console.log(data)
        })
      }}>request test</div>
      <div onClick={() => { props.history.goBack() }}>nav back</div>
    </div>
  )
}

export default observer(About)