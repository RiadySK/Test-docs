export enum PARAMS_ROUTES {
  ID = ':id',
  QUERY = ':query',
  SLUG = ':slug'
}

export const URL_THREAD_DETAIL = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/thread/${PARAMS_ROUTES.ID}/${PARAMS_ROUTES.SLUG}`

export const URL_THREAD_LIST = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/forum/${PARAMS_ROUTES.ID}`
export const URL_FORUM_ALL = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/forum/922`
export const URL_CREATE_COMMUNITY = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/community/create`
export const URL_MY_COMMUNITY = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/myforum/forum_subscription`

export const URL_USER_PROFILE = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/profile/${PARAMS_ROUTES.ID}`
export const URL_USER_THREAD_LIST = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/profile/viewallthreads/${PARAMS_ROUTES.ID}`

export const URL_CHANNEL_LANDING = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/channel/${PARAMS_ROUTES.ID}`

export const URL_HOT_TOPIC_ALL = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/topic`
export const URL_HOT_TOPIC = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/topic/${PARAMS_ROUTES.SLUG}`

export const URL_SEARCH_PAGE = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/search?q=${PARAMS_ROUTES.QUERY}`
