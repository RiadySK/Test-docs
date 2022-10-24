import classNames from 'classnames'
import Overlay from 'components/common/overlay'
import { ReactElement, useState } from 'react'
import { useChannelHeader, useChannelMock } from '../../../../services/channel'
import { Channel } from '../../../../types/channel'
import { SearchBox } from '../../../common/input'
import styles from './index.module.css'

const ChannelBarCommunities = (): ReactElement => {
  const [showMenus, setShowMenus] = useState<boolean>(false)
  // Uncomment below to try using API -- maybe need to run from docker-compose / nginx or else may get CORS
  // const { data, isLoading } = useChannelHeader()
  const { data, isLoading } = useChannelMock()

  const renderChannelMenu = (item: Channel, index: number): ReactElement => {
    return (
      <li
        key={index}
        className={classNames(styles['channelBar-communitiesListItem'])}
      >
        <a
          className="text-grey-5 hover:bg-grey-1 dark:text-secondary-night dark:hover:bg-grey-6"
          title={item.name}
          href={`/forum/${item.id}?ref=header&med=forum_categories`}
        >
          {item.name}
        </a>
      </li>
    )
  }

  return (
    <>
      <div className={styles['channelBar-communities']}>
        <div
          className={classNames(
            styles['channelBar-communitiesButton'],
            'bg-white dark:bg-grey-7 lg:hover:bg-grey-1 lg:hover:dark:bg-grey-8',
          )}
          onClick={() => setShowMenus(!showMenus)}
        >
          <span className="mr-2">KOMUNITAS</span>
          <kaskus-icon
            variant={showMenus ? 'chevron-up' : 'chevron-down'}
            size="small"
            noPadding
            noClick
          />
        </div>
        <div
          className={classNames(
            styles['channelBar-communitiesDrawer'],
            showMenus && styles['active'],
            'bg-white text-grey-7 dark:bg-grey-7 dark:text-grey-1',
          )}
        >
          <div className="flex w-full flex-wrap">
            <div className="flex w-full p-2">
              <kaskus-button
                text="BUAT KOMUNITAS"
                width="100%"
                variant="secondary"
              ></kaskus-button>
            </div>
            <div className="flex w-full p-2">
              <SearchBox className="w-full" placeholder="Cari Komunitas" />
            </div>
            {!isLoading && data?.data && (
              <div className="no-scrollbar max-h-96 w-full flex-grow-0 overflow-x-hidden">
                <div className="flex w-full items-center px-2 py-2 text-sm font-medium">
                  <kaskus-icon variant="users" size="small" noPadding noClick />
                  <span className="ml-2">Komunitas Populer</span>
                </div>
                <ul className="flex w-full flex-wrap">
                  {data.data.map(renderChannelMenu)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {showMenus && <Overlay onClick={() => setShowMenus(false)} zIndex={2} />}
    </>
  )
}

export default ChannelBarCommunities
