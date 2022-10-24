import cn from 'classnames'

interface Props {
  value: string | number
  name: string
  type?: string
  step?: string
  min?: string
  max?: string
  placeholder?: string
  disabled?: boolean
  className?: string
  onChange?: (text: string) => void
}

const InputText = ({
  value,
  name,
  type = 'text',
  step,
  min,
  max,
  placeholder,
  disabled,
  className,
  onChange,
}: Props): JSX.Element => {
  return (
    <div
      className={cn('relative w-full', placeholder ? 'h-10' : 'h-8', className)}
    >
      <input
        defaultValue={value}
        name={name}
        type={type}
        step={step}
        min={min}
        max={max}
        placeholder={placeholder}
        className={cn(
          'h-full w-full rounded-lg border border-gray-100 p-2 leading-normal shadow-none outline-none focus:text-gray-700 focus:outline-none focus:ring-0 dark:border-gray-800',
          disabled
            ? 'bg-gray-50 text-gray-400 dark:bg-gray-900 dark:text-gray-500'
            : 'bg-white text-gray-700 dark:bg-black dark:text-gray-300',
        )}
        onChange={(e) => onChange && onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  )
}

export default InputText
