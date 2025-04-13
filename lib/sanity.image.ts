import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from './sanity.config'

const client = createClient(sanityConfig)
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
