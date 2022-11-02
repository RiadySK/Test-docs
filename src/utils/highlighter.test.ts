import { highlighter } from './highlighter'

describe('it can separate input into array of split strings', () => {
  it('should return an array which contains exactly one string that equals to "text" when no matches found', () => {
    const keyword = 'nan'
    const text = 'hello world'

    const result = highlighter(keyword, text)

    expect(result).toHaveLength(1)
    expect(result[0]).toBe(text)
  })

  it('should return an array which contains exactly one string that equals to "text" when "keyword" is an empty string', () => {
    const keyword = ''
    const text = 'hello world'

    const result = highlighter(keyword, text)

    expect(result[0]).toBe(text)
  })

  it('should return an array which contains exactly one empty string when "text" is empty', () => {
    const keyword = 'nan'
    const text = ''

    const result = highlighter(keyword, text)

    expect(result).toHaveLength(1)
    expect(result[0]).toBe('')
  })

  it('should return an array which contains exactly one string that matches "keyword" when "keyword" is an exact match', () => {
    const keyword = 'nan'
    const text = 'nan'

    const result = highlighter(keyword, text)

    expect(result.includes(keyword)).toBe(true)
  })

  it('should return an array which contains exactly one string that matches "keyword"', () => {
    const keyword = 'nan'
    const text = 'aaanan'

    const result = highlighter(keyword, text)

    expect(result.includes(keyword)).toBe(true)
  })

  it('should return an array which contains n strings that matches "keyword" when there are multiple matches found', () => {
    const keyword = 'nan'
    const text = 'nanaaanan'

    const result = highlighter(keyword, text)

    expect(result.filter((item) => item === keyword).length).toBe(2)
  })
})
