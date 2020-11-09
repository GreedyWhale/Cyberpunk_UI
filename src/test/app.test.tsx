import React from 'react'
import renderer from 'react-test-renderer'
import Button from '@/lib/button'

describe('App', () => {
  test('Button 组件的文案是 按钮', () => {
    const component = renderer.create(<Button />)
    // @ts-ignore
    expect(component.toJSON().children[0]).toBe('按钮')
  })
})
