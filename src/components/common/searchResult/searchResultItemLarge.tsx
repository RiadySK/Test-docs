import { Image } from '../../../types/image'

interface Props {
  id: string
  slug: string
  title: string
  thumbnail: Image
}

const SearchResultItemLarge = ({ id, slug, title, thumbnail }: Props) => {
  const url = `/thread/${id}/${slug}`
  return (
    <li
      key={id}
      className="cursor-pointer p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6"
    >
      <a href={url} className="flex items-start justify-between">
        <div className="line-clamp-3">{title}</div>
        <img
          width={80}
          height={80}
          src={thumbnail.url}
          className="ml-2 rounded-3 rounded-bl-none object-contain"
          alt={thumbnail.url}
        />
      </a>
    </li>
  )
}

export default SearchResultItemLarge
