import { ReactNode, BaseSyntheticEvent } from 'react'
import classNames from 'classnames'
import Icon from '../icon'
import styles from './index.module.css'

interface Props {
  children: ReactNode
  type?:
    | 'blue'
    | 'blue-alt'
    | 'red'
    | 'red-alt'
    | 'orange'
    | 'orange-alt'
    | 'grey'
    | 'grey-alt'
    | 'yellow'
    | 'yellow-alt'
    | 'white'
    | 'white-alt'
    | 'google'
    | 'facebook'
    | 'twitter'
    | 'disabled'
  size?: 'small' | 'medium' | 'large'
  ref?: any
  id?: string
  className?: string
  disabled?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
  onClick?: (e: BaseSyntheticEvent) => void
}

const Button = ({
  children,
  type = 'blue',
  size = 'medium',
  id,
  ref,
  className,
  disabled,
  icon,
  iconPosition = 'left',
  onClick,
}: Props) => {
  const buttonClass = classNames(
    styles['button'],
    styles[type],
    styles[size],
    disabled && styles['disabled'],
    className,
  )

  const handleClick = (e: BaseSyntheticEvent) => {
    if (disabled || type === 'disabled') {
      e.preventDefault()
      return
    }

    onClick?.(e)
  }

  const renderWithIcon = () => {
    const iconClassName = 'text-sm'

    return (
      <>
        {iconPosition === 'right' && children}
        <Icon
          className={classNames(
            styles['button-icon'],
            iconPosition === 'left'
              ? styles['button-icon--left']
              : styles['button-icon--right'],
            iconClassName,
          )}
          variant={icon || ''}
        />
        {iconPosition === 'left' && children}
      </>
    )
  }

  return (
    <button id={id} className={buttonClass} onClick={handleClick} ref={ref}>
      {icon ? renderWithIcon() : children}
    </button>
  )
}

export default Button
