import { baseFetch } from "./baseApi";

export class FetchService {

  static get<T>({ url, params}: { url: string, params?: Record<string, string>}): Promise<T> {
    return baseFetch({url,  method: 'GET', params })
  }

  static post<T>({ url, payload, params }: {url: string, payload?: object | FormData, params?: Record<string, string> }): Promise<T> {
    return baseFetch({url,  payload, method: 'POST', params })
  }

  static patch<T>({url, payload, params}: {url: string, payload: object , params?: Record<string, string>}): Promise<T> {
    return baseFetch({url, payload, method: 'PATCH', params })
  }

  static delete<T>({ url, params }: {url: string,  params?: Record<string, string>}): Promise<T> {
    return baseFetch({url, method: 'DELETE', params })
  }

  static graphQl<T>({ query, variables }: { query: string, variables?: object }): Promise<T> {
    return baseFetch({ method: 'POST', payload: { query, variables } })
  }

}
