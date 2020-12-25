import React from 'react'

function About (props) {
  return (
    <div>
      <h2>welcome to About page</h2>
      <div onClick={() => { props.history.goBack() }}>nav back</div>
    </div>
  )
}

export default About