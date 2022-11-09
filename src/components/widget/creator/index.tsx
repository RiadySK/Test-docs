import classNames from 'classnames'

import Button from 'components/common/button'
import {
  PARAMS_ROUTES,
  URL_THREAD_DETAIL,
  URL_USER_PROFILE,
  URL_USER_THREAD_LIST,
} from 'constant/routes'
import { Kreator } from 'types/creator'

interface CreatorProps {
  className?: string
  item: Kreator
}

const Creator = ({
  item: {
    userid: id,
    username: name,
    usertitle: title,
    avatar: profile_picture,
    threads,
  },
  className,
}: CreatorProps) => {
  const profileUrl = URL_USER_PROFILE.replace(PARAMS_ROUTES.ID, id)

  const handleClickFollow = () => {
    alert('Follow Clicked')
  }

  return (
    <div
      className={classNames(
        'rounded-3 p-3 dark:bg-grey-7 lg:shadow-md',
        className,
      )}
    >
      <div className="flex items-center justify-start pb-2">
        <a href={profileUrl}>
          <img
            className="mr-2 h-9 w-9 flex-none rounded-full object-cover"
            src={profile_picture}
            alt={name}
          />
        </a>
        <div className="mr-2 flex-1 overflow-hidden">
          <a href={profileUrl}>
            <div className="overflow-hidden text-ellipsis text-sm font-bold text-primary dark:text-primary-night ">
              {name}
            </div>
          </a>
          <div className="overflow-hidden text-ellipsis text-xs text-tertiary dark:text-tertiary-night">
            {title}
          </div>
        </div>
        <div className="ml-auto w-16">
          <Button
            type="blue"
            className="w-full"
            size="small"
            onClick={handleClickFollow}
          >
            Ikuti
          </Button>
        </div>
      </div>
      {threads.map((item, i) => (
        <div key={i} className="flex items-center justify-start py-2">
          <div className="flex h-5 w-5 items-center justify-center bg-blue text-xs text-white dark:bg-blue-night">
            #{i + 1}
          </div>
          <a
            href={URL_THREAD_DETAIL.replace(PARAMS_ROUTES.ID, item.id).replace(
              PARAMS_ROUTES.SLUG,
              item.slug,
            )}
            className="ml-4 flex-1 text-sm font-medium text-secondary dark:text-secondary-night"
          >
            {item.title}
          </a>
        </div>
      ))}
      <div className="pt-2">
        <a
          href={URL_USER_THREAD_LIST.replace(PARAMS_ROUTES.ID, id)}
          className="ml-auto text-sm font-bold text-blue dark:text-blue-night"
        >
          Lihat Thread Lainnya
        </a>
      </div>
    </div>
  )
}

export default Creator
