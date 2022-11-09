import { SearchThread } from 'types/search'
import HighlightedText from '../typography/highlightedText'

interface Props {
  item: SearchThread
  query: string
}

const SearchResultItemLarge = ({ item, query }: Props) => {
  const { id, thumbnail, title, url } = item

  return (
    <li
      key={id}
      className="cursor-pointer p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6"
    >
      <a href={url} className="flex items-start justify-between">
        <div className="line-clamp-3">
          <HighlightedText keyword={query} text={title} />
        </div>
        <img
          width={80}
          height={80}
          src={thumbnail?.url}
          className="ml-2 rounded-3 rounded-bl-none object-contain"
          alt={title}
        />
      </a>
    </li>
  )
}

export default SearchResultItemLarge
