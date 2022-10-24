import { useEffect, useState } from 'react'

import Modal from 'components/common/modal'
import { InputText } from 'components/common/input'
import styles from './index.module.css'

const LoginModal = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isShowLoginModal, setIsShowLoginModal] = useState<boolean>(false)

  useEffect(() => {
    console.log('username', username)
  }, [username])

  return (
    <>
      <div
        className="ml-2"
        onClick={() => setIsShowLoginModal(!isShowLoginModal)}
      >
        <kaskus-button text="Masuk" variant="primary"></kaskus-button>
      </div>
      {isShowLoginModal && (
        <Modal
          className={styles['loginModal']}
          onClose={() => setIsShowLoginModal(false)}
        >
          <div className="flex w-full">
            <div className="flex w-full flex-wrap rounded-md bg-white p-4 shadow-lg dark:bg-grey-6">
              <div className="mb-5 flex w-full items-center justify-between">
                <h3 className="m-0 text-2xl text-blue dark:text-blue-night">
                  Masuk
                </h3>
                <span className="flex text-sm">
                  atau&nbsp;
                  <a href="#" className="text-blue dark:text-blue-night">
                    Daftar
                  </a>
                </span>
              </div>
              <div className="mb-4 flex w-full flex-wrap">
                <label className="w-full">Username/Email</label>
                <InputText
                  className="w-full"
                  name="username"
                  value={username}
                  onChange={setUsername}
                />
              </div>
              <div className="mb-4 flex w-full flex-wrap">
                <label className="w-full">Password</label>
                <InputText
                  className="w-full"
                  name="password"
                  value={password}
                  type="password"
                  onChange={setPassword}
                />
              </div>
            </div>
            <div className="w-96">
              <img
                src="https://s.kaskus.id/assets/web_1.0/images/image-masuk.svg"
                alt="login"
                className="m-auto block"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default LoginModal
