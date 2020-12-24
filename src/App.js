// App.js
import React from 'react'
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

class Timer {
  secondsPassed = 0

  constructor () {
    makeAutoObservable(this)
  }

  increaseTimer () {
    this.secondsPassed += 1
  }
}

const myTimer = new Timer()

function App (props) {
  return (
    <div>
      <div onClick={() => myTimer.increaseTimer()}>click me</div>
      <div>myTimer: {myTimer.secondsPassed}</div>
      <div onClick={() => { props.history.push('/about') }}>route to about</div>
    </div>
  )
}

export default observer(App)