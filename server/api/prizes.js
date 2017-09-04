import { Router } from 'express'
import Prize from '../models/prize'

const router = Router()

/* GET prizes listing. */
router.get('/prizes', function (req, res, next) {
  Prize.find( function (err, prizes) {
    if (err) {
      throw err
    }
    res.json(prizes)
  })
})

/* GET prize by ID. */
router.get('/prizes/:id', function (req, res, next) {
  const id = req.params.id
  Prize.findById(id, function (err, prize) {
    if (err) {
      throw err
    }
    res.json(prize)
  })
})

router.post('/prizes/:id', function (req, res, next) {
  const id = req.params.id
  Prize.findById(id, function (err, prize) {
    if (err) {
      throw err
    }
    if(prize.quantity > 0){
      prize.quantity--
    }else{
      throw new Error('Out of Product')
    }
    prize.save( function (err) {
      if (err) {
        throw err
      }
      res.json(prize)
    })
  })
})

export default router
