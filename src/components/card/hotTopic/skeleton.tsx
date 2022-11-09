import classNames from 'classnames'

interface Props {
  className?: string
}

const HotTopicCardSkeleton = ({ className }: Props) => {
  return (
    <div
      className={classNames('h-full w-full animate-pulse bg-grey-5', className)}
    ></div>
  )
}

export default HotTopicCardSkeleton
