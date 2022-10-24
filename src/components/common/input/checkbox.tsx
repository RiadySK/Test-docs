import cn from 'classnames'

interface Props {
  checked: boolean
  name: string
  placeholder: string
  className?: string
  onChange: (value: boolean) => void
}

const InputCheckbox = ({
  checked,
  name,
  placeholder,
  className,
  onChange,
}: Props): JSX.Element => {
  return (
    <div className={cn('flex items-center', className)}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        className="overflow-hidden"
        onChange={(e) => onChange(e.target.checked)}
      />
      <label
        htmlFor={name}
        className="ml-2 flex cursor-pointer select-none items-center text-sm text-gray-700 dark:text-gray-300"
      >
        {placeholder}
      </label>
    </div>
  )
}

export default InputCheckbox
