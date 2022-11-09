import classNames from 'classnames'

interface Props {
  alt: string
  src: string
  srcHD?: string
  width?: number
  height?: number
  loading?: 'eager' | 'lazy'
  className?: string
}

const Image = ({
  alt,
  src,
  srcHD,
  width,
  height,
  loading = 'lazy',
  className,
}: Props) => {
  return (
    <picture className="relative flex">
      {srcHD && <source media="(min-width: 720px)" src={srcHD} />}
      <img
        src={src}
        alt={alt}
        width={width || '100%'}
        height={height || 'auto'}
        className={classNames('block w-full', className)}
        loading={loading}
      />
    </picture>
  )
}

export default Image
