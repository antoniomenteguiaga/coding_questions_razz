import { Router } from 'express'

import rewards from './rewards'

const router = Router()

// Add USERS Routes
router.use(rewards)

export default router
