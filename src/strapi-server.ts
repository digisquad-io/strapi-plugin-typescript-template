import { defineServerPlugin } from '@strapi/types'
import { bootstrap } from './server/bootstrap'
import { config } from './server/config'
import { middlewares } from './server/middlewares'
import { contentTypes } from './server/contentTypes'

export default defineServerPlugin(() => ({
  bootstrap,
  config,
  middlewares,
  contentTypes,
}))