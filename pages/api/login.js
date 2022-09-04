// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { API_URL } from '@/config/index';
import cookie from 'cookie'

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ message: `Method ${req.method} is not allowed` })
    }

    const { username, password } = req.body;


    const body = JSON.stringify({ username, password });

    const resData = await fetch(`${API_URL}/api/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body,
    });

    const data = await resData.json();

    if (resData.ok) {
        // set httpOnly cookie
        res.setHeader('Set-Cookie', cookie.serialize('token', data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7,
            path: '/'
        }))

        res.status(200).json({ data })
    } else {
        const errors = data.errors[0].msg
        res.status(401).json({ errors })
    }
}
