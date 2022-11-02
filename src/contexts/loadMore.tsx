import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react'
import classNames from 'classnames'

import useIntersectionObserver from 'hooks/intersectionObserver'

const LoadMoreContext = createContext<any>({})

interface Props {
  children: ReactNode
  className?: string
  onVisible: () => void
}

const LoadMoreContextProvider = ({
  children,
  className,
  onVisible,
}: Props): ReactElement => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  useEffect(() => {
    if (isVisible) {
      onVisible()
    }
  }, [isVisible])

  return (
    <LoadMoreContext.Provider
      value={{
        isVisible,
        onVisible,
      }}
    >
      <div className={classNames('mx-auto my-4 block', className)} ref={ref}>
        {children}
      </div>
    </LoadMoreContext.Provider>
  )
}

export default LoadMoreContextProvider
