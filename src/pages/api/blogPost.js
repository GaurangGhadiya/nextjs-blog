import fs from "fs";

export default async function handler(req, res) {
  let blog = await fs.promises.readFile(
    `BlogData/${req.query.slug}.json`,
    "utf-8"
  );
  res.status(200).json({ response: JSON.parse(blog) });
}
