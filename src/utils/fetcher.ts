import axios from 'axios'

export const Enviroments = {
  LOCAL: 'LOCAL',
  REMOTE: 'REMOTE',
} as const

export type Enviroments = keyof typeof Enviroments

const getUrlHost = (enviroment: string) => {
  switch (enviroment) {
    case Enviroments.REMOTE: {
      return 'remote:host'
    }
    case Enviroments.LOCAL: {
      return '/api'
    }

    default: {
      const err = new Error('Enviroment API_STAGE no setted')
      throw err
    }
  }
}

const client = axios.create({
  baseURL: getUrlHost(process.env.NEXT_PUBLIC_API_STAGE),
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default client
