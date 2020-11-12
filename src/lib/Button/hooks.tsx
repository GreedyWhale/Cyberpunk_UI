import { useEffect, useState } from 'react'
import { ButtonProps } from '@/types/button'

export function useTheme (props: ButtonProps) {
  const [theme, setTheme] = useState('')
  useEffect(() => {
    switch (true) {
      case props.danger:
        setTheme('danger')
        break
      case props.safety:
        setTheme('safety')
        break
      default:
        setTheme('normal')
        break
    }
  }, [props])

  return [theme, setTheme]
}
