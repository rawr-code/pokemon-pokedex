import { cookies } from 'next/headers'

import userInfo from './user.json'

export async function POST(req: Request) {
  const { email, password } = await req.json()
  let isOk = false

  if (email === userInfo.email && password === userInfo.password) {
    isOk = true
    cookies().set('userToken', userInfo.token)
  }

  return Response.json({ isOk })
}
