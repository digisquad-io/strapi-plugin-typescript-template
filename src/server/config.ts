import { defineConfig } from '@strapi/types'

export interface CachePluginOptions {
  type: 'mem' | 'redis'
}

export const config = defineConfig(() => ({
  default: ({ env }) => ({
    type: env('STRAPI_CACHE_TYPE', 'mem')
  } as CachePluginOptions),
  validator: () => {},
}))
