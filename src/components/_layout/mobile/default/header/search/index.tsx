import classNames from 'classnames'
import { useState } from 'react'
import Overlay from 'components/common/overlay'
import SearchResult from './result'

const Search = () => {
  const [isShowSearchResult, setShowSearchResult] = useState<boolean>(false)

  return (
    <>
      <span
        className={classNames(
          'relative block cursor-pointer rounded-lg text-sm hover:bg-grey-2 dark:hover:bg-grey-8',
          isShowSearchResult && 'z-50 bg-grey-2 dark:bg-grey-8',
        )}
        onClick={() => setShowSearchResult(!isShowSearchResult)}
      >
        <kaskus-icon
          size="medium"
          variant={isShowSearchResult ? 'times' : 'search'}
          noClick
        ></kaskus-icon>
      </span>
      {isShowSearchResult && (
        <>
          <SearchResult
            isShow={isShowSearchResult}
            onClose={() => setShowSearchResult(false)}
          />
          <Overlay onClick={() => setShowSearchResult(false)} zIndex={1} />
        </>
      )}
    </>
  )
}

export default Search
