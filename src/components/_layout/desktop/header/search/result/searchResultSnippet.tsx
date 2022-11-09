import Button from 'components/common/button'
import SearchResultItem from 'components/common/searchResult/searchResultItem'
import SearchResultItemLarge from 'components/common/searchResult/searchResultItemLarge'
import HighlightedText from 'components/common/typography/highlightedText'
import { PARAMS_ROUTES, URL_THREAD_LIST } from 'constant/routes'
import { useCommunityChannel } from 'services/community'
import { useSearchSnippet } from 'services/search'

interface Props {
  query: string
}

const MAX_RESULT = 3
const MAX_THREAD_RESULT = 6

const SearchResultSnippet = ({ query }: Props) => {
  const { data: dataCommunity } = useCommunityChannel()
  const { data: dataSearch } = useSearchSnippet(query)

  return (
    <>
      <ul className="mb-3 text-secondary dark:text-secondary-night">
        {dataCommunity?.data.slice(0, MAX_RESULT).map((community, index) => {
          const url = URL_THREAD_LIST.replace(PARAMS_ROUTES.ID, community.id)
          return (
            <li
              key={`${community.id}-${index}`}
              className="p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6"
            >
              <a href={url} className="block w-full">
                <HighlightedText keyword={query} text={community.name} />
              </a>
            </li>
          )
        })}
      </ul>
      <div className="text-medium px-1 pb-2 font-semibold text-primary dark:text-primary-night">
        Komunitas
      </div>
      <ul className="mb-3 text-secondary dark:text-secondary-night">
        {dataSearch?.data.communities
          .slice(0, MAX_RESULT)
          .map((community, index) => {
            return (
              <SearchResultItem
                key={`${community.id}-${index}`}
                id={community.id}
                slug={community.name}
                name={community.name}
                description={community.description}
                icon={community.icon.url}
                iconSize={40}
                query={query}
              />
            )
          })}
      </ul>
      <div className="text-medium px-1 pb-2 font-semibold text-primary dark:text-primary-night">
        Thread
      </div>
      <ul className="grid grid-cols-2 gap-x-2 text-secondary dark:text-secondary-night">
        {dataSearch?.data.threads
          .slice(0, MAX_THREAD_RESULT)
          .map((thread, index) => {
            const key = `${thread.id}-${index}`
            return (
              <SearchResultItemLarge key={key} item={thread} query={query} />
            )
          })}
      </ul>
      <Button className="mb-5 mt-6 self-center" type="blue">
        Lihat Selengkapnya
      </Button>
    </>
  )
}

export default SearchResultSnippet
