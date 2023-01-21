import { addTodo } from "./list";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ msg: string }>
) {
  if (req.method === "POST") {
    let { name }: { name: string } = JSON.parse(req.body);
    addTodo(name);
    res.status(200).json({ msg: "todo added" });
  } else {
    res.status(400).json({ msg: "invalid request method" });
  }
}