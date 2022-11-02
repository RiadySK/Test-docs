import classNames from 'classnames'
import SearchResultDefault from './searchResultDefault'
import SearchResultSnippet from './searchResultSnippet'

import styles from './searchResultSnippet.module.css'

interface Props {
  className?: string
  keyword: string
}

const SearchResult = ({ className, keyword }: Props) => {
  let displayedResult
  if (keyword.length >= 3) {
    displayedResult = <SearchResultSnippet query={keyword} />
  } else {
    displayedResult = <SearchResultDefault />
  }

  return (
    <div
      className={classNames(
        className,
        styles['searchResultSnippet'],
        'dark:border-grey-5 dark:bg-grey-7 dark:text-primary-night',
      )}
    >
      {displayedResult}
    </div>
  )
}

export default SearchResult
