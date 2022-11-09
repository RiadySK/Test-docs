import { ReactElement, ReactNode, useState } from 'react'
import classNames from 'classnames'
import Button from 'components/common/button'
import Overlay from 'components/common/overlay'
import { /* useChannelHeader,*/ useChannelHeaderInf } from 'services/channel'
import { Channel } from 'types/channel'
import { SearchBox } from 'components/common/input'
import styles from './index.module.css'
import LoadMoreContextProvider from 'contexts/loadMore'
import { LoadingGif } from 'components/common/loading'
import Icon from 'components/common/icon'

const ChannelBarCommunities = (): ReactElement => {
  const [showMenus, setShowMenus] = useState<boolean>(false)
  // const { data, error, isLoading } = useChannelHeader()
  const {
    data: dataInf,
    isLoading: isLoadingInf,
    size,
    setSize,
  } = useChannelHeaderInf()

  const renderChannelMenu = (item: Channel, index: number): ReactNode => {
    if (!item) return null

    return (
      <li
        key={`${item}-${index}`}
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
          <Icon variant={showMenus ? 'chevron-up' : 'chevron-down'} />
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
              <Button className="w-full" type="blue-alt">
                BUAT KOMUNITAS
              </Button>
            </div>
            <div className="flex w-full p-2">
              <SearchBox className="w-full" placeholder="Cari Komunitas" />
            </div>
            <div className="no-scrollbar max-h-96 w-full flex-grow-0 overflow-x-hidden">
              {!!dataInf?.data?.length && (
                <>
                  <div className="flex w-full items-center px-2 py-2 text-sm font-medium">
                    <Icon className="!h-5 !w-5 !text-sm" variant="users" />
                    <span className="ml-2">Komunitas Populer</span>
                  </div>
                  <ul className="flex w-full flex-wrap">
                    {dataInf.data.map(renderChannelMenu)}
                  </ul>
                </>
              )}
              {!isLoadingInf && (
                <LoadMoreContextProvider
                  className="p-2"
                  onVisible={() => {
                    setSize(size + 1)
                  }}
                >
                  <LoadingGif />
                </LoadMoreContextProvider>
              )}
            </div>
          </div>
        </div>
      </div>
      {showMenus && <Overlay onClick={() => setShowMenus(false)} zIndex={2} />}
    </>
  )
}

export default ChannelBarCommunities
