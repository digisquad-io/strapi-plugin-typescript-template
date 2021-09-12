import { defineConfig, defineContentType, defineServerMiddleware, defineServerPlugin } from '@strapi/types'

// plugin config
const config = defineConfig(() => ({
  default: {},
  validator: () => true,
}))

// custom content-type registrtation
const barContentType = defineContentType(() => ({
  schema: {
    kind: 'collectionType',
    collectionName: 'tests',
    info: {
      name: 'bar',
      singularName: 'bar',
      pluralName: 'bars',
      displayName: 'Bar',
    },
    options: {},
    attributes: {
      myText: {
        type: "string"
      }
    }
  },
}))

// custom middleware registrtation
const fooMiddleware = defineServerMiddleware((strapi) => ({
  default: {
    enabled: true
  },
  beforeInitialize: () => {
    console.log('beforeInitialize from foo', strapi)
  }
}))


// define plugin
export default defineServerPlugin((strapi) => ({
  bootstrap() {
    console.log('bootstrap from typescript!!!!', strapi)
  },
  config,
  contentTypes: {
    bar: barContentType,
    // Plain objects works like a charm
    foo: {
      schema: {
        kind: 'collectionType',
        collectionName: 'testuuus',
        info: {
          name: 'foo',
          singularName: 'foo',
          pluralName: 'foos',
          displayName: 'Foo',
        },
        options: {
          draftAndPublish: false,
        },
        attributes: {
          myText: {
            type: "string"
          }
        }
      },
    }
  },
  middlewares: {
    foo: fooMiddleware,
    // Plain objects works like a charm
    test: {
      default: {
        enabled: true
      },
      beforeInitialize: () => {
        console.log('beforeInitialize from test')
      }
    },
  }
}))