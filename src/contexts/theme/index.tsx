import { createContext, ReactNode, useContext, useEffect } from 'react'
import { useTheme } from 'next-themes'

const BodyThemeContext = createContext<any>({})

export const useBodyTheme = () => useContext(BodyThemeContext)

export const BodyThemeContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const { theme } = useTheme()
  const isNight: boolean = theme === 'dark'

  const handleBodyClass = (): void => {
    isNight
      ? document.body.classList.add('nightmode')
      : document.body.classList.remove('nightmode')

    window && (window as any).eternal?.reinit()
  }

  useEffect(() => {
    handleBodyClass()
  }, [theme])

  return (
    <BodyThemeContext.Provider
      value={{
        isNight: isNight,
      }}
    >
      {children}
    </BodyThemeContext.Provider>
  )
}
