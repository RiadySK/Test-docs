import { useEffect, useRef } from 'react'

const Captcha = () => {
  const captchaContainer = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js?hl=id'
    script.async = true
    script.onload = () => initCaptcha()
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const initCaptcha = () => {
    if (grecaptcha && captchaContainer) {
      grecaptcha.ready(() => {
        grecaptcha.render(captchaContainer.current, {
          sitekey: process.env.NEXT_PUBLIC_KASKUS_RECAPTCHA_KEY,
        })
      })
    }
  }

  return (
    <div className="mb-4 flex w-full flex-wrap">
      <div className="mb-4 w-full" ref={captchaContainer}></div>
      <p className="text-xs text-grey-5 dark:text-grey-4">
        Dengan klik Daftar, Agan telah menyetujui{' '}
        <span className="font-bold">
          <a
            className="text-blue dark:text-blue-night"
            href="/about/terms_of_service"
            target="_blank"
          >
            Syarat &amp; Ketentuan
          </a>{' '}
          serta{' '}
          <a
            className="text-blue dark:text-blue-night"
            href="/about/privacy_policy"
            target="_blank"
          >
            kebijakan Privasi KASKUS
          </a>
        </span>
      </p>
    </div>
  )
}

export default Captcha
