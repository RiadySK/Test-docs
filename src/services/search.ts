import { API_URL_SEARCH_POPULAR, API_URL_SEARCH_SNIPPET } from 'constant/api'
import useSWR from 'swr'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { ApiResponse } from 'types/common'
import { useMemo, useState } from 'react'
import { SearchSnippet } from 'types/search'

export function useSearchPopular() {
  return useSWR<ApiResponse<string[]>>(API_URL_SEARCH_POPULAR, null, {
    revalidateOnFocus: false,
  })
}

// TODO Revisit later for search community
export function useSearchSnippet(query: string) {
  return useSWR<ApiResponse<SearchSnippet>>(
    API_URL_SEARCH_SNIPPET + '?q=' + query,
    null,
    {
      revalidateOnFocus: false,
    },
  )
}

const SEARCH_HISTORY_COOKIE = 'search_history_'

export const useSearchHistory = () => {
  const cookieKeywords =
    (getCookie(SEARCH_HISTORY_COOKIE) as unknown as string) ?? []
  const parsedCookieKeywords = !!cookieKeywords.length
    ? JSON.parse(cookieKeywords)
    : cookieKeywords

  const [keywords, setKeywords] = useState<string[]>(parsedCookieKeywords)

  const addKeyword = (keyword: string) => {
    const lowerKeyword = keyword.toLowerCase()
    const newKeywords: string[] = [
      lowerKeyword,
      ...keywords.filter((item) => item !== lowerKeyword),
    ].slice(0, 3)

    setKeywords(newKeywords)
    setCookie(SEARCH_HISTORY_COOKIE, newKeywords)
  }

  const removeKeyword = (keyword: string) => {
    const lowerKeyword = keyword.toLowerCase()
    const newKeywords: string[] = [
      ...keywords.filter((item) => item !== lowerKeyword),
    ]

    setKeywords(newKeywords)
    setCookie(SEARCH_HISTORY_COOKIE, newKeywords)
  }

  const removeAllKeywords = () => {
    setKeywords([])
    deleteCookie(SEARCH_HISTORY_COOKIE)
  }

  return useMemo(
    () => ({
      keywords,
      addKeyword,
      removeKeyword,
      removeAllKeywords,
    }),
    [keywords, addKeyword, removeKeyword, removeAllKeywords],
  )
  // return { keywords, addKeyword, removeKeyword, removeAllKeywords }
}
