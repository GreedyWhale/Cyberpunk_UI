import React from 'react'
import style from './style.module.scss'
import { ButtonProps } from '@/types/button'
import { useTheme } from './hooks'

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const [theme] = useTheme(props)

  return (
    <button
      data-theme={theme}
      data-type={props.type}
      data-disabled={props.disable}
      data-corner={props.corner}
      className={style.button}>
      <span>{props.children}</span>
    </button>
  )
}

Button.defaultProps = {
  type: 'ghost',
  normal: true,
  disable: false,
  corner: false
}

export default Button
