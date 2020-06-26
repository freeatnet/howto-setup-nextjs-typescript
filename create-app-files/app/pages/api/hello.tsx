import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: 'John Doe' })
}

export default handler