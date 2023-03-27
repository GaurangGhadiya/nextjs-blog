import fs from "fs";

export default async function handler(req, res) {
    let files = await fs.promises.readdir("ContactData")
    let addFile = await fs.promises.writeFile(`ContactData/${files.length+1}.json`,JSON.stringify(req.body))

  res.status(200).json({ response: "Form Submitted Sucessfull!!" });
}
