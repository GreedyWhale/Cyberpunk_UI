import React from 'react'
import style from './style.module.scss'
import { ButtonProps } from '@/types/button'

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <button
      className={style.button}
      data-effects={props.effect}>
      <span>{props.children}</span>
    </button>
  )
}

Button.defaultProps = {
  effect: 1
}

export default Button
