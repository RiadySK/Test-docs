import classNames from 'classnames'
import { Kreator } from '../../../types/creator'

interface CreatorProps extends Kreator {
  className?: string
}

const Creator = ({
  username,
  display_name,
  usertitle,
  top_threads,
  className,
  profilepicture,
}: CreatorProps) => {
  return (
    <div
      className={classNames(
        'rounded-3 p-3 dark:bg-grey-7 lg:shadow-md',
        className,
      )}
    >
      <div className="flex items-center justify-start pb-2">
        {/* TODO: Need to update later  */}
        <a href={'https://www.kaskus.co.id/@' + username}>
          <img
            className="mr-2 h-9 w-9 flex-none rounded-full object-cover"
            src={profilepicture}
            alt={username}
          />
        </a>
        <div className="mr-2 flex-1 overflow-hidden">
          {/* TODO: Need to update later  */}
          <a href={'https://www.kaskus.co.id/@' + username}>
            <div className="overflow-hidden text-ellipsis text-sm font-bold text-primary dark:text-primary-night ">
              {display_name}
            </div>
          </a>
          <div className="overflow-hidden text-ellipsis text-xs text-tertiary dark:text-tertiary-night">
            {usertitle}
          </div>
        </div>
        <div className="ml-auto w-16">
          <kaskus-button size="small" width="100%" text="Ikuti"></kaskus-button>
        </div>
      </div>
      {top_threads.map((item, i) => (
        <div key={i} className="flex items-center justify-start py-2">
          <div className="flex h-5 w-5 items-center justify-center bg-blue text-xs text-white dark:bg-blue-night">
            #{i + 1}
          </div>
          {/* TODO: Need to update later  */}
          <a
            href={'https://www.kaskus.co.id/thread/' + item.id}
            className="ml-4 flex-1 text-sm font-medium text-secondary dark:text-secondary-night"
          >
            {item.title}
          </a>
        </div>
      ))}
      <div className="pt-2">
        {/* TODO: Need to update later  */}
        <a
          href={'https://www.kaskus.co.id/@' + username + '/viewallthreads'}
          className="ml-auto text-sm font-bold text-blue dark:text-blue-night"
        >
          Lihat Thread Lainnya
        </a>
      </div>
    </div>
  )
}

export default Creator
