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