import { useState, useRef } from 'react'

import { SearchBox } from 'components/common/input'
import Overlay from 'components/common/overlay'
import SearchResult from './result'

const Search = () => {
  const [keyword, setKeyword] = useState<string>('')
  const [isShowSearchDialog, setShowSearchDialog] = useState<boolean>(false)
  const searchBoxRef = useRef<HTMLInputElement>(null)

  const handleKeywordInput = (keyword: string) => {
    setKeyword(keyword)
  }

  const handleSearchFocus = (status: boolean) => {
    setShowSearchDialog(status)
  }

  return (
    <>
      <SearchBox
        className="z-10 flex-shrink-0 flex-grow"
        onChange={handleKeywordInput}
        onFocus={handleSearchFocus}
        value={keyword}
        ref={searchBoxRef}
      ></SearchBox>
      {isShowSearchDialog && (
        <>
          <SearchResult keyword={keyword} />
          <Overlay onClick={() => setShowSearchDialog(false)} zIndex={0} />
        </>
      )}
    </>
  )
}

export default Search
