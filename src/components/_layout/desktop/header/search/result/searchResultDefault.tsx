import Icon from 'components/common/icon'
import { PARAMS_ROUTES, URL_SEARCH_PAGE } from 'constant/routes'
import { useSearchHistory, useSearchPopular } from 'services/search'

const SearchResultDefault = () => {
  const { data, isLoading } = useSearchPopular()
  const { keywords, removeKeyword, removeAllKeywords } = useSearchHistory()

  return (
    <>
      {!!keywords?.length && (
        <>
          <div className="mb-1 flex justify-between px-1">
            <div className="text-base font-medium">Riwayat Pencarian</div>
            <span
              className="block cursor-pointer text-sm text-tertiary"
              onClick={() => removeAllKeywords()}
            >
              Hapus semua
            </span>
          </div>
          <ul className="mb-5">
            {keywords.map((value, index) => (
              <li key={`${value}-${index}`}>
                <span className="flex w-full cursor-pointer items-center justify-between px-1 text-sm">
                  <a
                    href={URL_SEARCH_PAGE.replace(PARAMS_ROUTES.QUERY, value)}
                    className="w-full py-1 hover:bg-grey-1  dark:hover:bg-grey-6"
                  >
                    {value}
                  </a>
                  <Icon
                    variant="times"
                    className="h-5 w-5 p-1 hover:bg-grey-1 dark:hover:bg-grey-6"
                    onClick={() => removeKeyword(value)}
                  />
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
      {!isLoading && data?.data && (
        <>
          <div className="mb-1 px-1 text-base font-medium">
            Pencarian Terpopuler
          </div>
          <ul>
            {data.data.map((item, index) => {
              return (
                <li key={`${item}-${index}`}>
                  <a
                    href={URL_SEARCH_PAGE.replace(PARAMS_ROUTES.QUERY, item)}
                    className="block w-full cursor-pointer p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6"
                  >
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}

export default SearchResultDefault
