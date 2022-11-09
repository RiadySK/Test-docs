export enum PARAMS_API {
  ID = ':id',
  QUERY = ':query'
}

export const API_URL_CHANNEL_HEADER = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/channel/channel_header';
export const API_URL_CHANNEL_KASKUSTV = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/channel/' + PARAMS_API.ID + '/kaskustv';
export const API_URL_THREAD_RECOMMENDATION = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/channel/' + PARAMS_API.ID + '/recommendation';
export const API_URL_TOP_CREATOR = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/channel/' + PARAMS_API.ID + '/top_creators';

export const API_URL_MY_COMMUNITY = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/user/communities';
export const API_URL_USER = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/user';

export const API_URL_COMMUNITY_CHANNEL = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/communities/' + PARAMS_API.ID + '/' + PARAMS_API.QUERY;

export const API_URL_NOTIFICATION = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/notifications';

export const API_URL_HOT_TOPICS = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/hot_topics';

export const API_URL_HOT_THREADS_LANDING = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/hot_threads_landing';
export const API_URL_HOT_THREADS = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/hot_threads';

export const API_URL_SEARCH_POPULAR = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/search/popular';
export const API_URL_SEARCH_SNIPPET = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/search/snippet';

export const API_URL_BANNER = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/banners';
