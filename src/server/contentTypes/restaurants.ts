import { 
  defineContentType,
} from '@strapi/types'

export const restaurants = defineContentType(() => ({
  schema: {
    kind: 'collectionType',
    collectionName: 'restaurants',
    info: {
      name: 'restaurant',
      singularName: 'restaurant',
      pluralName: 'restaurants',
      displayName: 'Restaurants',
    },
    options: {},
    attributes: {
      name: {
        type: "string"
      }
    }
  },
}))