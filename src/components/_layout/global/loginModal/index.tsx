import { useState } from 'react'

import { InputText } from 'components/common/input'
import Modal from 'components/common/modal'
import Button from 'components/common/button'
import styles from './index.module.css'

const LoginModal = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isShowLoginModal, setIsShowLoginModal] = useState<boolean>(false)

  return (
    <>
      <div
        className="lg:ml-2"
        onClick={() => setIsShowLoginModal(!isShowLoginModal)}
      >
        <Button type="blue">Masuk</Button>
      </div>
      {isShowLoginModal && (
        <Modal
          className={styles['loginModal']}
          onClose={() => setIsShowLoginModal(false)}
        >
          <div className="flex w-full items-center justify-between">
            <div className="-mt-4 -mb-4 flex w-96 flex-shrink-0 flex-wrap bg-white px-6 py-2 shadow-lg dark:bg-grey-6">
              <div className="mt-4 mb-4 flex w-full items-center justify-between">
                <h3 className="m-0 text-2xl text-blue dark:text-blue-night">
                  Masuk
                </h3>
                <span className="flex text-xs">
                  atau&nbsp;
                  <a href="#" className="text-blue dark:text-blue-night">
                    Daftar
                  </a>
                </span>
              </div>
              <div className="mb-4 flex w-full flex-wrap">
                <label
                  className="mb-2 w-full text-xs font-medium text-grey-5 dark:text-grey-2"
                  htmlFor="loginUsername"
                >
                  Username/Email
                </label>
                <InputText
                  id="loginUsername"
                  className="w-full text-xs"
                  name="username"
                  value={username}
                  placeholder="Masukkan username/email Agan"
                  onChange={setUsername}
                />
              </div>
              <div className="mb-4 flex w-full flex-wrap">
                <label
                  className="mb-2 w-full text-xs font-medium text-grey-5 dark:text-grey-2"
                  htmlFor="loginEmail"
                >
                  Password
                </label>
                <InputText
                  id="loginEmail"
                  className="w-full text-xs"
                  name="password"
                  placeholder="Masukkan password Agan"
                  value={password}
                  type="password"
                  onChange={setPassword}
                />
              </div>
              <div className="mb-2 flex w-full flex-wrap">
                <Button type="blue" className="w-full">
                  Masuk
                </Button>
                <a
                  className="ml-auto mt-4 text-sm text-blue dark:text-blue-night"
                  href="#"
                >
                  Lupa Password?
                </a>
              </div>
              <div className="mb-2 flex w-full flex-grow-0 flex-wrap justify-center">
                <span className="relative z-10 bg-white p-4 text-xs text-grey-7 dark:bg-grey-6 dark:text-grey-2">
                  atau masuk dengan
                </span>
                <span className="relative mx-4 -mt-6 w-full border-t border-grey-2 dark:border-grey-5"></span>
              </div>
              <div className="mb-4 flex w-full justify-between">
                <Button icon="google" type="google" className="mx-1 grow">
                  Google
                </Button>
                <Button icon="facebook" type="facebook" className="mx-1 grow">
                  Facebook
                </Button>
                <Button icon="twitter" type="twitter" className="mx-1 grow">
                  Twitter
                </Button>
              </div>
            </div>
            <div className="hidden h-96 w-auto flex-shrink-0 lg:flex">
              <img
                src="https://s.kaskus.id/assets/web_1.0/images/image-masuk.svg"
                alt="login"
                className="relative left-5"
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default LoginModal
