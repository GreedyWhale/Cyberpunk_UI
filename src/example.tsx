import React from 'react'
import ReactDom from 'react-dom'

import Button from '@/lib/Button'

const style = {
  height: '100vh',
  padding: '20px',
  background: '#000'
}
const App = () => (
  <div style={style}>
    <Button>按钮</Button>
  </div>
)
ReactDom.render(<App/>, document.querySelector('#app'))
