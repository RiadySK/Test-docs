export enum PARAMS {
  ID = ':id',
  QUERY = ':query'
}

export const API_URL_CHANNEL_HEADER = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/channel/channel_header';
export const API_URL_CHANNEL_KASKUSTV = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/channel/' + PARAMS.ID + '/' + 'kaskustv';


export const API_URL_MY_COMMUNITY = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/user/communities';
export const API_URL_USER = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/user';

export const API_URL_COMMUNITY_CHANNEL = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/communities/' + PARAMS.ID + '/' + PARAMS.QUERY;

export const API_URL_NOTIFICATION = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/notifications';

export const API_URL_HOT_TOPICS = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/hot_topics';

export const API_URL_HOT_THREADS_LANDING = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/hot_threads_landing';
export const API_URL_HOT_THREADS = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/hot_threads';

export const API_URL_SEARCH_POPULAR = process.env.NEXT_PUBLIC_KASKUS_API_DOMAIN + '/search/popular';
