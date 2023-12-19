import { CONFIG_APP } from "../../config";
import { CookieService, LocalStorage } from "../../service";


export const getToken = () => {
  return CookieService.get(CONFIG_APP.TOKEN);
};

const getRefreshToken = () => {
  const refreshLocal = LocalStorage.get(CONFIG_APP.REFRESH_TOKEN_LOCALE_STORAGE, '')
  const refreshCookie = CookieService.get(CONFIG_APP.REFRESH_TOKEN_COOKIE)
  
  return refreshLocal || refreshCookie || ''
};

const REFRESH_SCHEMA = `
query refreshToken {
  refreshToken {
      token
  }
}
`
export async function fetchRefresh(): Promise<any> {
const payload = { query: REFRESH_SCHEMA }

    const fetchRefreshToken = await fetch(CONFIG_APP.API_ENDPOINT, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'x-apollo-operation-name': 'example-operation',
        'Authorization': `Bearer ${getRefreshToken()}`,
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    });


    const json = await fetchRefreshToken.json();
    console.log(json)
    // if (fetchRefreshToken.status === 200) {
    //   const { tokens: { accessToken, refreshToken } } = json.data;
    //   return { accessToken, refreshToken } 
    // } else {
    //   return json
    // }

  }

export const saveTokenInStorage = (accessToken: string,  refreshToken: string) => {
  window.localStorage.setItem(CONFIG_APP.ACCESS_TOKEN_LOCALE_STORAGE, accessToken);
  window.localStorage.setItem(CONFIG_APP.REFRESH_TOKEN_LOCALE_STORAGE, refreshToken);

  CookieService.set(accessToken, CONFIG_APP.ACCESS_TOKEN_LOCALE_STORAGE);
  CookieService.set(accessToken, CONFIG_APP.REFRESH_TOKEN_LOCALE_STORAGE);
};

export const isQueryGraphQlRequest = (payload: { query: string } | object | undefined): boolean => {
  if (!payload || !('query' in payload) || typeof payload.query !== 'string') return false;

  const queryString = payload.query.trimStart() 

  return queryString.startsWith('query')
};

export const generateCacheKey = (url: string, method: string, payload: any): string => {
  const payloadString = JSON.stringify(payload);
  const cacheKey = `${url}:${method}:${payloadString}`;
  
  return cacheKey;
};

export const getCacheKey = (method: string, url: string, payload: object | undefined): string | null => {
  const isQuery = isQueryGraphQlRequest(payload)

  if (method !== 'GET' && !isQuery) return null;
  
  let cacheKey: string | null = null;

  if (method === 'GET' || isQuery) {
    cacheKey = generateCacheKey(url, method, payload)
  }

  return cacheKey
}