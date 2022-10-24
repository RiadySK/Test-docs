import { ReactElement, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useBodyTheme } from 'contexts/theme'
import { useRouter } from 'next/router'

interface HeaderProps {
  className?: string
}

const Header = ({ className }: HeaderProps): ReactElement => {
  const { theme } = useTheme()
  const router = useRouter()
  const { isNight } = useBodyTheme()
  const [logoURL, setLogoUrl] = useState<string>('logo-kaskus-white.png')

  useEffect(() => {
    if (!theme) return

    const themeLogo = isNight ? 'logo-kaskus-white.png' : 'logo-kaskus-full.svg'

    setLogoUrl(themeLogo)
  }, [theme])

  return (
    <>
      <div className="sticky top-0 left-0 z-50 w-full bg-white shadow-sm dark:bg-grey-7">
        <div className="mx-auto flex w-full justify-between px-2 py-3">
          <div className="flex items-center">
            <span className="p-1" onClick={() => router.push('/mobile/home')}>
              <kaskus-icon
                size="medium"
                variant="arrow-left"
                nopadding
              ></kaskus-icon>
            </span>
            <div className="relative ml-1">
              <img
                src={`https://s.kaskus.id/assets/wap_1.0/images/${logoURL}`}
                alt="Kaskus"
                width={128}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
