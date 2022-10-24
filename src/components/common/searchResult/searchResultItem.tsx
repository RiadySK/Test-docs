interface Props {
  id: string
  slug: string
  name: string
  description?: string
  icon: string
  iconSize: number
}

const SearchResultItem = ({
  id,
  slug,
  name,
  description,
  icon,
  iconSize,
}: Props) => {
  const url = `/forum/${id}/${slug}`

  let displayedCommunity
  if (description) {
    displayedCommunity = (
      <div className="w-0 flex-auto">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-primary dark:text-primary-night">
          {name}
        </div>
        <div className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-secondary dark:text-secondary-night">
          {description}
        </div>
      </div>
    )
  } else {
    displayedCommunity = (
      <div className="overflow-hidden text-ellipsis whitespace-nowrap text-primary dark:text-primary-night">
        {name}
      </div>
    )
  }

  return (
    <li
      key={id}
      className="cursor-pointer p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6"
    >
      <a href={url} className="flex items-center">
        <img
          width={iconSize}
          height={iconSize}
          src={icon}
          className="mr-2 object-contain"
          alt={icon}
        />
        {displayedCommunity}
      </a>
    </li>
  )
}

export default SearchResultItem
