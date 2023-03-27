import fs from "fs"

export default async function handler(req, res) {
  var response = [];
  let files = await fs.promises.readdir("BlogData")
  if(files.length){
    for(let i = 0; i< files?.length; i++) {
      let blog = await fs.promises.readFile(`BlogData/${files?.[i]}`,'utf-8')
      response.push(JSON.parse(blog))
    }
  }
  res.status(200).json({response })
}
  