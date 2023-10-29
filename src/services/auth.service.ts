import urls from './urls'

// Utils
import { fetcher } from '@utils'

export const authLogin = async ({
  email,
  password,
}: {
  email: string
  password: string
}) => {
  const { data } = await fetcher.post<{
    isOk: boolean
  }>(urls.AUTH.login, {
    email,
    password,
  })

  return data
}
