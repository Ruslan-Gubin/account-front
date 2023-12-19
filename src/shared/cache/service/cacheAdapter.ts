import type { CacheService } from '../application/port';
import { cacheManager } from '../domain/cache';



export const cacheAdapter: CacheService = {
  cache:() => cacheManager,
  addKeyInCache(key, value) {
    return this.cache().addKeyInCache(key, value)
  },
  getValueInKey(key): any {
    return this.cache().getValueInKey(key)
  },
  removeKeyFromCache(key) {
    return this.cache().removeKeyFromCache(key)
  },
  resetKeysInCach(value) {
    const cache = cacheAdapter.cache().cache
    
    if (!value) {
      cache.forEach(item => {
          cacheAdapter.removeKeyFromCache(item.key)
      })
    } else {
      cache.forEach(item => {
        if (item.key.toLowerCase().includes(value.toLowerCase())) {   
          cacheAdapter.removeKeyFromCache(item.key)
        }
      })
    }
  },
};
