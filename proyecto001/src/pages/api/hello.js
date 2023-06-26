// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // me conecto a la base de datos mysql pero antes
  // saco informacion del request.
  res.status(200).json({ name: 'John Doe' })
}
