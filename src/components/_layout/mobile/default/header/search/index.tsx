import classNames from 'classnames'
import { useState } from 'react'
import Overlay from 'components/common/overlay'
import SearchResult from './result'
import Icon from 'components/common/icon'

const Search = () => {
  const [isShowSearchResult, setShowSearchResult] = useState<boolean>(false)

  return (
    <>
      <span
        className={classNames(
          'relative block cursor-pointer rounded-lg p-2 text-sm hover:bg-grey-2 dark:hover:bg-grey-7',
          isShowSearchResult && 'z-50 bg-grey-2 dark:bg-grey-7',
        )}
        onClick={() => setShowSearchResult(!isShowSearchResult)}
      >
        <Icon variant={isShowSearchResult ? 'times' : 'search'} />
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
