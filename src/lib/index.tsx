/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react'
import ReactDom from 'react-dom'
import Button from './button'

const App = () => {
  return (
    <div>
      <Button />
    </div>
  )
}
ReactDom.render(<App />, document.querySelector('#app'))
