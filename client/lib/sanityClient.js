import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'j2ledlk7',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skUvPc53VR68k6pYv4hozOT7FG8vWQbSTtT29CSdoKjJMVnJeB4NAv8EySS3MX5ISgYMJJsaHOUiTBeKXVZ37VtbWEDFbIbZAH98R5XxhuyuNGL6m3zDfsHz81mjuFZvDdQztw0MfwwIQE2NcFHFg0GbWEcuaAPYf4XXacy9OemXgVz9jm6v',
  useCdn: false,
})
