import { Router } from 'express'

import userRoutes from './user.routes.js'

const router = Router()

router.use('/api/users', userRoutes)

export default router