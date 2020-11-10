/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react'
import ReactDom from 'react-dom'
// @ts-ignore
import Button from '@/lib/Button'

const App = () => {
  return (
    <div>
      <Button />
    </div>
  )
}
ReactDom.render(<App />, document.querySelector('#app'))
