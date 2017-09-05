import { Router } from 'express'
import Prize from '../models/prize'

const router = Router()

/* GET prizes listing. */
router.get('/prizes', function (req, res, next) {
  Prize.find( function (err, prizes) {
    if (err) {
      return next(err)
    }
    return res.json(prizes)
  })
})

/* GET prize by ID. */
router.get('/prizes/:id', function (req, res, next) {
  const id = req.params.id
  Prize.findById(id, function (err, prize) {
    if (err) {
      return next(err)
    }
    return res.json(prize)
  })
})

router.post('/prizes/:id', function (req, res, next) {
  const id = req.params.id
  Prize.findById(id, function (err, prize) {
    if (err) {
      return next(err)
    }
    if(prize.quantity > 0){
      prize.quantity--
    }else{
      return next(new Error('Out of Product'))
    }
    prize.save( function (err) {
      if (err) {
        return next(err)
      }
      return res.json(prize)
    })
  })
})

export default router
