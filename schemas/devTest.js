import library from "../components/FontAwesome"

const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'u97bco11',
  dataset: 'dev',
  useCdn: false
})
