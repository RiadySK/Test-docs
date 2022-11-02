import cn from 'classnames'
import { forwardRef } from 'react'
import { BaseSyntheticEvent } from 'react'

interface SearchBoxProps {
  value?: string
  placeholder?: string
  className?: string
  onSubmit?: (keyword: string) => void
  onChange?: (keyword: string) => void
  onFocus?: (status: boolean) => void
}

const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>((props, ref) => {
  const {
    value,
    placeholder = 'Cari di sini',
    className,
    onSubmit,
    onChange,
    onFocus,
  } = props

  const handleChange = (e: BaseSyntheticEvent) => {
    onChange?.(e.target.value)
  }

  const handleFocus = (e: BaseSyntheticEvent) => {
    onFocus?.(true)
  }

  const handleSubmit = () => {
    if (value && onSubmit) {
      onSubmit(value)
    }
  }

  return (
    <div className={cn('relative mx-auto', className)}>
      <input
        className="h-9 w-full overflow-hidden rounded-3 border border-grey-2 bg-white pl-2 pr-10 text-sm text-grey-7 focus:outline-none dark:border-grey-5 dark:bg-grey-7 dark:text-grey-2"
        type="search"
        name="search"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        autoFocus
        autoComplete="off"
        ref={ref}
      />
      <button
        type="submit"
        className="absolute top-1/2 right-0 -translate-y-1/2 py-3 px-3 hover:opacity-75"
        onClick={handleSubmit}
      >
        <svg
          className="h-4 w-4 fill-current text-grey-5 dark:text-grey-2"
          viewBox="0 0 56.966 56.966"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
  )
})

export default SearchBox
