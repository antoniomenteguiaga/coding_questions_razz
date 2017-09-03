import { Router } from 'express'

const router = Router()

// Mock Users
const rewards = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' },
]

/* GET rewards listing. */
router.get('/rewards', function (req, res, next) {
  res.json(rewards)
})

/* GET reward by ID. */
router.get('/rewards/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < rewards.length) {
    res.json(rewards[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
