// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { API_URL } from '@/config/index';
import cookie from 'cookie'

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', ['GET'])
        return res.status(405).json({ message: `Method ${req.method} is not allowed` })
    }

    const { token } = cookie.parse(req.headers.cookie);

    try {

        const resData = await axios.get(`${API_URL}/api/auth`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        const data = await resData.data;

        res.json({ data })

    } catch (err) {
        const errors = err.response.data
        res.status(500).json({ errors: errors.errors[0].msg })
    }
}
