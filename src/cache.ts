import { cache as cacheObj, cooldownCache as cooldownCacheObj } from "./types";

let cacheObj: cacheObj = {}

export class BotCache {
  constructor() {}

  set(name: string, val: any) {
    cacheObj[name] = val
  }
  get(name: string) {
    return cacheObj[name]
  }
  exist(name: string) {
    return cacheObj[name] ? true : false
  }
}

