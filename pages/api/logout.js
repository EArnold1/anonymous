// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cookie from 'cookie'

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET'])
        res.status(405).json({ message: `Method ${req.method} is not allowed` })
    } else {
        res.setHeader('Set-Cookie', cookie.serialize('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: new Date(0),
            path: '/'
        }))

        res.status(200).json({ msg: 'Success' })
    }
}
