import classNames from 'classnames'
import { useState } from 'react'
import Icon from '../icon'
import styles from './index.module.css'

interface Prop {
  isThumbnail: boolean
  onChange: (isThumbnail: boolean) => void
}

const SwitchThumbnail = ({ isThumbnail, onChange }: Prop) => {
  return (
    <div className={styles['switchThumbnail']}>
      <div
        className={classNames(
          styles['thumbnail'],
          isThumbnail && styles['selected'],
        )}
        onClick={() => onChange(true)}
      >
        <Icon
          variant="window-maximize"
          className={classNames(
            isThumbnail ? 'text-white' : 'text-blue',
            'p-1',
          )}
        />
      </div>
      <div
        className={classNames(
          styles['compact'],
          !isThumbnail && styles['selected'],
        )}
        onClick={() => onChange(false)}
      >
        <Icon
          variant="list-ul"
          className={classNames(
            !isThumbnail ? 'text-white' : 'text-blue',
            'p-1',
          )}
        />
      </div>
    </div>
  )
}

export default SwitchThumbnail
