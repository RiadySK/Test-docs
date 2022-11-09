import classNames from 'classnames'
import { ReactElement, useState } from 'react'
import { useUser } from 'services/user'
import Icon from 'components/common/icon'
import Button from 'components/common/button'
import Overlay from 'components/common/overlay'
import HeaderMenuDrawer from '../menuDrawer'

const Create = (): ReactElement => {
  const [showMenus, setShowMenus] = useState<boolean>(false)
  const { data, isLoading } = useUser()

  if (isLoading && !data?.data) {
    return <></>
  }

  return (
    <>
      <div className="relative">
        <div className="flex" onClick={() => setShowMenus(!showMenus)}>
          <span
            className={classNames(
              'relative block cursor-pointer rounded-lg p-2 text-sm hover:bg-grey-2 dark:hover:bg-grey-7 lg:hidden lg:dark:hover:bg-grey-8',
              showMenus && 'z-50 bg-grey-2 dark:bg-grey-7',
            )}
          >
            <Icon variant={showMenus ? 'times' : 'pencil'} />
          </span>
          <span className={classNames('hidden lg:flex', showMenus && 'z-50')}>
            <Button type="blue-alt" icon={showMenus ? 'times' : 'pencil'}>
              Buat Thread
            </Button>
          </span>
        </div>
        <HeaderMenuDrawer isShow={showMenus} className="lg:min-w-max">
          <div className="flex w-full flex-wrap p-6">
            <div className="mb-4 w-full text-base font-semibold text-grey-8 dark:text-grey-2">
              Buat Post
            </div>
            <div className="flex w-full items-center justify-around">
              <a
                className="flex flex-grow-0 flex-col justify-center text-center !no-underline hover:opacity-80"
                href="/forum/quicknewthread/?thread_type=1&amp;ref=all_create&amp;med=quick_create_thread&amp;utm_content=link_forum_landing&amp;utm_campaign=top_right_button"
              >
                <span className="overflow-hidden rounded-full bg-blue/10 p-5 text-blue dark:text-blue-night">
                  <Icon className="!h-8 !w-8 !text-2xl" variant="file-alt" />
                </span>
                <p className="mt-2 text-xs font-medium text-secondary dark:text-secondary-night">
                  Teks
                </p>
              </a>{' '}
              <a
                className="flex flex-grow-0 flex-col justify-center text-center !no-underline hover:opacity-80"
                href="/forum/quicknewthread/?thread_type=3&amp;ref=all_create&amp;med=quick_create_thread&amp;utm_content=link_forum_landing&amp;utm_campaign=top_right_button"
              >
                <span className="overflow-hidden rounded-full bg-blue/10 p-5 text-blue dark:text-blue-night">
                  <Icon className="!h-8 !w-8 !text-2xl" variant="image" />
                </span>
                <p className="mt-2 text-xs font-medium text-secondary dark:text-secondary-night">
                  Gambar
                </p>
              </a>{' '}
              <a
                className="flex flex-grow-0 flex-col justify-center text-center !no-underline hover:opacity-80"
                href="/forum/quicknewthread/?thread_type=2&amp;ref=all_create&amp;med=quick_create_thread&amp;utm_content=link_forum_landing&amp;utm_campaign=top_right_button"
              >
                <span className="overflow-hidden rounded-full bg-blue/10 p-5 text-blue dark:text-blue-night">
                  <Icon className="!h-8 !w-8 !text-2xl" variant="play-circle" />
                </span>
                <p className="mt-2 text-xs font-medium text-secondary dark:text-secondary-night">
                  Video
                </p>
              </a>
            </div>
          </div>
        </HeaderMenuDrawer>
        {showMenus && (
          <Overlay onClick={() => setShowMenus(false)} zIndex={19} />
        )}
      </div>
    </>
  )
}

export default Create
