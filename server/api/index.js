import { Router } from 'express'

import prizes from './prizes'

const router = Router()

// Add USERS Routes
router.use(prizes)

export default router
