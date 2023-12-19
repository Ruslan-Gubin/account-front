import { CacheManager } from "../domain/cache";


export interface CacheService {
  cache: <T>() => CacheManager<T>;
  getValueInKey: <T>(key: string)  => T | null;
  addKeyInCache: <T>(key: string, value: T) => void;
  removeKeyFromCache: (key: string) => void;
  resetKeysInCach: (value?: string) => void;
}
