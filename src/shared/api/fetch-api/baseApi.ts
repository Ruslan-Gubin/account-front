import { fetchUrl, fethConfig } from "./fetch-config";

interface BaseFetchArgs {
  params?: Record<string, string>;
  url?: string;
  method: string;
  payload?: object;
}

export const baseFetch = async <T>(args: BaseFetchArgs): Promise<T> => {
  const { method, url, params, payload } = args;

  const _config = fethConfig(method, payload);
  const _url = fetchUrl(url, params);

  try {
    let response = await window.fetch(_url, _config);

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Failed in base fetch:", error);
    throw error;
  }
};
