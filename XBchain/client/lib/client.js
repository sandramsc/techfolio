/* By Sandra Ashipala <https://github.com/sandramsc> 27.03.2022*/
import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: 'v1',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
})