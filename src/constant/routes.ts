export enum PARAMS_ROUTES {
  ID = ':id',
  QUERY = ':query',
  SLUG = ':slug'
}

export const URL_THREAD_DETAIL = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/thread/${PARAMS_ROUTES.ID}/${PARAMS_ROUTES.SLUG}/`

export const URL_THREAD_LIST = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/forum/${PARAMS_ROUTES.ID}`

export const URL_USER_PROFILE = `${process.env.NEXT_PUBLIC_KASKUS_DOMAIN}/profile/${PARAMS_ROUTES.ID}`