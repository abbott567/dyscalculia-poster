import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  const pageTitle = 'Home'
  const template = 'pages/home/template.njk'
  res.render(template, { pageTitle })
})

export default router
