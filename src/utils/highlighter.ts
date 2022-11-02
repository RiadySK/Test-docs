export const highlighter = (keyword: string, text: string) => {
  if (!keyword.length || !text.length) {
    return [text]
  }
  const escapeRegExp = (text: string) => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
  }

  keyword = keyword.trim()
  const pattern = new RegExp('(' + escapeRegExp(keyword) + ')', 'gi')

  return text.split(pattern)
}
