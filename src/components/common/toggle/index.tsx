import classNames from 'classnames'
import styles from './index.module.css'

interface ToggleProps {
  checked: boolean
  disabled?: boolean
  isLoading?: boolean
  className?: string
  onChange?: (checked: boolean) => void
}

const Toggle = ({
  checked,
  disabled,
  isLoading,
  className,
  onChange,
}: ToggleProps) => {
  const renderLoading = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="fill-blue dark:fill-blue-night"
      >
        <path d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" />
      </svg>
    )
  }

  return (
    <div className={classNames(styles['toggle'], className)}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span></span>
        {isLoading && renderLoading()}
      </label>
    </div>
  )
}

export default Toggle
