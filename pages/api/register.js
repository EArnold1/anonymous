// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import { API_URL } from '@/config/index';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ message: `Method ${req.method} is not allowed` })
  }

  const { username, email, password } = req.body;

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const body = JSON.stringify({ username, email, password });

    const resData = await axios.post(`${API_URL}/api/user`, body, config);

    const data = await resData.data;

    res.status(200).json({ data })
  } catch (err) {
    console.log(err)
    res.status(500).json({ errors: [{ msg: 'Server Error' }] })
  }
}
