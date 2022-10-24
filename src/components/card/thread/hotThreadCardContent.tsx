interface Props {
  title: string
  thumbnail: string
}

export default function HotThreadCardContent({ title, thumbnail }: Props) {
  return (
    <div className="flex text-primary dark:text-primary-night">
      <div className="flex-auto text-lg font-medium">{title}</div>
      <div className="ml-2 flex h-20 w-20 flex-none items-center">
        <img
          src={thumbnail}
          className="h-full w-full rounded-md rounded-bl-none"
          alt={title}
        />
      </div>
    </div>
  )
}
