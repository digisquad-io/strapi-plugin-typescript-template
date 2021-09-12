import { defineServerMiddleware } from '@strapi/types'

export interface CustomMiddlewareOptions {
  enabled: boolean
}

export const custom = defineServerMiddleware((strapi) => ({
  default: {
    enabled: false,
  } as CustomMiddlewareOptions,
  beforeInitialize: () => {
    console.log('beforeInitialize from custom middleware', strapi)
  },
  initialize: () => {
    console.log('initialize from custom middleware', strapi)
  }
}))