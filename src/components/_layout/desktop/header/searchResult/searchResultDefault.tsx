const SearchResultDefault = () => {
  return (
    <>
      <div className="mb-1 flex justify-between px-1">
        <div className="text-base font-medium">Riwayat Pencarian</div>
        <a className="block cursor-pointer text-sm text-tertiary">
          Hapus semua
        </a>
      </div>
      <ul className="mb-5">
        <li>
          <a className="block w-full cursor-pointer p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6">
            Horor
          </a>
        </li>
      </ul>
      <div className="mb-1 px-1 text-base font-medium">
        Pencarian Terpopuler
      </div>
      <ul>
        <li>
          <a className="block w-full cursor-pointer p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6">
            Horor
          </a>
        </li>
        <li>
          <a className="block w-full cursor-pointer p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6">
            Elon Musk
          </a>
        </li>
        <li>
          <a className="block w-full cursor-pointer p-1 text-sm hover:bg-grey-1 dark:hover:bg-grey-6">
            Monyet
          </a>
        </li>
      </ul>
    </>
  )
}

export default SearchResultDefault
