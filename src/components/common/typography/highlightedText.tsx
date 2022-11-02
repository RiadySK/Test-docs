import { highlighter } from 'utils/highlighter'

interface Props {
  keyword: string
  text: string
}

const HighlightedText = ({ keyword, text }: Props) => {
  const parts = highlighter(keyword, text)
  return (
    <>
      {parts.map((part, index) => (
        <span
          key={index}
          className={
            part.toLowerCase() === keyword.toLowerCase()
              ? 'text-blue dark:text-yellow-night'
              : ''
          }
        >
          {part}
        </span>
      ))}
    </>
  )
}

export default HighlightedText
