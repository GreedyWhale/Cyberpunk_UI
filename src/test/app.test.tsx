import React from 'react'
import renderer from 'react-test-renderer'

const App = () => <div>hello world</div>

describe('App', () => {
  test('App 文本内容是 hello world', () => {
    const component = renderer.create(<App />)
    expect(component.toJSON().children[0] === 'hello world')
  })
})
