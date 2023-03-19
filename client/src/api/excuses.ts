import { client } from './client'

export type Excuse = {
  http_code: number
  tag: string
  message: string
}

export const getExcuses = (): Promise<Excuse[]> =>
  client.get('/excuses').then((response) => response.data)
