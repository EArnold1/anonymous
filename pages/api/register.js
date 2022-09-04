// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { API_URL } from '@/config/index';
import cookie from 'cookie'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }

  const { username, email, password } = req.body;

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const body = JSON.stringify({ username, email, password });

    const resData = await axios.post(`${API_URL}/api/user`, body, config);

    const data = await resData.data;

    res.setHeader('Set-Cookie', cookie.serialize('token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7,
      path: '/'
    }))

    res.json({ data })

  } catch (err) {
    const errors = err.response.data
    res.status(500).json({ errors: errors.errors[0].msg })
  }
}
