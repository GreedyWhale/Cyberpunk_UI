import React, { useState, useEffect } from 'react'
import style from './style.module.scss'
import { ButtonProps } from '@/types/button'
import { useTheme } from './hooks'

const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const [theme] = useTheme(props)
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <button
      data-visible={visible}
      data-theme={theme}
      data-type={props.type}
      data-disabled={props.disable}
      data-corner={props.corner}
      className={style.button}>
      {props.disable && (
        <React.Fragment>
          <span className={style.corner}></span>
          <span className={style.corner}></span>
          <span className={style.corner}></span>
          <span className={style.corner}></span>
        </React.Fragment>
      )}
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
