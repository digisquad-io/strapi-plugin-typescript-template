import type { ServerMiddleware } from '@strapi/types'
import { custom } from './custom'

export const middlewares: Record<string, ServerMiddleware> = {
  custom
}