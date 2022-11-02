import { useSearchPopular } from 'services/search'

const SearchResultDefault = () => {
  const { data, isLoading } = useSearchPopular()
  return (
    <>
      <div className="center flex justify-between px-1 pb-2">
        <div className="text-medium font-semibold text-primary dark:text-primary-night">
          Riwayat Pencarian
        </div>
        <a href="#" className="text-sm text-tertiary dark:text-tertiary-night">
          Hapus Semua
        </a>
      </div>
      <ul className="mb-2 px-1 text-secondary dark:text-secondary-night">
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
      {!isLoading && data?.data && (
        <>
          <div className="text-medium px-1 pb-2 font-semibold text-primary dark:text-primary-night">
            Pencarian Populer
          </div>
          <ul className="px-1 text-secondary dark:text-secondary-night">
            {data.data.map((item, index) => {
              return (
                <li key={index} className="pb-2 text-sm">
                  <a href="#">{item}</a>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </>
  )
}

export default SearchResultDefault
