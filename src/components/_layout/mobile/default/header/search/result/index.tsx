import classNames from 'classnames'
import { ReactElement, useEffect, useRef, useState } from 'react'

import { SearchBox } from 'components/common/input'
import SearchResultDefault from './searchResultDefault'
import SearchResultSnippet from './searchResultSnippet'
import styles from './index.module.css'
import { useSearchHistory } from 'services/search'

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
  const [keyword, setKeyword] = useState<string>('')
  const searchBoxRef = useRef<HTMLInputElement>(null)
  const { addKeyword } = useSearchHistory()

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        searchBoxRef.current?.focus()
      }, 300)
    }
  }, [isShow])

  const handleKeywordInput = (keyword: string): void => {
    setKeyword(keyword)
  }

  const handleSubmit = (): void => {
    addKeyword(keyword)
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
        <div className="flex border-b border-grey-2 px-2 py-3 dark:border-grey-5">
          <SearchBox
            className="flex-auto"
            value={keyword}
            ref={searchBoxRef}
            onChange={handleKeywordInput}
            onSubmit={handleSubmit}
          ></SearchBox>
          <button
            onClick={() => onClose()}
            className="ml-2 flex-none px-4 text-primary dark:text-primary-night"
          >
            Batal
          </button>
        </div>
        <div className={styles['searchResultModalBody']}>
          <div className="flex flex-col py-2 px-1">
            {keyword.length >= 3 ? (
              <SearchResultSnippet query={keyword} />
            ) : (
              <SearchResultDefault />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResult
