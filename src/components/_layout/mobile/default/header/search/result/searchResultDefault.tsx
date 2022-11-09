import Icon from 'components/common/icon'
import { useSearchHistory, useSearchPopular } from 'services/search'

const SearchResultDefault = () => {
  const { data, isLoading } = useSearchPopular()
  const { keywords, removeKeyword, removeAllKeywords } = useSearchHistory()

  return (
    <>
      {!!keywords?.length && (
        <>
          <div className="center flex justify-between px-1 pb-2">
            <div className="text-medium font-semibold text-primary dark:text-primary-night">
              Riwayat Pencarian
            </div>
            <span
              className="text-sm text-tertiary dark:text-tertiary-night"
              onClick={() => removeAllKeywords()}
            >
              Hapus Semua
            </span>
          </div>
          <ul className="mb-2 px-1 text-secondary dark:text-secondary-night">
            {keywords.map((value, index) => (
              <li key={`${value}-${index}`}>
                <span className="flex w-full cursor-pointer items-center justify-between px-1 text-sm">
                  <a
                    className="w-full py-1 hover:bg-grey-1  dark:hover:bg-grey-6"
                    href={`/search?q-${value}`}
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
          <div className="text-medium px-1 pb-2 font-semibold text-primary dark:text-primary-night">
            Pencarian Populer
          </div>
          <ul className="px-1 text-secondary dark:text-secondary-night">
            {data.data.map((item, index) => {
              return (
                <li key={index} className="pb-2 text-sm">
                  <a href="#">{item}</a>
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
