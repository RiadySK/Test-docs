import { useCommunityMock } from 'services/community'
import { useThreadMock } from 'services/thread'
import SearchResultItem from '../../../../../common/searchResult/searchResultItem'
import SearchResultItemLarge from '../../../../../common/searchResult/searchResultItemLarge'

interface Props {
  query: string
}

const MAX_RESULT = 3

const SearchResultSnippet = ({ query }: Props) => {
  const { data: dataCommunity, isLoading: isLoadingCommunity } =
    useCommunityMock(`?q=${query}`)
  const { data: dataThread, isLoading: isLoadingThread } = useThreadMock(query)

  return (
    <>
      <ul className="mb-2 text-secondary dark:text-secondary-night">
        {dataCommunity?.data.slice(0, MAX_RESULT).map((community) => {
          const url = `/forum/${community.id}/${community.slug}`
          return (
            <li
              key={community.id}
              className="p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6"
            >
              <a href={url} className="block w-full">
                {community.name}
              </a>
            </li>
          )
        })}
      </ul>
      <div className="text-medium px-1 pb-2 font-semibold text-primary dark:text-primary-night">
        Komunitas
      </div>
      <ul className="mb-2 text-secondary dark:text-secondary-night">
        {dataCommunity?.data.slice(0, MAX_RESULT).map((community) => {
          return (
            <SearchResultItem
              key={community.id}
              id={community.id}
              slug={community.slug}
              name={community.name}
              icon={community.icon}
              iconSize={30}
            />
          )
        })}
      </ul>
      <div className="text-medium px-1 pb-2 font-semibold text-primary dark:text-primary-night">
        Thread
      </div>
      <ul className="text-secondary dark:text-secondary-night">
        {dataThread?.data.slice(0, MAX_RESULT).map((thread) => {
          return (
            <SearchResultItemLarge
              key={thread.id}
              id={thread.id}
              slug={thread.slug}
              title={thread.title}
              thumbnail={thread.thumbnail}
            />
          )
        })}
      </ul>
      <kaskus-button
        class="mt-3 self-center"
        text="Lihat Selengkapnya"
      ></kaskus-button>
    </>
  )
}

export default SearchResultSnippet
