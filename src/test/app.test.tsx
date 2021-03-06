import React from 'react'
import renderer from 'react-test-renderer'
import Button from '@/lib/Button'

describe('App', () => {
  test('Button 组件的文案是 按钮', () => {
    const component = renderer.create(
      <Button>
        按钮
      </Button>
    )
    // @ts-ignore
    expect(component.toJSON().children[0]).toBe('按钮')
  })
})
