# Strapi V4 - Typescript plugin template

This package is an example of typescript plugin using the proposal for @strapi/types. [Read more about first here](https://github.com/digisquad-io/strapi-v4-types)

```ts
// src/server/bootstrap.ts
import { 
  withStrapi,
} from '@strapi/types'

export function bootstrap() {
  return withStrapi(async (strapi) => {
    // withStrapi is an empty function, 
    // it's here only to decalre the type for us

    const entityService = strapi.service('entityService')
    
    const articles = await entityService.query("article").findMany({
      select: ["title", "description"],
      where: { title: "Hello World" },
      orderBy: { title: "DESC" },
      populate: { category: true },
    })
  })
}
```

```ts
// src/server/config.ts
import { 
  defineConfig,
} from '@strapi/types'

export interface CustomPluginOption {
  mode: 'default' | 'typescript'
}
export const config = defineConfig(() => ({
  default: ({ env }) => ({
    mode: env('STRAPI_PLUGIN_CONFIG_MODE', 'default')
  } as CustomPluginOption),
  validator: () => true,
}))
```

```ts
// src/server/contentType/restaurants.ts
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
```

```ts
// src/strapi-server.ts
import { 
  defineServerPlugin, 
} from '@strapi/types'
import { bootstrap } from './server/bootstrap'
import { config } from './server/bootstrap'
import { restaurants } from './server/contentType/restaurants'

export default defineServerPlugin((strapi) => ({
  bootstrap,
  config,
  contentTypes: {
    restaurants,
  }
})) 
``` 