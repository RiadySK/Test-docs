import { FC, ReactElement } from 'react'
import classNames from 'classnames'
import styles from './spinner.module.css'

interface Props {
  className?: string
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'grey'
  size?: 'small' | 'medium' | 'large'
}

const LoadingSpinner: FC<Props> = ({
  className,
  color = 'blue',
  size = 'medium',
}): ReactElement => {
  const spinnerClass = classNames(
    styles['spinner'],
    styles[color],
    styles[size],
    className,
  )

  return (
    <div className={spinnerClass}>
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

export default LoadingSpinner
