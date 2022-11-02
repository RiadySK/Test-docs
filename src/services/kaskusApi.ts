// TODO: Temporary for testing purpuses, will be deleted later
import OAuth from 'oauth-1.0a'
import crypto from 'crypto'

const tempKaskusApiKey = '54bb3fdd12fb1e0a36f43ae90eadb4'
const tempKaskusApiSecret = 'c5a46cc1184280110dcd4ec5e573dc'

const hash_function_sha1 = (base_string: string, key: string) => {
  return crypto.createHmac('sha1', key).update(base_string).digest('base64')
}

const getFetcher = <T>(url: string) => {
  const key = tempKaskusApiKey
  const secret = tempKaskusApiSecret

  const request_data = {
    url: url,
    method: 'GET',
  }

  const oauth = new OAuth({
    consumer: { key: key, secret: secret },
    signature_method: 'HMAC-SHA1',
    hash_function: hash_function_sha1,
  })

  // Failed because CORS
  return async (url: string) =>
    await fetch(url, {
      headers: {
        Accept: 'application/json',
        ...oauth.toHeader(oauth.authorize(request_data)),
      },
    }).then((response) => {
      return response.json() as Promise<T>
    })
}

export default getFetcher
