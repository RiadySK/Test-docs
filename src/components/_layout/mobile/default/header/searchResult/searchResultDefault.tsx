const SearchResultDefault = () => {
  return (
    <>
      <div className="center flex justify-between pb-2">
        <div className="text-medium font-semibold text-primary dark:text-primary-night">
          Riwayat Pencarian
        </div>
        <a href="#" className="text-sm text-tertiary dark:text-tertiary-night">
          Hapus Semua
        </a>
      </div>
      <ul className="mb-2 text-secondary dark:text-secondary-night">
        <li className="pb-2 text-sm">
          <a href="#">Bebek</a>
        </li>
        <li className="pb-2 text-sm">
          <a href="#">Uler</a>
        </li>
        <li className="pb-2 text-sm">
          <a href="#">Meng</a>
        </li>
      </ul>
      <div className="text-medium pb-2 font-semibold text-primary dark:text-primary-night">
        Pencarian Populer
      </div>
      <ul className="text-secondary dark:text-secondary-night">
        <li className="pb-2 text-sm">
          <a href="#">True Story</a>
        </li>
        <li className="pb-2 text-sm">
          <a href="#">Fake News</a>
        </li>
        <li className="pb-2 text-sm">
          <a href="#">Sad Lyfe</a>
        </li>
      </ul>
    </>
  )
}

export default SearchResultDefault
