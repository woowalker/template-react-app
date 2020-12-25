import React from 'react'

function NoFound (props) {
  return (
    <div>
      <h2>找不到该页面</h2>
      <div onClick={() => { props.history.goBack() }}>nav back</div>
    </div>
  )
}

export default NoFound