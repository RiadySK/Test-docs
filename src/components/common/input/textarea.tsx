import cn from 'classnames'

interface Props {
  value: string
  name: string
  placeholder: string
  row?: number
  className?: string
  onChange: (text: string) => void
}

const InputTextArea = ({
  value,
  name,
  placeholder,
  row = 5,
  className,
  onChange,
}: Props): JSX.Element => {
  return (
    <div className={cn('relative mt-2 h-auto w-full', className)}>
      <textarea
        defaultValue={value}
        name={name}
        placeholder={placeholder}
        className="h-full w-full resize-none rounded-lg border border-gray-100 bg-white p-2 leading-normal text-gray-700 shadow-none outline-none focus:text-gray-700 focus:outline-none focus:ring-0 dark:border-gray-800 dark:bg-black dark:text-gray-300"
        rows={row}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  )
}

export default InputTextArea
