import cn from 'classnames'

interface Props {
  options: string[] | any[]
  value: string
  id: string
  name: string
  placeholder?: string
  className?: string
  onChange: (value: string) => void
}

const InputSelect = ({
  options,
  value,
  id,
  name,
  placeholder,
  className,
  onChange,
}: Props): JSX.Element => {
  return (
    <div className={cn('flex items-center', className)}>
      <select
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((item, index) => {
          const optionValue = item.name

          return (
            <option key={`${optionValue}-${index}`} value="audi">
              {item.name}
            </option>
          )
        })}
      </select>
      {placeholder && (
        <label
          htmlFor={id}
          className="ml-2 flex cursor-pointer select-none items-center text-sm text-gray-700 dark:text-gray-300"
        >
          {placeholder}
        </label>
      )}
    </div>
  )
}

export default InputSelect
