import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'posts.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { id, title, content } = req.body;

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const posts = JSON.parse(fileContent);

    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      return res.status(404).json({ message: 'Post not found' });
    }

    posts[postIndex].title = title;
    posts[postIndex].content = content;
    posts[postIndex].updatedAt = new Date().toISOString();

    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
    res.status(200).json(posts[postIndex]);
  } else {
    res.status(405).json({ message: 'Only PUT requests are allowed' });
  }
}
