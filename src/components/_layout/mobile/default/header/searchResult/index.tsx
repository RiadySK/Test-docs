import classNames from 'classnames'
import { ReactElement, useEffect, useRef, useState } from 'react'

import { SearchBox } from 'components/common/input'
import SearchResultDefault from './searchResultDefault'
import SearchResultSnippet from './searchResultSnippet'
import styles from './index.module.css'

interface SearchResultProps {
  isShow: boolean
  className?: string
  onClose: () => void
}

const SearchResult = ({
  isShow,
  className,
  onClose,
}: SearchResultProps): ReactElement => {
  const searchBoxRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    isShow
      ? document.body.classList.add('overflow-hidden')
      : document.body.classList.remove('overflow-hidden')
  }, [isShow])

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        searchBoxRef.current?.focus()
      }, 300)
    }
  }, [isShow])

  const [keyword, setKeyword] = useState<string>('')

  const handleKeywordInput = (keyword: string) => {
    setKeyword(keyword)
  }

  let displayedResult
  if (keyword.length >= 3) {
    displayedResult = <SearchResultSnippet query={keyword} />
  } else {
    displayedResult = <SearchResultDefault />
  }

  return (
    <>
      <div
        className={classNames(
          styles['searchResultModal'],
          isShow && styles['active'],
          'bg-white dark:bg-grey-7',
          className,
        )}
      >
        <div className="flex border-b border-grey-2 px-4 py-3 dark:border-grey-5">
          <SearchBox
            className="flex-auto"
            onChange={handleKeywordInput}
            value={keyword}
            ref={searchBoxRef}
          ></SearchBox>
          <button
            onClick={() => onClose()}
            className="ml-2 flex-none px-4 text-primary dark:text-primary-night"
          >
            Batal
          </button>
        </div>
        <div className={styles['searchResultModalBody']}>
          <div className="flex flex-col py-4 px-1">{displayedResult}</div>
        </div>
      </div>
    </>
  )
}

export default SearchResult
