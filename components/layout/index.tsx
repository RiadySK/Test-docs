import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

type MyProps = {
  children: React.ReactNode
}

export default function Layout({ children }: MyProps) {
  return (
    <>
      <Header />
      <div className="mt-4 max-w-screen-lg mx-auto flex">
        <Sidebar />
        <main className="bg-white p-4 w-full">
          {children}
        </main>
      </div>
    </>
  )
}
