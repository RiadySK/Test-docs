import { SWRInfiniteResponse } from "swr/infinite";
import { ApiResponse, SWRInfiniteFlatResponse } from "types/common";

export const flatSWRInfiniteAPIResp = <T, S>(response: SWRInfiniteResponse<ApiResponse<T[]>, S>) => {
  if (response.data) {
    let flatData: T[] = [];

    response.data.forEach(item => {
      flatData = flatData.concat(item.data);
    })
    let flat: SWRInfiniteFlatResponse<ApiResponse<T[]>, S> = {
      ...response,
      data: {
        data: flatData,
        meta: response.data[response.data.length - 1]?.meta
      }
    };
    return flat;
  }
  return response as SWRInfiniteFlatResponse<ApiResponse<T[]>, S>;
}
